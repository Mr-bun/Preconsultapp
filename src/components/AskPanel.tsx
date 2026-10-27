import { useEffect, useRef, useState } from 'react';
import type { Lang, Patient, Ref, T } from '../data/types';
import { STRINGS } from '../i18n';
import { SourceChips, type OpenSource } from './SourceChip';

/** Messages keep both languages, so switching language mid-conversation re-renders the whole thread. */
type Msg =
  | { role: 'user'; text: T }
  | { role: 'answer'; text: T; refs: Ref[]; out: boolean }
  | { role: 'note'; text: T };

const norm = (s: string) => s.trim().toLowerCase().replace(/[?.!]+$/, '');

export function AskPanel({ p, lang, onOpen }: { p: Patient; lang: Lang; onOpen: OpenSource }) {
  const S = STRINGS[lang];
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

  function reply(question: T, answer: Msg) {
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
    const k = p.qa.findIndex((x) => norm(x.q.nl) === norm(t) || norm(x.q.en) === norm(t));
    if (k >= 0) return ask(k);
    reply({ nl: t, en: t }, { role: 'note', text: { nl: STRINGS.nl.askFallback, en: STRINGS.en.askFallback } });
  }

  const suggestions = p.qa.map((x, k) => ({ q: x.q, k })).filter((o) => !asked.includes(o.k));

  return (
    <aside className="card ask" aria-label={S.ask}>
      <div className="ask-head">
        <div className="strong">{S.ask}</div>
        <div className="muted small">{S.askSub}</div>
      </div>

      <div className="ask-log" ref={logRef} aria-live="polite">
        {msgs.length === 0 && !busy ? <p className="muted small">{S.askEmpty}</p> : null}
        {msgs.map((m, i) =>
          m.role === 'user' ? (
            <div key={i} className="bubble bubble-user">
              {m.text[lang]}
            </div>
          ) : m.role === 'answer' ? (
            <div key={i} className={`bubble bubble-answer ${m.out ? 'bubble-out' : ''}`}>
              {m.out ? <span className="tag tag-out">{S.outOfScope}</span> : null}
              <div className="pre">{m.text[lang]}</div>
              <div className="bubble-src">
                <span className="small muted">{S.sources}</span>
                <SourceChips refs={m.refs} lang={lang} onOpen={onOpen} />
              </div>
            </div>
          ) : (
            <div key={i} className="bubble bubble-note pre">
              {m.text[lang]}
            </div>
          ),
        )}
        {busy ? <div className="bubble bubble-note small">{S.searching}</div> : null}
      </div>

      <div className="ask-foot">
        {suggestions.length > 0 ? (
          <div>
            <div className="sub">{S.suggested}</div>
            <div className="suggest">
              {suggestions.map((s) => (
                <button key={s.k} type="button" className="suggest-btn" onClick={() => ask(s.k)} disabled={busy}>
                  {s.q[lang]}
                </button>
              ))}
            </div>
          </div>
        ) : null}
        <label htmlFor="ask-input" className="sub">
          {S.askLabel}
        </label>
        <textarea
          id="ask-input"
          rows={2}
          value={draft}
          placeholder={S.askPlaceholder}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
        />
        <div className="ask-actions">
          <span className="muted small">{S.askKeys}</span>
          <button type="button" className="btn-primary" onClick={send} disabled={busy}>
            {S.askBtn}
          </button>
        </div>
      </div>
    </aside>
  );
}
