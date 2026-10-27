import { useEffect, useRef, useState } from 'react';
import type { Lang, Patient, Ref } from '../data/types';
import { SourceChips, type OpenSource } from './SourceChip';

type Msg =
  | { role: 'user'; text: string }
  | { role: 'answer'; text: string; refs: Ref[]; out: boolean }
  | { role: 'note'; text: string };

const FALLBACK =
  'This demo answers the suggested questions only.\n\nIn the live version, any question about this record is answered from the record, with the source of each statement. Requests for diagnostic or treatment advice are declined.';

export function AskPanel({ p, lang, onOpen }: { p: Patient; lang: Lang; onOpen: OpenSource }) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [asked, setAsked] = useState<number[]>([]);
  const [draft, setDraft] = useState('');
  const [busy, setBusy] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => window.clearTimeout(timer.current), []);
  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, busy]);

  function reply(question: string, answer: Msg) {
    setMsgs((m) => [...m, { role: 'user', text: question }]);
    setBusy(true);
    timer.current = window.setTimeout(() => {
      setMsgs((m) => [...m, answer]);
      setBusy(false);
    }, 700);
  }

  function ask(k: number) {
    if (busy) return;
    const item = p.qa[k];
    setAsked((a) => [...a, k]);
    reply(item.q, { role: 'answer', text: item.a, refs: item.refs, out: Boolean(item.out) });
  }

  function send() {
    const t = draft.trim();
    if (!t || busy) return;
    setDraft('');
    const k = p.qa.findIndex((x) => x.q.toLowerCase() === t.toLowerCase());
    if (k >= 0) return ask(k);
    reply(t, { role: 'note', text: FALLBACK });
  }

  const suggestions = p.qa.map((x, k) => ({ q: x.q, k })).filter((o) => !asked.includes(o.k));

  return (
    <aside className="card ask" aria-label="Ask the record">
      <div className="ask-head">
        <div className="strong">Ask the record</div>
        <div className="muted small">Answers come only from this patient's record, with sources. Requests for diagnostic or treatment advice are declined.</div>
      </div>

      <div className="ask-log" ref={logRef} aria-live="polite">
        {msgs.length === 0 && !busy ? <p className="muted small">No questions yet. Pick a suggested question below or type your own.</p> : null}
        {msgs.map((m, i) =>
          m.role === 'user' ? (
            <div key={i} className="bubble bubble-user">
              {m.text}
            </div>
          ) : m.role === 'answer' ? (
            <div key={i} className={`bubble bubble-answer ${m.out ? 'bubble-out' : ''}`}>
              {m.out ? <span className="tag tag-out">Outside scope</span> : null}
              <div className="pre">{m.text}</div>
              <div className="bubble-src">
                <span className="small muted">Sources</span>
                <SourceChips refs={m.refs} lang={lang} onOpen={onOpen} />
              </div>
            </div>
          ) : (
            <div key={i} className="bubble bubble-note pre">
              {m.text}
            </div>
          ),
        )}
        {busy ? <div className="bubble bubble-note small">Searching the record…</div> : null}
      </div>

      <div className="ask-foot">
        {suggestions.length > 0 ? (
          <div>
            <div className="sub">Suggested questions</div>
            <div className="suggest">
              {suggestions.map((s) => (
                <button key={s.k} type="button" className="suggest-btn" onClick={() => ask(s.k)} disabled={busy}>
                  {s.q}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <label htmlFor="ask-input" className="sub">
          Ask about this record
        </label>
        <textarea
          id="ask-input"
          rows={2}
          value={draft}
          placeholder="e.g. When was the last risk assessment?"
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
        />
        <div className="ask-actions">
          <span className="muted small">Enter to send · Shift+Enter for a new line</span>
          <button type="button" className="btn-primary" onClick={send} disabled={busy}>
            Ask
          </button>
        </div>
      </div>
    </aside>
  );
}
