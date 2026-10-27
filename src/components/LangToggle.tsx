import type { Lang } from '../data/types';
import { STRINGS } from '../i18n';

export function LangToggle({ lang, setLang, dark }: { lang: Lang; setLang: (l: Lang) => void; dark?: boolean }) {
  return (
    <div className={`seg ${dark ? 'seg-dark' : ''}`} role="group" aria-label={STRINGS[lang].language}>
      <button type="button" aria-pressed={lang === 'nl'} onClick={() => setLang('nl')} lang="nl" aria-label="Nederlands">
        NL
      </button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')} lang="en" aria-label="English">
        EN
      </button>
    </div>
  );
}
