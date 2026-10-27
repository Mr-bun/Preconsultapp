import { useCallback, useState } from 'react';
import type { Lang, Ref } from './data/types';
import { PATIENTS, docsFor } from './data';
import { SummaryView } from './components/SummaryView';
import { RecordView } from './components/RecordView';
import { AskPanel } from './components/AskPanel';
import { DocDrawer } from './components/DocDrawer';
import { LangToggle } from './components/LangToggle';
import { CheckCircle, InfoIcon, LogoMark } from './components/Icons';

type Tab = 'summary' | 'record';

export default function App() {
  const [idx, setIdx] = useState(0);
  const [lang, setLang] = useState<Lang>('nl');
  const [tab, setTab] = useState<Tab>('summary');
  const [open, setOpen] = useState<Ref | null>(null);
  const [confirm, setConfirm] = useState(false);
  const [erasedAt, setErasedAt] = useState<string | null>(null);
  // Bumped on every patient switch or erase, so the chat starts empty.
  const [session, setSession] = useState(0);

  const p = PATIENTS[idx];
  const onOpen = useCallback((r: Ref) => setOpen(r), []);
  const onClose = useCallback(() => setOpen(null), []);

  function load(i: number) {
    setIdx(i);
    setTab('summary');
    setOpen(null);
    setConfirm(false);
    setErasedAt(null);
    setSession((s) => s + 1);
  }

  function erase() {
    const now = new Date();
    setErasedAt(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`);
    setConfirm(false);
    setOpen(null);
    setSession((s) => s + 1);
  }

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <LogoMark />
          <div>
            <div className="brand-name">PreConsult · Psychiatry</div>
            <div className="brand-sub">Record summary, erased from PreConsult when the consultation ends</div>
          </div>
          <span className="badge badge-synth">SYNTHETIC DATA</span>
          <span className="badge badge-ver">SUMMARY ONLY · v0.3</span>
        </div>
        <nav className="queue" aria-label="Patients for Tuesday 3 November 2026">
          {PATIENTS.map((q, i) => (
            <button key={q.id} type="button" className={`q ${i === idx ? 'q-active' : ''}`} aria-current={i === idx ? 'true' : undefined} onClick={() => load(i)}>
              <span className="q-time mono">{q.time}</span>
              <span className="q-name">{q.name}</span>
              <span className="q-meta">
                {q.sex} · {q.visitType}
              </span>
            </button>
          ))}
        </nav>
        <div className="topbar-actions">
          <LangToggle lang={lang} setLang={setLang} dark />
          {erasedAt ? null : (
            <button type="button" className="btn-light" onClick={() => setConfirm(true)}>
              End consultation
            </button>
          )}
        </div>
      </header>

      {confirm && !erasedAt ? (
        <div className="confirm" role="alertdialog" aria-labelledby="confirm-t">
          <div id="confirm-t" className="confirm-text">
            <strong>End consultation and erase this summary?</strong> The summary and all questions and answers are removed from PreConsult. The source record in the EHR is not affected. Record anything you need in the EHR
            first.
          </div>
          <button type="button" className="btn-outline-danger" onClick={() => setConfirm(false)}>
            Cancel
          </button>
          <button type="button" className="btn-danger" onClick={erase}>
            Erase summary
          </button>
        </div>
      ) : null}

      <div className="banner">
        <InfoIcon />
        <div>
          <strong>Record summary only.</strong> PreConsult shows what is on file and the source of every statement. It gives no diagnostic or treatment advice. Verify against the source record; every clinical decision
          remains with the treating practitioner. All patients, clinicians and organizations in this demo are fictional.
        </div>
      </div>

      {erasedAt ? (
        <main className="erased">
          <div className="card erased-card">
            <div className="erased-icon">
              <CheckCircle />
            </div>
            <h1>Erased from PreConsult</h1>
            <p>
              Summary and questions removed from this session at <span className="mono">{erasedAt}</span>. The source record in the EHR is unchanged.
            </p>
            <p className="muted small">A pseudonymized audit entry is kept for quality and safety review, as set out in the DPIA. A fresh summary is generated from the source record at the next appointment.</p>
            <button type="button" className="btn-primary" onClick={() => load((idx + 1) % PATIENTS.length)}>
              Prepare next patient
            </button>
          </div>
        </main>
      ) : (
        <main className="layout">
          <div className="col-main">
            <div className="tabs" role="group" aria-label="View">
              <button type="button" aria-pressed={tab === 'summary'} className="tab" onClick={() => setTab('summary')}>
                Summary
              </button>
              <button type="button" aria-pressed={tab === 'record'} className="tab" onClick={() => setTab('record')}>
                Source record ({docsFor(p.id).length})
              </button>
            </div>
            {tab === 'summary' ? <SummaryView p={p} lang={lang} onOpen={onOpen} /> : <RecordView p={p} lang={lang} onOpen={onOpen} />}
          </div>
          <div className="col-side">
            <AskPanel key={`${p.id}-${session}`} p={p} lang={lang} onOpen={onOpen} />
          </div>
        </main>
      )}

      {open ? <DocDrawer source={open} patient={p} lang={lang} setLang={setLang} onClose={onClose} /> : null}

      <footer className="foot">
        Demo built on synthetic data for product research. Not a medical device. No real patient data is used or stored. Source documents are written in Dutch, with English translations.
      </footer>
    </div>
  );
}
