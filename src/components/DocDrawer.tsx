import { useEffect, useRef } from 'react';
import type { Lang, Patient, Ref } from '../data/types';
import { DOCS } from '../data';
import { DocumentBody } from './DocumentBody';
import { LangToggle } from './LangToggle';
import { CloseIcon } from './Icons';
import { shortDate } from '../lib/format';

export function DocDrawer({
  source,
  patient,
  lang,
  setLang,
  onClose,
}: {
  source: Ref;
  patient: Patient;
  lang: Lang;
  setLang: (l: Lang) => void;
  onClose: () => void;
}) {
  const doc = DOCS[source.doc];
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Remember what had focus, move focus into the drawer, and give it back on close.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      previous?.focus?.();
    };
  }, [onClose]);

  // Scroll the cited passage into view whenever the source or language changes.
  useEffect(() => {
    const box = scrollRef.current;
    if (!box) return;
    if (!source.at) {
      box.scrollTop = 0;
      return;
    }
    const el = box.querySelector<HTMLElement>(`#passage-${CSS.escape(source.at)}`);
    if (el) el.scrollIntoView({ block: 'center' });
  }, [source, lang]);

  if (!doc) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside
        className="drawer"
        role="dialog"
        aria-modal="true"
        aria-label={`${doc.type[lang]}, ${shortDate(doc.date, lang)}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-bar">
          <div className="drawer-title">
            <div className="drawer-kicker">Source document</div>
            <div className="drawer-name">
              {doc.type[lang]} · {shortDate(doc.date, lang)}
            </div>
          </div>
          <LangToggle lang={lang} setLang={setLang} />
          <button ref={closeRef} type="button" className="icon-btn" onClick={onClose} aria-label="Close source document">
            <CloseIcon />
          </button>
        </div>
        {source.at ? (
          <div className="drawer-note">The cited passage is highlighted.{lang === 'en' ? ' English translation of the Dutch original.' : ''}</div>
        ) : lang === 'en' ? (
          <div className="drawer-note">English translation of the Dutch original.</div>
        ) : null}
        <div className="drawer-scroll" ref={scrollRef}>
          <DocumentBody doc={doc} patient={patient} lang={lang} highlight={source.at} />
        </div>
      </aside>
    </div>
  );
}
