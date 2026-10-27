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
  t: string;
  refs: Ref[];
}

export interface Patient {
  id: string;
  name: string;
  surname: string;
  initials: string;
  sex: 'F' | 'M';
  dob: string;
  mrn: string;
  address: string;
  specialty: string;
  visitType: string;
  time: string;
  slot: string;
  allergies: string;
  reason: Stmt;
  measures: { label: string; value: string; date: string; ref: Ref }[];
  conditions: string[];
  summary: Stmt[];
  /** Risk items carry no text of their own: the quote is read from the cited passage, so it is always verbatim. */
  risk: { who: string; kind: string; ref: Ref }[];
  riskGap?: string;
  flags: Stmt[];
  visits: { date: string; who: string; reason: string; action: string; ref: Ref }[];
  meds: {
    current: { name: string; dose: string }[];
    past: { name: string; when: string; why: string }[];
    ref: Ref;
  };
  tests: {
    name: string;
    value: string;
    range: string;
    date: string;
    status: 'normal' | 'high' | 'low' | 'abnormal';
    ref: Ref;
  }[];
  gaps: string[];
  qa: { q: string; a: string; refs: Ref[]; out?: boolean }[];
}

export interface PatientBundle {
  patient: Patient;
  docs: SourceDoc[];
}
