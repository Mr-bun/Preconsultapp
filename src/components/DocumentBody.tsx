import type { ReactNode } from 'react';
import type { Block, Lang, Patient, SourceDoc, T } from '../data/types';
import { ORGS } from '../data/orgs';
import { cellText, longDate, shortDate, toEnglish } from '../lib/format';

const L = {
  synthetic: { nl: 'Synthetisch document · fictieve instelling en zorgverleners', en: 'Synthetic document · fictional organization and clinicians' },
  re: { nl: 'Betreft', en: 'Re' },
  born: { nl: 'geb.', en: 'born' },
  patientNo: { nl: 'patiëntnr.', en: 'patient no.' },
  dear: { nl: 'Geachte collega,', en: 'Dear colleague,' },
  regards: { nl: 'Met collegiale groet,', en: 'Kind regards,' },
  patient: { nl: 'Patiënt', en: 'Patient' },
  author: { nl: 'Auteur', en: 'Author' },
  date: { nl: 'Datum', en: 'Date' },
  flag: { nl: 'Vlag', en: 'Flag' },
  signs: { nl: 'Signalen', en: 'Signs' },
  actions: { nl: 'Wat te doen', en: 'What to do' },
};

const SOEP: Record<'S' | 'O' | 'E' | 'P', T> = {
  S: { nl: 'Subjectief', en: 'Subjective' },
  O: { nl: 'Objectief', en: 'Objective' },
  E: { nl: 'Evaluatie', en: 'Evaluation' },
  P: { nl: 'Plan', en: 'Plan' },
};

function salutationName(p: Patient, lang: Lang): string {
  if (lang === 'nl') return `${p.sex === 'F' ? 'mevrouw' : 'de heer'} ${p.initials} ${p.surname}`;
  return `${p.sex === 'F' ? 'Ms' : 'Mr'} ${p.initials} ${p.surname}`;
}

function sexCode(p: Patient, lang: Lang): string {
  if (lang === 'nl') return p.sex === 'F' ? 'V' : 'M';
  return p.sex;
}

function Passage({
  id,
  highlight,
  as: Tag = 'p',
  className,
  children,
}: {
  id?: string;
  highlight?: string;
  as?: 'p' | 'li' | 'div' | 'tr';
  className?: string;
  children: ReactNode;
}) {
  const hl = Boolean(id && id === highlight);
  const cls = [className, id ? 'passage' : '', hl ? 'hl' : ''].filter(Boolean).join(' ');
  return (
    <Tag id={id ? `passage-${id}` : undefined} className={cls || undefined} data-cited={hl ? 'true' : undefined}>
      {children}
    </Tag>
  );
}

function BlockView({ b, lang, highlight }: { b: Block; lang: Lang; highlight?: string }) {
  switch (b.type) {
    case 'heading':
      return <h3 className="doc-h">{b.text[lang]}</h3>;
    case 'para':
      return (
        <Passage id={b.id} highlight={highlight}>
          {b.text[lang]}
        </Passage>
      );
    case 'fields':
      return (
        <div className="doc-fields">
          {b.rows.map((r, i) => (
            <Passage key={i} as="div" id={r.id} highlight={highlight} className="doc-field">
              <span className="doc-field-k">{r.label[lang]}</span>
              <span className="doc-field-v">{r.value[lang]}</span>
            </Passage>
          ))}
        </div>
      );
    case 'list':
      return (
        <ul className="doc-list">
          {b.items.map((it, i) => (
            <Passage key={i} as="li" id={it.id} highlight={highlight}>
              {it.text[lang]}
            </Passage>
          ))}
        </ul>
      );
    case 'soep':
      return (
        <section className="soep">
          <div className="soep-head">
            <span className="mono">{shortDate(b.date, 'nl')}</span>
            {b.author ? <span>{lang === 'en' ? toEnglish(b.author) : b.author}</span> : null}
          </div>
          {b.rows.map((r, i) => (
            <Passage key={i} as="div" id={r.id} highlight={highlight} className="soep-row">
              <abbr className="soep-code" title={SOEP[r.code][lang]}>
                {r.code}
              </abbr>
              <span>{r.text[lang]}</span>
            </Passage>
          ))}
        </section>
      );
    case 'table': {
      const hasFlag = b.rows.some((r) => r.flag);
      return (
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead>
              <tr>
                {b.columns.map((c, i) => (
                  <th key={i} scope="col">
                    {c[lang]}
                  </th>
                ))}
                {hasFlag ? <th scope="col">{L.flag[lang]}</th> : null}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <Passage key={i} as="tr" id={r.id} highlight={highlight} className={r.flag ? 'flagged' : undefined}>
                  {r.cells.map((c, j) => (
                    <td key={j}>{cellText(c, lang)}</td>
                  ))}
                  {hasFlag ? <td className="flag-cell">{r.flag ?? ''}</td> : null}
                </Passage>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case 'signal':
      return (
        <div className="signal">
          {b.phases.map((p, i) => (
            <Passage key={i} as="div" id={p.id} highlight={highlight} className={`signal-phase phase-${p.tone}`}>
              <div className="signal-title">{p.title[lang]}</div>
              <div className="signal-grid">
                <span className="signal-k">{L.signs[lang]}</span>
                <span>{p.signs[lang]}</span>
                <span className="signal-k">{L.actions[lang]}</span>
                <span>{p.actions[lang]}</span>
              </div>
            </Passage>
          ))}
        </div>
      );
  }
}

export function DocumentBody({ doc, patient, lang, highlight }: { doc: SourceDoc; patient: Patient; lang: Lang; highlight?: string }) {
  const org = ORGS[doc.org];
  const isLetter = doc.layout === 'letter';
  const city = org.address.split(' ').at(-1) ?? '';

  return (
    <article className={`paper layout-${doc.layout}`} lang={lang === 'nl' ? 'nl' : 'en'}>
      <div className="watermark" aria-hidden="true">
        SYNTHETISCH
      </div>
      <div className="ribbon">{L.synthetic[lang]}</div>

      <header className="letterhead">
        <div className="mark" aria-hidden="true">
          {org.mark}
        </div>
        <div>
          <div className="org-name">{org.name}</div>
          <div className="org-unit">{doc.unit[lang]}</div>
          <div className="org-addr">
            {org.address} · {org.phone}
          </div>
        </div>
        <div className="doc-type">{doc.type[lang]}</div>
      </header>

      {isLetter ? (
        <>
          {doc.to ? (
            <div className="recipient">
              <div>{doc.to.name}</div>
              {doc.to.org ? <div>{doc.to.org}</div> : null}
              {doc.to.unit[lang] ? <div>{doc.to.unit[lang]}</div> : null}
            </div>
          ) : null}
          <div className="letter-meta">
            <div>
              {city}, {longDate(doc.date, lang)}
            </div>
            <div>
              <strong>{L.re[lang]}:</strong> {salutationName(patient, lang)}, {L.born[lang]} {shortDate(patient.dob, lang)}, {L.patientNo[lang]}{' '}
              <span className="mono">{patient.mrn}</span>
            </div>
          </div>
          <p className="salutation">{L.dear[lang]}</p>
        </>
      ) : (
        <div className="record-strip">
          <div>
            <span className="strip-k">{L.patient[lang]}</span> {patient.surname}, {patient.initials} ({sexCode(patient, lang)}) · {L.born[lang]} {shortDate(patient.dob, lang)} ·{' '}
            <span className="mono">{patient.mrn}</span> · {patient.address}
          </div>
          <div>
            <span className="strip-k">{L.date[lang]}</span> {shortDate(doc.date, lang)} · <span className="strip-k">{L.author[lang]}</span> {doc.author.name}, {doc.author.role[lang]}
          </div>
        </div>
      )}

      <div className="doc-blocks">
        {doc.blocks.map((b, i) => (
          <BlockView key={i} b={b} lang={lang} highlight={highlight} />
        ))}
      </div>

      {isLetter ? (
        <footer className="signature">
          <p>{L.regards[lang]}</p>
          <p className="sig-name">{doc.author.name}</p>
          <p className="sig-role">{doc.author.role[lang]}</p>
        </footer>
      ) : null}
    </article>
  );
}
