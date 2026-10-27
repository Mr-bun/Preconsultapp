import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import type { Lang, Patient, Ref } from './data/types';
import { PATIENTS, docsFor } from './data';
import { STRINGS } from './i18n';
import { todayISO } from './lib/format';
import { SummaryView } from './components/SummaryView';
import { RecordView } from './components/RecordView';
import { AskPanel } from './components/AskPanel';
import { DocDrawer } from './components/DocDrawer';
import { LangToggle } from './components/LangToggle';
import { Welcome } from './components/Welcome';
import { Schedule, type ScheduleView } from './components/Schedule';
import { CalendarIcon, CheckCircle, ChevronIcon, CloseIcon, LogoMark, UsersIcon } from './components/Icons';

type Route = { name: 'schedule' } | { name: 'patient'; id: string };
type Tab = 'summary' | 'record';

const SESSION_KEY = 'preconsult-demo-session';
const LANG_KEY = 'preconsult-demo-lang';

/** Browser storage can be blocked (private mode, sandboxes); the app works without it. */
function readStore(store: 'local' | 'session', key: string): string | null {
  try {
    return (store === 'local' ? window.localStorage : window.sessionStorage).getItem(key);
  } catch {
    return null;
  }
}
function writeStore(store: 'local' | 'session', key: string, value: string | null) {
  try {
    const s = store === 'local' ? window.localStorage : window.sessionStorage;
    if (value === null) s.removeItem(key);
    else s.setItem(key, value);
  } catch {
    /* storage unavailable: keep state in memory only */
  }
}

function parseHash(): Route {
  const m = window.location.hash.match(/^#\/patient\/([\w-]+)/);
  if (m && PATIENTS.some((p) => p.id === m[1])) return { name: 'patient', id: m[1] };
  return { name: 'schedule' };
}

function initialLang(): Lang {
  const saved = readStore('local', LANG_KEY);
  if (saved === 'nl' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('nl') ? 'nl' : 'en';
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const [loggedIn, setLoggedIn] = useState(() => readStore('session', SESSION_KEY) === '1');
  const [route, setRoute] = useState<Route>(parseHash);
  const [day, setDay] = useState(todayISO());
  const [view, setView] = useState<ScheduleView>('calendar');
  const [switcher, setSwitcher] = useState(false);

  const S = STRINGS[lang];

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    writeStore('local', LANG_KEY, l);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === 'nl' ? 'PreConsult demo · Psychiatrie' : 'PreConsult demo · Psychiatry';
  }, [lang]);

  useEffect(() => {
    const onHash = () => setRoute(parseHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const go = useCallback((r: Route) => {
    window.location.hash = r.name === 'patient' ? `#/patient/${r.id}` : '#/schedule';
    setSwitcher(false);
    window.scrollTo(0, 0);
  }, []);

  function login() {
    writeStore('session', SESSION_KEY, '1');
    setLoggedIn(true);
    if (!window.location.hash) window.location.hash = '#/schedule';
  }

  function logout() {
    writeStore('session', SESSION_KEY, null);
    setLoggedIn(false);
    window.location.hash = '';
  }

  if (!loggedIn) return <Welcome lang={lang} setLang={setLang} onLogin={login} />;

  const patient = route.name === 'patient' ? PATIENTS.find((p) => p.id === route.id) : undefined;
  const selectPatient = (p: Patient) => go({ name: 'patient', id: p.id });

  return (
    <div className="app">
      <header className="topbar">
        <div className="brand">
          <LogoMark />
          <div>
            <div className="brand-name">{S.brand}</div>
            <div className="brand-sub">{S.brandSub}</div>
          </div>
        </div>
        <div className="topbar-actions">
          <LangToggle lang={lang} setLang={setLang} dark />
          <div className="user">
            <div className="user-name">{S.demoUserName}</div>
            <div className="user-role">{S.demoUserRole}</div>
          </div>
          <button type="button" className="btn-dark" onClick={logout}>
            {S.logout}
          </button>
        </div>
      </header>

      {patient ? (
        <PatientPage
          key={patient.id}
          p={patient}
          lang={lang}
          setLang={setLang}
          onSchedule={() => go({ name: 'schedule' })}
          onSwitch={() => setSwitcher(true)}
          onNext={() => {
            const i = PATIENTS.findIndex((x) => x.id === patient.id);
            go({ name: 'patient', id: PATIENTS[(i + 1) % PATIENTS.length].id });
          }}
        />
      ) : (
        <main className="page">
          <Schedule lang={lang} day={day} setDay={setDay} view={view} setView={setView} onSelect={selectPatient} />
        </main>
      )}

      {switcher && patient ? (
        <SwitcherDrawer onClose={() => setSwitcher(false)} title={S.switchPatient} closeLabel={S.close}>
          <Schedule lang={lang} day={day} setDay={setDay} view={view} setView={setView} onSelect={selectPatient} currentId={patient.id} compact />
        </SwitcherDrawer>
      ) : null}

      <footer className="foot">{S.footer}</footer>
    </div>
  );
}

function PatientPage({
  p,
  lang,
  setLang,
  onSchedule,
  onSwitch,
  onNext,
}: {
  p: Patient;
  lang: Lang;
  setLang: (l: Lang) => void;
  onSchedule: () => void;
  onSwitch: () => void;
  onNext: () => void;
}) {
  const S = STRINGS[lang];
  const [tab, setTab] = useState<Tab>('summary');
  const [open, setOpen] = useState<Ref | null>(null);
  const [confirm, setConfirm] = useState(false);
  const [erasedAt, setErasedAt] = useState<string | null>(null);
  const onOpen = useCallback((r: Ref) => setOpen(r), []);
  const onClose = useCallback(() => setOpen(null), []);

  function erase() {
    const now = new Date();
    setErasedAt(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`);
    setConfirm(false);
    setOpen(null);
  }

  return (
    <>
      <div className="subbar">
        <div className="subbar-left">
          <button type="button" className="btn-ghost" onClick={onSchedule}>
            <ChevronIcon dir="left" /> <CalendarIcon /> {S.backToSchedule}
          </button>
          <button type="button" className="btn-ghost" onClick={onSwitch}>
            <UsersIcon /> {S.switchPatient}
          </button>
        </div>
        <div className="subbar-patient">
          <span className="strong">{p.name}</span>
          <span className="muted small">
            {' '}
            · {p.time} · {p.visitType[lang]}
          </span>
        </div>
        {erasedAt ? null : (
          <button type="button" className="btn-outline" onClick={() => setConfirm(true)}>
            {S.endConsult}
          </button>
        )}
      </div>

      {confirm && !erasedAt ? (
        <div className="confirm" role="alertdialog" aria-labelledby="confirm-t" aria-describedby="confirm-d">
          <div className="confirm-text">
            <strong id="confirm-t">{S.confirmTitle}</strong> <span id="confirm-d">{S.confirmText}</span>
          </div>
          <button type="button" className="btn-outline-danger" onClick={() => setConfirm(false)}>
            {S.cancel}
          </button>
          <button type="button" className="btn-danger" onClick={erase}>
            {S.erase}
          </button>
        </div>
      ) : null}

      {erasedAt ? (
        <main className="erased">
          <div className="card erased-card">
            <div className="erased-icon">
              <CheckCircle />
            </div>
            <h1>{S.erasedTitle}</h1>
            <p>{S.erasedText(erasedAt)}</p>
            <p className="muted small">{S.erasedAudit}</p>
            <div className="erased-actions">
              <button type="button" className="btn-outline" onClick={onSchedule}>
                {S.backToSchedule}
              </button>
              <button type="button" className="btn-primary" onClick={onNext}>
                {S.nextPatient}
              </button>
            </div>
          </div>
        </main>
      ) : (
        <main className="layout">
          <div className="col-main">
            <div className="tabs" role="group" aria-label={S.summary}>
              <button type="button" aria-pressed={tab === 'summary'} className="tab" onClick={() => setTab('summary')}>
                {S.tabSummary}
              </button>
              <button type="button" aria-pressed={tab === 'record'} className="tab" onClick={() => setTab('record')}>
                {S.tabRecord(docsFor(p.id).length)}
              </button>
            </div>
            {tab === 'summary' ? <SummaryView p={p} lang={lang} onOpen={onOpen} /> : <RecordView p={p} lang={lang} onOpen={onOpen} />}
          </div>
          <div className="col-side">
            <AskPanel p={p} lang={lang} onOpen={onOpen} />
          </div>
        </main>
      )}

      {open ? <DocDrawer source={open} patient={p} lang={lang} setLang={setLang} onClose={onClose} /> : null}
    </>
  );
}

function SwitcherDrawer({ title, closeLabel, onClose, children }: { title: string; closeLabel: string; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null);
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

  return (
    <div className="drawer-backdrop drawer-left" onClick={onClose}>
      <aside className="drawer switcher" role="dialog" aria-modal="true" aria-label={title} onClick={(e) => e.stopPropagation()}>
        <div className="drawer-bar">
          <div className="drawer-title">
            <div className="drawer-name">{title}</div>
          </div>
          <button ref={closeRef} type="button" className="icon-btn" onClick={onClose} aria-label={closeLabel}>
            <CloseIcon />
          </button>
        </div>
        <div className="drawer-scroll">{children}</div>
      </aside>
    </div>
  );
}
