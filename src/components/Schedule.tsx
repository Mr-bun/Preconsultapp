import { useEffect, useState } from 'react';
import type { Lang, Patient } from '../data/types';
import { PATIENTS, docsFor } from '../data';
import { addDays, ageOn, todayISO, weekdayDate } from '../lib/format';
import { STRINGS } from '../i18n';
import { CalendarIcon, ChevronIcon, ListIcon } from './Icons';

export type ScheduleView = 'calendar' | 'list';

/** One quiet color per appointment type, so the day reads at a glance. */
const TYPE_TONE: Record<string, string> = {
  Intake: 'violet',
  'Medication review': 'blue',
  'Lithium review': 'green',
  Consult: 'teal',
};
const toneOf = (p: Patient) => TYPE_TONE[p.visitType.en] ?? 'slate';

const DAY_START = 8 * 60; // 08:00
const DAY_END = 17 * 60; // 17:00
const PX_PER_MIN = 1.8;

const toMin = (hhmm: string) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};
const toHHMM = (min: number) => `${String(Math.floor(min / 60)).padStart(2, '0')}:${String(min % 60).padStart(2, '0')}`;

/** Minutes since midnight, refreshed every minute, for the "now" line. */
function useNowMinutes(): number {
  const read = () => {
    const d = new Date();
    return d.getHours() * 60 + d.getMinutes();
  };
  const [now, setNow] = useState(read);
  useEffect(() => {
    const id = window.setInterval(() => setNow(read()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

/**
 * The demo schedule is always dated to the real current day: every synthetic appointment
 * falls on "today", whichever day the app is opened. Other days are empty.
 */
export function Schedule({
  lang,
  day,
  setDay,
  view,
  setView,
  onSelect,
  currentId,
  compact,
}: {
  lang: Lang;
  day: string;
  setDay: (d: string) => void;
  view: ScheduleView;
  setView: (v: ScheduleView) => void;
  onSelect: (p: Patient) => void;
  currentId?: string;
  compact?: boolean;
}) {
  const S = STRINGS[lang];
  const today = todayISO();
  const isToday = day === today;
  const patients = isToday ? [...PATIENTS].sort((a, b) => a.time.localeCompare(b.time)) : [];
  const now = useNowMinutes();

  return (
    <section className={`card schedule ${compact ? 'schedule-compact' : ''}`} aria-labelledby="schedule-title">
      <div className="schedule-head">
        <div className="schedule-title-wrap">
          <div className="eyebrow">{isToday ? S.todaysPatients : S.schedule}</div>
          <h2 id="schedule-title" className="schedule-date">
            {weekdayDate(day, lang)}
          </h2>
          <div className="muted small">{isToday ? `${S.appointments(patients.length)} · ${S.scheduleHint}` : ' '}</div>
        </div>
        <div className="schedule-controls">
          <div className="day-nav">
            <button type="button" className="icon-btn" onClick={() => setDay(addDays(day, -1))} aria-label={S.prevDay}>
              <ChevronIcon dir="left" />
            </button>
            <button type="button" className="btn-ghost" onClick={() => setDay(today)} disabled={isToday}>
              {S.today}
            </button>
            <button type="button" className="icon-btn" onClick={() => setDay(addDays(day, 1))} aria-label={S.nextDay}>
              <ChevronIcon dir="right" />
            </button>
          </div>
          <div className="seg" role="group" aria-label={`${S.calendar} / ${S.list}`}>
            <button type="button" aria-pressed={view === 'calendar'} onClick={() => setView('calendar')}>
              <CalendarIcon /> <span>{S.calendar}</span>
            </button>
            <button type="button" aria-pressed={view === 'list'} onClick={() => setView('list')}>
              <ListIcon /> <span>{S.list}</span>
            </button>
          </div>
        </div>
      </div>

      {isToday ? (
        <ul className="legend" aria-label={S.legend}>
          {[...new Map(patients.map((p) => [p.visitType.en, p])).values()].map((p) => (
            <li key={p.visitType.en} className={`vt-${toneOf(p)}`}>
              <span className="vt-dot" aria-hidden="true" />
              {p.visitType[lang]}
            </li>
          ))}
        </ul>
      ) : null}

      {!isToday ? (
        <div className="schedule-empty">
          <p>{S.noAppointments}</p>
          <button type="button" className="btn-primary" onClick={() => setDay(today)}>
            {S.backToToday}
          </button>
        </div>
      ) : view === 'calendar' ? (
        <CalendarDay lang={lang} patients={patients} now={now} onSelect={onSelect} currentId={currentId} />
      ) : (
        <ListDay lang={lang} patients={patients} onSelect={onSelect} currentId={currentId} />
      )}
    </section>
  );
}

function CalendarDay({
  lang,
  patients,
  now,
  onSelect,
  currentId,
}: {
  lang: Lang;
  patients: Patient[];
  now: number;
  onSelect: (p: Patient) => void;
  currentId?: string;
}) {
  const S = STRINGS[lang];
  const today = todayISO();
  const hours: number[] = [];
  for (let m = DAY_START; m <= DAY_END; m += 60) hours.push(m);
  const height = (DAY_END - DAY_START) * PX_PER_MIN;
  const showNow = now >= DAY_START && now <= DAY_END;

  return (
    <div className="cal" style={{ height: height + 16 }}>
      <div className="cal-grid" style={{ height }}>
        {hours.map((m) => (
          <div key={m} className="cal-hour" style={{ top: (m - DAY_START) * PX_PER_MIN }}>
            {showNow && Math.abs(m - now) < 15 ? null : <span className="cal-hour-label mono">{toHHMM(m)}</span>}
          </div>
        ))}
        {showNow ? (
          <div className="cal-now" style={{ top: (now - DAY_START) * PX_PER_MIN }} aria-hidden="true">
            <span className="cal-now-label">{S.now}</span>
          </div>
        ) : null}
        <ol className="cal-events" aria-label={S.todaysPatients}>
          {patients.map((p) => {
            const start = toMin(p.time);
            const end = start + p.durationMin;
            const active = p.id === currentId;
            return (
              <li key={p.id} className="cal-event-wrap" style={{ top: (start - DAY_START) * PX_PER_MIN, height: p.durationMin * PX_PER_MIN - 4 }}>
                <button type="button" className={`cal-event vt-${toneOf(p)} ${active ? 'is-current' : ''}`} onClick={() => onSelect(p)} aria-current={active ? 'true' : undefined}>
                  <span className="cal-time mono">
                    {p.time}–{toHHMM(end)}
                  </span>
                  <span className="cal-name">{p.name}</span>
                  <span className="cal-meta">
                    {ageOn(p.dob, today)} {S.years} · {S.sexShort(p.sex)} · {p.visitType[lang]} · {p.specialty[lang]}
                  </span>
                  {active ? <span className="tag tag-current">{S.current}</span> : null}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

function ListDay({ lang, patients, onSelect, currentId }: { lang: Lang; patients: Patient[]; onSelect: (p: Patient) => void; currentId?: string }) {
  const S = STRINGS[lang];
  const today = todayISO();
  return (
    <div className="plist" role="list" aria-label={S.todaysPatients}>
      <div className="plist-head" aria-hidden="true">
        <span>{S.time}</span>
        <span>{S.patient}</span>
        <span>{S.visit}</span>
        <span>{S.documents}</span>
        <span />
      </div>
      {patients.map((p) => {
        const active = p.id === currentId;
        return (
          <div key={p.id} role="listitem">
            <button type="button" className={`plist-row vt-${toneOf(p)} ${active ? 'is-current' : ''}`} onClick={() => onSelect(p)} aria-current={active ? 'true' : undefined}>
              <span className="mono plist-time">
                {p.time}–{toHHMM(toMin(p.time) + p.durationMin)}
              </span>
              <span className="plist-patient">
                <span className="strong">{p.name}</span>
                <span className="muted small">
                  {ageOn(p.dob, today)} {S.years} · {p.sex === 'F' ? S.female : S.male} · <span className="mono">{p.mrn}</span>
                </span>
              </span>
              <span className="plist-visit">
                <span className="vt-label">
                  <span className="vt-dot" aria-hidden="true" />
                  {p.visitType[lang]}
                </span>
                <span className="muted small">{p.specialty[lang]}</span>
              </span>
              <span className="plist-docs mono">{docsFor(p.id).length}</span>
              <span className="plist-open">{active ? S.current : S.openSummary}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
}
