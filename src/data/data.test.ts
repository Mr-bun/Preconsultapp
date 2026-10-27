import { describe, expect, it } from 'vitest';
import { validateData } from './validate';
import { BUNDLES } from './index';

describe('synthetic record data', () => {
  it('every citation resolves to a document and passage of the same patient', () => {
    expect(validateData()).toEqual([]);
  });

  it('every patient has source documents', () => {
    BUNDLES.forEach((b) => expect(b.docs.length).toBeGreaterThan(3));
  });
});
