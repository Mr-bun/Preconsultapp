/** Source documents are bilingual: the Dutch original plus an English translation. */
export type Lang = 'nl' | 'en';
export type T = { nl: string; en: string };

/** A citation: a document, optionally narrowed to one passage inside it. */
export type Ref = { doc: string; at?: string };

export type Block =
  | { type: 'heading'; text: T }
  | { type: 'para'; id?: string; text: T }
  | { type: 'fields'; rows: { id?: string; label: T; value: T }[] }
  | { type: 'list'; items: { id?: string; text: T }[] }
  | {
      /** One journal entry in SOEP format (Dutch GP / GGZ standard: S, O, E, P). */
      type: 'soep';
      date: string;
      author?: string;
      rows: { id?: string; code: 'S' | 'O' | 'E' | 'P'; text: T }[];
    }
  | {
      type: 'table';
      columns: T[];
      rows: { id?: string; cells: (string | T)[]; flag?: 'H' | 'L' | '*' }[];
    }
  | {
      /** Signaleringsplan: relapse prevention plan in traffic-light phases. */
      type: 'signal';
      phases: { id?: string; tone: 'green' | 'orange' | 'red'; title: T; signs: T; actions: T }[];
    };

export type DocLayout = 'letter' | 'note' | 'journal' | 'lab' | 'meds' | 'plan';

export interface Org {
  name: string;
  address: string;
  phone: string;
  /** Short mark shown in the letterhead. */
  mark: string;
}

export interface SourceDoc {
  id: string;
  patient: string;
  layout: DocLayout;
  /** ISO date, yyyy-mm-dd */
  date: string;
  /** Full document type, e.g. "Verwijsbrief" / "Referral letter". */
  type: T;
  /** Short label used on citation chips, e.g. "Verwijsbrief huisarts" / "GP referral". */
  short: T;
  org: string;
  unit: T;
  author: { name: string; role: T };
  to?: { name: string; org: string; unit: T };
  blocks: Block[];
}

export interface Stmt {
  t: T;
  refs: Ref[];
}

/** Plain strings are language-neutral values (numbers, codes); the UI localizes decimals for Dutch. */
export type Txt = string | T;

export type VisitKind = 'intake' | 'followup' | 'medication' | 'consultation';
export type VisitMode = 'onsite' | 'video' | 'phone';

export interface Patient {
  id: string;
  name: string;
  surname: string;
  initials: string;
  sex: 'F' | 'M';
  /** ISO date of birth */
  dob: string;
  mrn: string;
  address: string;
  specialty: T;
  /** Standard appointment type (as in hospital and GGZ agendas), how the visit takes place, and its reason. */
  visit: { kind: VisitKind; mode: VisitMode; reason: T };
  /** Appointment start time today, HH:MM. The schedule is always dated to the day it is viewed. */
  time: string;
  durationMin: number;
  allergies: T;
  reason: Stmt;
  measures: { label: Txt; value: Txt; date: string; ref: Ref }[];
  conditions: T[];
  summary: Stmt[];
  /** Risk items carry no text of their own: the quote is read from the cited passage, so it is always verbatim. */
  risk: { who: T; kind: T; ref: Ref }[];
  riskGap?: T;
  flags: Stmt[];
  visits: { date: string; who: T; reason: T; action: T; ref: Ref }[];
  meds: {
    current: { name: T; dose: T }[];
    past: { name: T; when: T; why: T }[];
    ref: Ref;
  };
  tests: {
    name: Txt;
    value: Txt;
    range: Txt;
    date: string;
    status: 'normal' | 'high' | 'low' | 'abnormal';
    ref: Ref;
  }[];
  gaps: T[];
  qa: { q: T; a: T; refs: Ref[]; out?: boolean }[];
}

export interface PatientBundle {
  patient: Patient;
  docs: SourceDoc[];
}
