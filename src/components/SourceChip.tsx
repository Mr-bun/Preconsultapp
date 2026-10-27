import type { Lang, Ref } from '../data/types';
import { refLabel, uniqueByDoc } from '../lib/format';
import { STRINGS } from '../i18n';
import { DocIcon } from './Icons';

export type OpenSource = (ref: Ref) => void;

export function SourceChip({ r, lang, onOpen }: { r: Ref; lang: Lang; onOpen: OpenSource }) {
  const label = refLabel(r, lang);
  return (
    <button type="button" className="chip" onClick={() => onOpen(r)} aria-label={STRINGS[lang].openSource(label)}>
      <DocIcon />
      <span>{label}</span>
    </button>
  );
}

export function SourceChips({ refs, lang, onOpen }: { refs: Ref[]; lang: Lang; onOpen: OpenSource }) {
  return (
    <div className="chips">
      {uniqueByDoc(refs).map((r) => (
        <SourceChip key={`${r.doc}#${r.at ?? ''}`} r={r} lang={lang} onOpen={onOpen} />
      ))}
    </div>
  );
}
