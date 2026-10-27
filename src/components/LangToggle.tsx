import type { Lang } from '../data/types';

export function LangToggle({ lang, setLang, dark }: { lang: Lang; setLang: (l: Lang) => void; dark?: boolean }) {
  return (
    <div className={`seg ${dark ? 'seg-dark' : ''}`} role="group" aria-label="Source document language">
      <span className="seg-label">Sources</span>
      <button type="button" aria-pressed={lang === 'nl'} onClick={() => setLang('nl')}>
        NL
      </button>
      <button type="button" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        EN
      </button>
    </div>
  );
}
