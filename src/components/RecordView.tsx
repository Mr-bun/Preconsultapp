import type { Lang, Patient } from '../data/types';
import { docsFor } from '../data';
import { ORGS } from '../data/orgs';
import { shortDate } from '../lib/format';
import type { OpenSource } from './SourceChip';
import { DocIcon } from './Icons';

export function RecordView({ p, lang, onOpen }: { p: Patient; lang: Lang; onOpen: OpenSource }) {
  const docs = docsFor(p.id);
  return (
    <section className="card" aria-labelledby="record">
      <div className="card-head">
        <h2 className="eyebrow" id="record">
          Source record · {docs.length} documents
        </h2>
        <span className="muted small">What the summary was built from, newest first</span>
      </div>
      <ul className="doclist">
        {docs.map((d) => (
          <li key={d.id}>
            <button type="button" className="docrow" onClick={() => onOpen({ doc: d.id })}>
              <span className="docrow-date mono">{shortDate(d.date, lang)}</span>
              <span className="docrow-main">
                <span className="docrow-type">
                  <DocIcon /> {d.type[lang]}
                </span>
                <span className="docrow-meta">
                  {ORGS[d.org].name} · {d.unit[lang]} · {d.author.name}
                </span>
              </span>
              <span className="docrow-open" aria-hidden="true">
                Open
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
