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

export function tr(t: T, lang: Lang): string {
  return t[lang];
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
  return `${doc.short[lang]}, ${shortDate(doc.date, lang)}`;
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
