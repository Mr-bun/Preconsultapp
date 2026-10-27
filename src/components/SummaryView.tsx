import type { Lang, Patient } from '../data/types';
import { ageOn, mediumDate, passageText, todayISO, txt } from '../lib/format';
import { STRINGS } from '../i18n';
import { SourceChip, SourceChips, type OpenSource } from './SourceChip';
import { WarnIcon } from './Icons';

export function SummaryView({ p, lang, onOpen }: { p: Patient; lang: Lang; onOpen: OpenSource }) {
  const S = STRINGS[lang];
  const today = todayISO();
  return (
    <div className="stack">
      <section className="card" aria-labelledby="glance">
        <div className="glance-top">
          <div>
            <h2 className="eyebrow" id="glance">
              {S.atAGlance}
            </h2>
            <h1 className="patient-name">{p.name}</h1>
            <div className="muted">
              {ageOn(p.dob, today)} {S.years} · {p.sex === 'F' ? S.female : S.male} · {S.dob} <span className="mono">{p.dob.split('-').reverse().join('-')}</span> · {S.mrn}{' '}
              <span className="mono">{p.mrn}</span>
            </div>
          </div>
          <div className="glance-slot">
            <div className="muted small">{S.consultation}</div>
            <div className="strong">
              {p.specialty[lang]} · {p.visitType[lang]}
            </div>
            <div className="mono muted small">
              {mediumDate(today, lang)} · {p.time}
            </div>
          </div>
        </div>
        <div className="tiles">
          <div className="tile tile-allergy">
            <div className="tile-k">{S.allergies}</div>
            <div className="tile-v">{p.allergies[lang]}</div>
          </div>
          {p.measures.map((m, i) => {
            const label = txt(m.label, lang);
            const value = txt(m.value, lang);
            return (
              <button key={i} type="button" className="tile tile-btn" onClick={() => onOpen(m.ref)} aria-label={`${label} ${value}, ${mediumDate(m.date, lang)}. ${S.openSourceFor(label)}`}>
                <div className="tile-k">{label}</div>
                <div className="tile-v mono">{value}</div>
                <div className="tile-d mono">{mediumDate(m.date, lang)}</div>
              </button>
            );
          })}
        </div>
        <div className="pills">
          {p.conditions.map((c) => (
            <span key={c.en} className="pill">
              {c[lang]}
            </span>
          ))}
        </div>
      </section>

      <section className="card card-accent" aria-labelledby="reason">
        <h2 className="eyebrow" id="reason">
          {S.reason}
        </h2>
        <p className="lead">{p.reason.t[lang]}</p>
        <SourceChips refs={p.reason.refs} lang={lang} onOpen={onOpen} />
      </section>

      <section className="card" aria-labelledby="summary">
        <div className="card-head">
          <h2 className="eyebrow" id="summary">
            {S.summary}
          </h2>
          <span className="muted small">{S.everyStatement}</span>
        </div>
        <ul className="stmts">
          {p.summary.map((s, i) => (
            <li key={i} className="stmt">
              <span className="stmt-t">{s.t[lang]}</span>
              <SourceChips refs={s.refs} lang={lang} onOpen={onOpen} />
            </li>
          ))}
        </ul>
      </section>

      <section className="card card-risk" aria-labelledby="risk">
        <div className="card-head">
          <h2 className="eyebrow eyebrow-risk" id="risk">
            {S.riskHistory}
          </h2>
          <span className="muted small">{lang === 'nl' ? S.riskVerbatim : S.riskTranslated}</span>
        </div>
        {p.riskGap ? (
          <div className="gap-box">
            <WarnIcon />
            <div>
              <strong>{S.gap}:</strong> {p.riskGap[lang]}
            </div>
          </div>
        ) : null}
        <div className="risk-list">
          {p.risk.map((r, i) => {
            const quote = passageText(r.ref);
            return (
              <figure key={i} className="risk-item">
                <figcaption className="risk-meta">
                  <span className="strong">{r.who[lang]}</span>
                  <span className="tag">{r.kind[lang]}</span>
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
          {S.notable}
        </h2>
        <ul className="stmts">
          {p.flags.map((s, i) => (
            <li key={i} className="stmt">
              <span className="stmt-t small-t">{s.t[lang]}</span>
              <SourceChips refs={s.refs} lang={lang} onOpen={onOpen} />
            </li>
          ))}
        </ul>
      </section>

      <section className="card" aria-labelledby="history">
        <h2 className="eyebrow" id="history">
          {S.previous}
        </h2>
        <ol className="visits">
          {p.visits.map((v, i) => (
            <li key={i} className="visit">
              <div className="visit-when">
                <div className="mono small">{mediumDate(v.date, lang)}</div>
                <div className="visit-who">{v.who[lang]}</div>
              </div>
              <div className="visit-body">
                <div>
                  <strong>{S.reasonLabel}:</strong> {v.reason[lang]}
                </div>
                <div className="muted-dark">
                  <strong>{S.actionLabel}:</strong> {v.action[lang]}
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
            {S.meds}
          </h2>
          <SourceChips refs={[p.meds.ref]} lang={lang} onOpen={onOpen} />
        </div>
        <div className="meds">
          <div>
            <div className="sub">{S.currentMeds}</div>
            {p.meds.current.map((m) => (
              <div key={m.name.en} className="med-row">
                <span className="strong-500">{m.name[lang]}</span>
                <span className="mono small">{m.dose[lang]}</span>
              </div>
            ))}
          </div>
          <div>
            <div className="sub">{S.pastMeds}</div>
            {p.meds.past.map((m) => (
              <div key={m.name.en} className="med-row med-past">
                <div className="med-line">
                  <span className="strong-500">{m.name[lang]}</span>
                  <span className="mono small muted">{m.when[lang]}</span>
                </div>
                <div className="small muted">
                  {S.stopped}: {m.why[lang]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="card" aria-labelledby="tests">
        <h2 className="eyebrow" id="tests">
          {S.tests}
        </h2>
        <div className="table-wrap">
          <table className="results">
            <thead>
              <tr>
                <th scope="col">{S.test}</th>
                <th scope="col">{S.result}</th>
                <th scope="col">{S.reference}</th>
                <th scope="col">{S.date}</th>
                <th scope="col">{S.flag}</th>
                <th scope="col">{S.source}</th>
              </tr>
            </thead>
            <tbody>
              {p.tests.map((t, i) => {
                const name = txt(t.name, lang);
                return (
                  <tr key={i}>
                    <td className="strong-500">{name}</td>
                    <td className="mono">{txt(t.value, lang)}</td>
                    <td className="mono muted small">{txt(t.range, lang)}</td>
                    <td className="mono muted small">{mediumDate(t.date, lang)}</td>
                    <td>
                      {t.status === 'normal' ? (
                        <span className="muted small">{S.inRange}</span>
                      ) : (
                        <span className="flag">{t.status === 'high' ? S.high : t.status === 'low' ? S.low : S.abnormal}</span>
                      )}
                    </td>
                    <td>
                      <button type="button" className="link-btn" onClick={() => onOpen(t.ref)} aria-label={S.openSourceFor(name)}>
                        {S.open}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="card card-gaps" aria-labelledby="gaps">
        <h2 className="eyebrow eyebrow-gaps" id="gaps">
          {S.notOnFile}
        </h2>
        <ul className="gaps">
          {p.gaps.map((g) => (
            <li key={g.en}>{g[lang]}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
