import { useCallback, useEffect, useState } from 'react';
import type { Lang } from '../data/types';
import { STRINGS } from '../i18n';
import { MoonIcon, SunIcon } from './Icons';

export type Theme = 'light' | 'dark';
const KEY = 'preconsult-demo-theme';

function saved(): Theme | null {
  try {
    const v = window.localStorage.getItem(KEY);
    return v === 'dark' || v === 'light' ? v : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/** Follows the device setting until the user picks a theme; the choice is then remembered. */
export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => saved() ?? systemTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // While the user has not chosen, keep following the device.
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)');
    if (!mq) return;
    const onChange = () => {
      if (!saved()) setTheme(mq.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(KEY, next);
      } catch {
        /* storage unavailable: theme lasts for this visit only */
      }
      return next;
    });
  }, []);

  return [theme, toggle];
}

export function ThemeToggle({ theme, onToggle, lang }: { theme: Theme; onToggle: () => void; lang: Lang }) {
  const S = STRINGS[lang];
  const label = theme === 'dark' ? S.themeToLight : S.themeToDark;
  return (
    <button type="button" className="theme-btn" onClick={onToggle} aria-label={label} title={label}>
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
