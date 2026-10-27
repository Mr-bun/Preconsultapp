import type { Block, Lang, Ref, SourceDoc, T } from '../data/types';
import { DOCS } from '../data';

const MONTHS: Record<Lang, string[]> = {
  nl: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
};

/** Parse yyyy-mm-dd without time zones, so dates never shift by a day. */
function parts(iso: string): [number, number, number] {
  const [y, m, d] = iso.split('-').map(Number);
  return [y, m, d];
}

/** Long form: "6 oktober 2026" / "6 October 2026". */
export function longDate(iso: string, lang: Lang): string {
  const [y, m, d] = parts(iso);
  return `${d} ${MONTHS[lang].at(m - 1)} ${y}`;
}

/** Short form: "06-10-2026" (Dutch records) / "6 Oct 2026". */
export function shortDate(iso: string, lang: Lang): string {
  const [y, m, d] = parts(iso);
  if (lang === 'nl') return `${String(d).padStart(2, '0')}-${String(m).padStart(2, '0')}-${y}`;
  return `${d} ${(MONTHS.en.at(m - 1) ?? '').slice(0, 3)} ${y}`;
}

const MON_SHORT: Record<Lang, string[]> = {
  nl: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

/** Interface date: "29 sep 2026" / "29 Sep 2026". */
export function mediumDate(iso: string, lang: Lang): string {
  const [y, m, d] = parts(iso);
  return `${d} ${MON_SHORT[lang].at(m - 1)} ${y}`;
}

/** Dutch writes decimals with a comma and ranges with "tot". */
export function localizeNum(s: string, lang: Lang): string {
  if (lang === 'en') return s;
  return s.replace(/(\d)\.(\d)/g, '$1,$2').replace(/ to /g, ' tot ');
}

/** A language-neutral string (localized numbers) or a bilingual pair. */
export function txt(x: string | T, lang: Lang): string {
  return typeof x === 'string' ? localizeNum(x, lang) : x[lang];
}

/** Today's local date as yyyy-mm-dd. */
export function todayISO(now = new Date()): string {
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

export function addDays(iso: string, n: number): string {
  const [y, m, d] = parts(iso);
  return todayISO(new Date(y, m - 1, d + n));
}

/** "dinsdag 27 oktober 2026" / "Tuesday 27 October 2026". */
export function weekdayDate(iso: string, lang: Lang): string {
  const [y, m, d] = parts(iso);
  const fmt = new Intl.DateTimeFormat(lang === 'nl' ? 'nl-NL' : 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  return fmt.format(new Date(y, m - 1, d));
}

/** Whole years between a birth date and a given day. */
export function ageOn(dob: string, on: string): number {
  const [y, m, d] = parts(dob);
  const [Y, M, D] = parts(on);
  return Y - y - (M < m || (M === m && D < d) ? 1 : 0);
}

/**
 * Plain-string cells (test names, medicine names, lab values) are stored once, in Dutch.
 * In English view, translate the known clinical terms and switch decimal commas to points.
 * Longer phrases come first so "Glucose (niet nuchter)" wins over "Glucose (nuchter)".
 */
const EN_TERMS: [string, string][] = [
  ['huisarts (telefonisch consult)', 'general practitioner (telephone consultation)'],
  ['Glucose (niet nuchter)', 'Glucose (non-fasting)'],
  ['Glucose (nuchter)', 'Glucose (fasting)'],
  ['Urine drugsscreening', 'Urine drug screen'],
  ['Cholesterol totaal', 'Total cholesterol'],
  ['25-OH-vitamine D', '25-OH vitamin D'],
  ['Lithium (12-uurs)', 'Lithium (12-hour)'],
  ['Lithiumcarbonaat', 'Lithium carbonate'],
  ['Valproïnezuur', 'Valproic acid'],
  ['Macrogol/elektrolyten', 'Macrogol/electrolytes'],
  ['Triglyceriden', 'Triglycerides'],
  ['Hemoglobine', 'Hemoglobin'],
  ['Leukocyten', 'Leukocytes'],
  ['Kreatinine', 'Creatinine'],
  ['Vitamine B12', 'Vitamin B12'],
  ['Prolactine', 'Prolactin'],
  ['Natrium', 'Sodium'],
  ['Kalium', 'Potassium'],
  ['Melatonine', 'Melatonin'],
  ['Oxybutynine', 'Oxybutynin'],
  ['Ropinirol ', 'Ropinirole '],
  ['Aripiprazol ', 'Aripiprazole '],
  [' sinds ', ' since '],
  ['SEH Wilgenhoek', 'ED Wilgenhoek'],
  ['psychiater', 'psychiatrist'],
  ['huisarts', 'general practitioner'],
];

export function toEnglish(s: string): string {
  let out = s;
  for (const [nl, en] of EN_TERMS) out = out.split(nl).join(en);
  return out.replace(/(\d),(\d)/g, '$1.$2');
}

export function cellText(c: string | T, lang: Lang): string {
  if (typeof c !== 'string') return c[lang];
  return lang === 'en' ? toEnglish(c) : c;
}

/** Every addressable passage in a document, keyed by its id, as bilingual text. */
export function passages(doc: SourceDoc): Map<string, T> {
  const out = new Map<string, T>();
  const add = (id: string | undefined, t: T) => {
    if (id) out.set(id, t);
  };
  doc.blocks.forEach((b: Block) => {
    switch (b.type) {
      case 'para':
        add(b.id, b.text);
        break;
      case 'fields':
        b.rows.forEach((r) => add(r.id, { nl: `${r.label.nl}: ${r.value.nl}`, en: `${r.label.en}: ${r.value.en}` }));
        break;
      case 'list':
        b.items.forEach((i) => add(i.id, i.text));
        break;
      case 'soep':
        b.rows.forEach((r) => add(r.id, r.text));
        break;
      case 'table':
        b.rows.forEach((r) =>
          add(r.id, {
            nl: r.cells.map((c) => cellText(c, 'nl')).filter(Boolean).join(' · '),
            en: r.cells.map((c) => cellText(c, 'en')).filter(Boolean).join(' · '),
          }),
        );
        break;
      case 'signal':
        b.phases.forEach((p) =>
          add(p.id, {
            nl: `${p.title.nl}. Signalen: ${p.signs.nl} Acties: ${p.actions.nl}`,
            en: `${p.title.en}. Signs: ${p.signs.en} Actions: ${p.actions.en}`,
          }),
        );
        break;
      case 'heading':
        break;
    }
  });
  return out;
}

export function passageText(ref: Ref): T | undefined {
  const doc = DOCS[ref.doc];
  if (!doc || !ref.at) return undefined;
  return passages(doc).get(ref.at);
}

export function refLabel(ref: Ref, lang: Lang): string {
  const doc = DOCS[ref.doc];
  if (!doc) return 'Unknown source';
  return `${doc.short[lang]}, ${mediumDate(doc.date, lang)}`;
}

/** Collapse repeated citations of the same document into one chip that keeps the first passage. */
export function uniqueByDoc(refs: Ref[]): Ref[] {
  const seen = new Set<string>();
  return refs.filter((r) => {
    if (seen.has(r.doc)) return false;
    seen.add(r.doc);
    return true;
  });
}
