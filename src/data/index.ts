import type { Patient, PatientBundle, SourceDoc } from './types';
import { koster } from './patients/p1-koster';
import { hendriks } from './patients/p2-hendriks';
import { elAmrani } from './patients/p3-elamrani';
import { smit } from './patients/p4-smit';
import { mulder } from './patients/p5-mulder';

export const BUNDLES: PatientBundle[] = [koster, hendriks, elAmrani, smit, mulder];

export const PATIENTS: Patient[] = BUNDLES.map((b) => b.patient);

export const DOCS: Record<string, SourceDoc> = Object.fromEntries(
  BUNDLES.flatMap((b) => b.docs).map((d) => [d.id, d]),
);

/** Documents for one patient, newest first. */
export function docsFor(patientId: string): SourceDoc[] {
  return BUNDLES.flatMap((b) => b.docs)
    .filter((d) => d.patient === patientId)
    .sort((a, b) => b.date.localeCompare(a.date));
}
