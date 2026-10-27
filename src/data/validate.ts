import { BUNDLES, DOCS } from './index';
import { passages } from '../lib/format';
import type { Ref } from './types';

/**
 * Checks that every citation in the app points at a document that exists, belongs to the
 * same patient, and (when a passage is named) contains that passage. Returns a list of
 * problems; an empty list means every link in the UI will land on real text.
 */
export function validateData(): string[] {
  const problems: string[] = [];
  const ids = new Set<string>();

  for (const { docs } of BUNDLES) {
    for (const d of docs) {
      if (ids.has(d.id)) problems.push(`Duplicate document id ${d.id}`);
      ids.add(d.id);
      const seen = new Set<string>();
      d.blocks.forEach((b) => {
        const local: (string | undefined)[] =
          b.type === 'para' ? [b.id]
          : b.type === 'fields' ? b.rows.map((r) => r.id)
          : b.type === 'list' ? b.items.map((i) => i.id)
          : b.type === 'soep' ? b.rows.map((r) => r.id)
          : b.type === 'table' ? b.rows.map((r) => r.id)
          : b.type === 'signal' ? b.phases.map((p) => p.id)
          : [];
        local.forEach((id) => {
          if (!id) return;
          if (seen.has(id)) problems.push(`${d.id}: duplicate passage id ${id}`);
          seen.add(id);
        });
      });
    }
  }

  for (const { patient: p, docs } of BUNDLES) {
    const check = (where: string, r: Ref) => {
      const doc = DOCS[r.doc];
      if (!doc) return problems.push(`${p.id} ${where}: unknown document ${r.doc}`);
      if (doc.patient !== p.id) return problems.push(`${p.id} ${where}: ${r.doc} belongs to ${doc.patient}`);
      if (r.at && !passages(doc).has(r.at)) problems.push(`${p.id} ${where}: ${r.doc} has no passage "${r.at}"`);
      return undefined;
    };

    p.reason.refs.forEach((r) => check('reason', r));
    p.measures.forEach((m) => check(`measure ${m.label}`, m.ref));
    p.summary.forEach((s, i) => s.refs.forEach((r) => check(`summary ${i + 1}`, r)));
    p.flags.forEach((s, i) => s.refs.forEach((r) => check(`flag ${i + 1}`, r)));
    p.visits.forEach((v) => check(`visit ${v.date}`, v.ref));
    p.tests.forEach((t) => check(`test ${t.name}`, t.ref));
    p.qa.forEach((q, i) => q.refs.forEach((r) => check(`qa ${i + 1}`, r)));
    check('meds', p.meds.ref);
    p.risk.forEach((r) => {
      check(`risk ${r.kind}`, r.ref);
      if (!r.ref.at) problems.push(`${p.id} risk ${r.kind}: a risk quote must cite a passage`);
    });
    if (p.risk.length === 0 && !p.riskGap) problems.push(`${p.id}: no risk entries and no risk gap shown`);
    p.summary.forEach((s, i) => {
      if (s.refs.length === 0) problems.push(`${p.id} summary ${i + 1}: statement without a source`);
    });
    if (docs.some((d) => d.patient !== p.id)) problems.push(`${p.id}: bundle contains another patient's document`);
  }

  return problems;
}
