import type { Lang, Patient } from '../data/types';
import { passageText } from '../lib/format';
import { SourceChip, SourceChips, type OpenSource } from './SourceChip';
import { WarnIcon } from './Icons';

export function SummaryView({ p, lang, onOpen }: { p: Patient; lang: Lang; onOpen: OpenSource }) {
  return (
    <div className="stack">
      <section className="card" aria-labelledby="glance">
        <div className="glance-top">
          <div>
            <h2 className="eyebrow" id="glance">
              At a glance
            </h2>
            <h1 className="patient-name">{p.name}</h1>
            <div className="muted">
              {ageOn(p.dob)} y · {p.sex === 'F' ? 'Female' : 'Male'} · DOB <span className="mono">{p.dob.split('-').reverse().join('-')}</span> · MRN{' '}
              <span className="mono">{p.mrn}</span>
            </div>
          </div>
          <div className="glance-slot">
            <div className="muted small">Consultation</div>
            <div className="strong">
              {p.specialty} · {p.visitType}
            </div>
            <div className="mono muted small">{p.slot}</div>
          </div>
        </div>
        <div className="tiles">
          <div className="tile tile-allergy">
            <div className="tile-k">Allergies</div>
            <div className="tile-v">{p.allergies}</div>
          </div>
          {p.measures.map((m) => (
            <button key={m.label} type="button" className="tile tile-btn" onClick={() => onOpen(m.ref)} aria-label={`${m.label} ${m.value}, ${m.date}. Open source`}>
              <div className="tile-k">{m.label}</div>
              <div className="tile-v mono">{m.value}</div>
              <div className="tile-d mono">{m.date}</div>
            </button>
          ))}
        </div>
        <div className="pills">
          {p.conditions.map((c) => (
            <span key={c} className="pill">
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="card card-accent" aria-labelledby="reason">
        <h2 className="eyebrow" id="reason">
          Reason for this consultation
        </h2>
        <p className="lead">{p.reason.t}</p>
        <SourceChips refs={p.reason.refs} lang={lang} onOpen={onOpen} />
      </section>

      <section className="card" aria-labelledby="summary">
        <div className="card-head">
          <h2 className="eyebrow" id="summary">
            Summary
          </h2>
          <span className="muted small">Every statement links to its source</span>
        </div>
        <ul className="stmts">
          {p.summary.map((s, i) => (
            <li key={i} className="stmt">
              <span className="stmt-t">{s.t}</span>
              <SourceChips refs={s.refs} lang={lang} onOpen={onOpen} />
            </li>
          ))}
        </ul>
      </section>

      <section className="card card-risk" aria-labelledby="risk">
        <div className="card-head">
          <h2 className="eyebrow eyebrow-risk" id="risk">
            Risk history
          </h2>
          <span className="muted small">{lang === 'nl' ? 'Quoted verbatim from the Dutch source' : 'Quoted from source, English translation'}</span>
        </div>
        {p.riskGap ? (
          <div className="gap-box">
            <WarnIcon />
            <div>
              <strong>Gap:</strong> {p.riskGap}
            </div>
          </div>
        ) : null}
        <div className="risk-list">
          {p.risk.map((r, i) => {
            const quote = passageText(r.ref);
            return (
              <figure key={i} className="risk-item">
                <figcaption className="risk-meta">
                  <span className="strong">{r.who}</span>
                  <span className="tag">{r.kind}</span>
                </figcaption>
                <blockquote lang={lang}>“{quote ? quote[lang] : ''}”</blockquote>
                <SourceChip r={r.ref} lang={lang} onOpen={onOpen} />
              </figure>
            );
          })}
        </div>
      </section>

      <section className="card" aria-labelledby="notable">
        <h2 className="eyebrow" id="notable">
          Notable in the record
        </h2>
        <ul className="stmts">
          {p.flags.map((s, i) => (
            <li key={i} className="stmt">
              <span className="stmt-t small-t">{s.t}</span>
              <SourceChips refs={s.refs} lang={lang} onOpen={onOpen} />
            </li>
          ))}
        </ul>
      </section>

      <section className="card" aria-labelledby="history">
        <h2 className="eyebrow" id="history">
          Previous contacts
        </h2>
        <ol className="visits">
          {p.visits.map((v, i) => (
            <li key={i} className="visit">
              <div className="visit-when">
                <div className="mono small">{v.date}</div>
                <div className="visit-who">{v.who}</div>
              </div>
              <div className="visit-body">
                <div>
                  <strong>Reason:</strong> {v.reason}
                </div>
                <div className="muted-dark">
                  <strong>Action:</strong> {v.action}
                </div>
                <SourceChips refs={[v.ref]} lang={lang} onOpen={onOpen} />
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="card" aria-labelledby="meds">
        <div className="card-head">
          <h2 className="eyebrow" id="meds">
            Medications and treatments
          </h2>
          <SourceChips refs={[p.meds.ref]} lang={lang} onOpen={onOpen} />
        </div>
        <div className="meds">
          <div>
            <div className="sub">Current</div>
            {p.meds.current.map((m) => (
              <div key={m.name} className="med-row">
                <span className="strong-500">{m.name}</span>
                <span className="mono small">{m.dose}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="sub">Past</div>
            {p.meds.past.map((m) => (
              <div key={m.name} className="med-row med-past">
                <div className="med-line">
                  <span className="strong-500">{m.name}</span>
                  <span className="mono small muted">{m.when}</span>
                </div>
                <div className="small muted">Stopped: {m.why}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card" aria-labelledby="tests">
        <h2 className="eyebrow" id="tests">
          Tests, scales and results
        </h2>
        <div className="table-wrap">
          <table className="results">
            <thead>
              <tr>
                <th scope="col">Test</th>
                <th scope="col">Result</th>
                <th scope="col">Reference</th>
                <th scope="col">Date</th>
                <th scope="col">Flag</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              {p.tests.map((t) => (
                <tr key={t.name}>
                  <td className="strong-500">{t.name}</td>
                  <td className="mono">{t.value}</td>
                  <td className="mono muted small">{t.range}</td>
                  <td className="mono muted small">{t.date}</td>
                  <td>{t.status === 'normal' ? <span className="muted small">In range</span> : <span className="flag">{flagLabel(t.status)}</span>}</td>
                  <td>
                    <button type="button" className="link-btn" onClick={() => onOpen(t.ref)} aria-label={`Open source for ${t.name}`}>
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card card-gaps" aria-labelledby="gaps">
        <h2 className="eyebrow eyebrow-gaps" id="gaps">
          Not on file
        </h2>
        <ul className="gaps">
          {p.gaps.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function flagLabel(s: 'high' | 'low' | 'abnormal'): string {
  return s === 'high' ? 'High' : s === 'low' ? 'Low' : 'Abnormal';
}

/** Age on the demo consultation date, so the page reads the same whenever it is opened. */
function ageOn(dob: string, on = '2026-11-03'): number {
  const [y, m, d] = dob.split('-').map(Number);
  const [Y, M, D] = on.split('-').map(Number);
  return Y - y - (M < m || (M === m && D < d) ? 1 : 0);
}
