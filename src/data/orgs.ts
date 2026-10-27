import type { Org } from './types';

/**
 * Every organization below is fictional. Names, addresses and phone numbers are invented
 * (postcodes use the ZZ suffix and numbers use the 555 block on purpose) so no document
 * can be mistaken for a record from a real practice or hospital.
 */
export const ORGS: Record<string, Org> = {
  wilgenhoek: {
    name: 'Ziekenhuis Wilgenhoek',
    address: 'Wilgenhoeklaan 1, 3500 ZZ Utrecht',
    phone: '030 555 0100',
    mark: 'ZW',
  },
  kastanjeplein: {
    name: 'Huisartsenpraktijk Kastanjeplein',
    address: 'Kastanjeplein 7, 3512 ZZ Utrecht',
    phone: '030 555 0217',
    mark: 'HK',
  },
  debrug: {
    name: 'Huisartsenpraktijk De Brug',
    address: 'Brugstraat 22, 3531 ZZ Utrecht',
    phone: '030 555 0342',
    mark: 'DB',
  },
  lindeboom: {
    name: 'Huisartsenpraktijk Lindeboom',
    address: 'Lindelaan 3, 3571 ZZ Utrecht',
    phone: '030 555 0466',
    mark: 'HL',
  },
  steiger: {
    name: 'Psychologenpraktijk De Steiger',
    address: 'Steigerkade 15, 3511 ZZ Utrecht',
    phone: '030 555 0581',
    mark: 'DS',
  },
  diagnostiek: {
    name: 'Diagnostisch Centrum Midden',
    address: 'Laboratoriumweg 40, 3584 ZZ Utrecht',
    phone: '030 555 0690',
    mark: 'DC',
  },
};
