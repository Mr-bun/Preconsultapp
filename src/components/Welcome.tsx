import type { Lang } from '../data/types';
import { STRINGS } from '../i18n';
import { LangToggle } from './LangToggle';
import { InfoIcon, LockIcon, LogoMark, WarnIcon } from './Icons';

const DEMO_USER = 'a.devries.demo';
/** Shown as dots in a read-only text field, not a password input, so browsers never offer to save or autofill a real password. */
const DEMO_PASSWORD_MASK = '••••••••••••';

export function Welcome({ lang, setLang, onLogin }: { lang: Lang; setLang: (l: Lang) => void; onLogin: () => void }) {
  const S = STRINGS[lang];
  return (
    <div className="welcome">
      <header className="welcome-top">
        <div className="brand">
          <LogoMark />
          <div className="brand-name">PreConsult</div>
          <span className="badge badge-synth">{S.synthetic}</span>
        </div>
        <LangToggle lang={lang} setLang={setLang} dark />
      </header>

      <main className="welcome-main">
        <section className="welcome-copy">
          <div className="welcome-kicker">{S.welcomeKicker}</div>
          <h1 className="welcome-title">{S.welcomeTitle}</h1>
          <p className="welcome-lead">{S.welcomeLead}</p>
          <div className="disclaimer">
            <InfoIcon />
            <div>
              <strong>{S.disclaimerTitle}.</strong> {S.disclaimer}
            </div>
          </div>
        </section>

        <section className="card login" aria-labelledby="login-title">
          <h2 id="login-title" className="login-title">
            {S.loginTitle}
          </h2>
          <div className="login-warn" role="note">
            <WarnIcon />
            <span>{S.loginWarn}</span>
          </div>

          {/* No <form> and no password-type input: nothing here can submit or store credentials. */}
          <div className="field">
            <label htmlFor="demo-user">{S.username}</label>
            <div className="locked-input">
              <input id="demo-user" type="text" value={DEMO_USER} readOnly aria-readonly="true" autoComplete="off" spellCheck={false} />
              <LockIcon />
            </div>
          </div>
          <div className="field">
            <label htmlFor="demo-pass">{S.password}</label>
            <div className="locked-input">
              <input
                id="demo-pass"
                type="text"
                value={DEMO_PASSWORD_MASK}
                readOnly
                aria-readonly="true"
                aria-describedby="demo-pass-note"
                autoComplete="off"
                data-1p-ignore
                data-lpignore="true"
                tabIndex={-1}
              />
              <LockIcon />
            </div>
            <div id="demo-pass-note" className="muted small">
              {S.locked}
            </div>
          </div>
          <button type="button" className="btn-primary btn-block" onClick={onLogin}>
            {S.login}
          </button>
        </section>
      </main>

      <footer className="foot">{S.footer}</footer>
    </div>
  );
}
