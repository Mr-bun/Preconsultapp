import type { PatientBundle } from '../types';

const P = 'p3';

export const elAmrani: PatientBundle = {
  patient: {
    id: P,
    name: 'Fatima El Amrani',
    surname: 'El Amrani',
    initials: 'F.',
    sex: 'F',
    dob: '1984-09-08',
    mrn: 'SYN-03562',
    address: 'Zonnebloemlaan 8, 3531 ZZ Utrecht',
    specialty: { nl: 'Psychiatrie', en: 'Psychiatry' },
    visitType: { nl: 'Intake', en: 'Intake' },
    time: '10:40',
    durationMin: 45,
    allergies: { nl: 'Geen bekend', en: 'None known' },
    reason: {
      t: {
        nl: 'Diagnostiek en traumagerichte behandeling na een verkeersongeval. De huisarts vraagt ook advies over het afbouwen van haar langdurige gebruik van een slaapmiddel.',
        en: 'Diagnostic assessment and trauma-focused treatment after a road traffic collision. The GP also asks for advice on reducing her long-term use of a sleeping tablet.',
      },
      refs: [{ doc: 'p3-ref', at: 'reason' }],
    },
    measures: [
      { label: 'PCL-5', value: '52', date: '2026-10-01', ref: { doc: 'p3-ref', at: 'pcl' } },
      { label: 'PHQ-9', value: '11', date: '2026-10-01', ref: { doc: 'p3-ref', at: 'phq' } },
      { label: { nl: 'Slapeloosheid (ISI)', en: 'Insomnia (ISI)' }, value: '21', date: '2026-10-01', ref: { doc: 'p3-ref', at: 'isi' } },
    ],
    conditions: [
      { nl: 'Posttraumatische stressklachten (2025)', en: 'Post-traumatic stress symptoms (2025)' },
      { nl: 'Slapeloosheid', en: 'Insomnia' },
      { nl: 'Whiplash-letsel, hersteld', en: 'Whiplash injury, resolved' },
    ],
    summary: [
      {
        t: { nl: 'Verkeersongeval op 17 aug 2025 als bestuurder; whiplash-letsel, inmiddels hersteld.', en: 'Road traffic collision on 17 Aug 2025 as the driver; whiplash injury, since resolved.' },
        refs: [
          { doc: 'p3-seh', at: 'hx' },
          { doc: 'p3-seh', at: 'dx' },
        ],
      },
      {
        t: {
          nl: 'Sinds het ongeval: nachtmerries, vermijden van autorijden en zich voortdurend op haar hoede voelen.',
          en: 'Since the collision: nightmares, avoidance of driving, and feeling constantly on guard.',
        },
        refs: [{ doc: 'p3-ref', at: 'hx' }],
      },
      { t: { nl: 'PCL-5-score 52 op 1 okt 2026.', en: 'PCL-5 score 52 on 1 Oct 2026.' }, refs: [{ doc: 'p3-ref', at: 'pcl' }] },
      {
        t: {
          nl: 'Paroxetine 20 mg sinds januari 2026; de huisarts ziet een betere stemming maar geen verandering in de slaap.',
          en: 'Paroxetine 20 mg since January 2026; the GP notes better mood but no change in sleep.',
        },
        refs: [
          { doc: 'p3-gp', at: 'p' },
          { doc: 'p3-ref', at: 'course' },
        ],
      },
      {
        t: {
          nl: 'Zolpidem 10 mg elke nacht sinds januari 2026, eerst voorgeschreven als kuur van 7 nachten na het ongeval. Twee pogingen om te stoppen mislukten.',
          en: 'Zolpidem 10 mg nightly since January 2026, first given as a 7-night course after the collision. Two attempts to stop were unsuccessful.',
        },
        refs: [
          { doc: 'p3-meds', at: 'zol' },
          { doc: 'p3-seh', at: 'plan' },
          { doc: 'p3-ref', at: 'course' },
        ],
      },
    ],
    risk: [],
    riskGap: {
      nl: 'In geen enkel document is een screening op suïcide- of zelfbeschadigingsrisico vastgelegd.',
      en: 'No suicide or self-harm risk screen is recorded in any document.',
    },
    flags: [
      {
        t: {
          nl: 'Geen psychotherapie vastgelegd. Volgens de verwijzing stond zij in het voorjaar van 2026 op een wachtlijst bij een psycholoog; onbekend of de behandeling is gestart.',
          en: 'No psychotherapy recorded. The referral says she was on a psychologist waiting list in spring 2026; it is not known whether treatment started.',
        },
        refs: [{ doc: 'p3-ref', at: 'psy' }],
      },
      { t: { nl: 'Haar eigen doel is weer zelf naar haar werk te rijden.', en: 'Her stated goal is to drive to work again.' }, refs: [{ doc: 'p3-ref', at: 'goal' }] },
      {
        t: { nl: 'PHQ-9 gedaald van 15 (jan 2026) naar 11 (okt 2026).', en: 'PHQ-9 fell from 15 (Jan 2026) to 11 (Oct 2026).' },
        refs: [
          { doc: 'p3-gp', at: 'o' },
          { doc: 'p3-ref', at: 'phq' },
        ],
      },
    ],
    visits: [
      {
        date: '2026-10-01',
        who: { nl: 'Huisarts', en: 'GP' },
        reason: { nl: 'Aanhoudende nachtmerries, angst om auto te rijden', en: 'Persistent nightmares, fear of driving' },
        action: { nl: 'Vragenlijsten afgenomen; verwijzing psychiatrie', en: 'Questionnaires completed; referral to psychiatry' },
        ref: { doc: 'p3-ref' },
      },
      {
        date: '2026-01-20',
        who: { nl: 'Huisarts', en: 'GP' },
        reason: { nl: 'Sombere stemming en slecht slapen', en: 'Low mood and poor sleep' },
        action: { nl: 'Paroxetine 20 mg gestart; zolpidem herstart; lab', en: 'Paroxetine 20 mg started; zolpidem restarted; bloods' },
        ref: { doc: 'p3-gp' },
      },
      {
        date: '2025-08-17',
        who: { nl: 'Spoedeisende Hulp', en: 'Emergency dept.' },
        reason: { nl: 'Verkeersongeval', en: 'Road traffic collision' },
        action: { nl: 'Whiplash; ontslag met verwijzing fysiotherapie en 7 nachten zolpidem', en: 'Whiplash; discharged with physiotherapy referral and 7 nights of zolpidem' },
        ref: { doc: 'p3-seh' },
      },
    ],
    meds: {
      current: [
        { name: { nl: 'Paroxetine', en: 'Paroxetine' }, dose: { nl: '20 mg 1 dd', en: '20 mg OD' } },
        { name: { nl: 'Zolpidem', en: 'Zolpidem' }, dose: { nl: '10 mg voor de nacht', en: '10 mg nocte' } },
      ],
      past: [
        { name: { nl: 'Tramadol 50 mg z.n.', en: 'Tramadol 50 mg PRN' }, when: { nl: 'aug tot sep 2025', en: 'Aug to Sep 2025' }, why: { nl: 'pijn verdwenen', en: 'pain resolved' } },
        { name: { nl: 'Zolpidem 10 mg, 7 nachten', en: 'Zolpidem 10 mg, 7 nights' }, when: { nl: 'aug 2025', en: 'Aug 2025' }, why: { nl: 'kuur afgerond', en: 'course completed' } },
      ],
      ref: { doc: 'p3-meds' },
    },
    tests: [
      { name: 'PCL-5', value: '52', range: '< 33', date: '2026-10-01', status: 'high', ref: { doc: 'p3-ref', at: 'pcl' } },
      { name: 'PHQ-9', value: '11', range: '< 5', date: '2026-10-01', status: 'high', ref: { doc: 'p3-ref', at: 'phq' } },
      { name: 'Insomnia Severity Index', value: '21', range: '< 8', date: '2026-10-01', status: 'high', ref: { doc: 'p3-ref', at: 'isi' } },
      { name: 'AUDIT-C', value: '2', range: '< 4', date: '2026-10-01', status: 'normal', ref: { doc: 'p3-ref', at: 'audit' } },
      { name: 'TSH', value: '2.4 mU/L', range: '0.4 to 4.0', date: '2026-01-20', status: 'normal', ref: { doc: 'p3-lab', at: 'tsh' } },
    ],
    gaps: [
      { nl: 'Screening op suïcide- en zelfbeschadigingsrisico', en: 'Suicide and self-harm risk screen' },
      { nl: 'Eerdere traumageschiedenis', en: 'Earlier trauma history' },
      { nl: 'Werksituatie en verzuim', en: 'Work situation and sick leave status' },
      { nl: 'Uitkomst van de wachtlijst bij de psycholoog', en: 'Outcome of the psychologist waiting list' },
    ],
    qa: [
      {
        q: { nl: 'Wat is er gebeurd bij het ongeval?', en: 'What happened in the collision?' },
        a: {
          nl: 'Zij was bestuurder; een andere auto reed op een kruising van opzij tegen haar auto. Gordel om, airbags afgegaan, geen bewustzijnsverlies. Whiplash-letsel. Dezelfde dag ontslagen met een verwijzing naar de fysiotherapeut en 7 nachten zolpidem.',
          en: 'She was the driver; another car hit hers from the side at a junction. Seatbelt worn, airbags deployed, no loss of consciousness. Whiplash injury. Discharged the same day with a physiotherapy referral and 7 nights of zolpidem.',
        },
        refs: [
          { doc: 'p3-seh', at: 'hx' },
          { doc: 'p3-seh', at: 'plan' },
        ],
      },
      {
        q: { nl: 'Heeft zij psychotherapie gehad?', en: 'Has she had any psychotherapy?' },
        a: {
          nl: 'Er is geen psychotherapie vastgelegd. Volgens de verwijsbrief stond zij in het voorjaar van 2026 op de wachtlijst bij een psycholoog; de huisarts weet niet of de behandeling is gestart.',
          en: 'No psychotherapy is recorded. The GP referral says she was on a psychologist waiting list in spring 2026; the GP does not know whether treatment started.',
        },
        refs: [{ doc: 'p3-ref', at: 'psy' }],
      },
      {
        q: { nl: 'Welke therapie moet ik als eerste aanbieden?', en: 'Which therapy should I offer first?' },
        out: true,
        a: {
          nl: 'PreConsult vat het dossier samen en geeft geen behandeladvies.\n\nRelevante gegevens: PCL-5 52; geen psychotherapie vastgelegd; haar eigen doel is weer zelf naar haar werk te rijden.',
          en: 'PreConsult summarizes the record and does not advise on treatment.\n\nRelevant entries: PCL-5 52; no psychotherapy recorded; her stated goal is to drive to work again.',
        },
        refs: [
          { doc: 'p3-ref', at: 'pcl' },
          { doc: 'p3-ref', at: 'psy' },
          { doc: 'p3-ref', at: 'goal' },
        ],
      },
    ],
  },

  docs: [
    {
      id: 'p3-seh',
      patient: P,
      layout: 'letter',
      date: '2025-08-17',
      type: { nl: 'SEH-brief', en: 'Emergency department letter' },
      short: { nl: 'SEH-brief', en: 'ED letter' },
      org: 'wilgenhoek',
      unit: { nl: 'Spoedeisende Hulp', en: 'Emergency Department' },
      author: { name: 'J. de Lange', role: { nl: 'SEH-arts KNMG', en: 'emergency physician' } },
      to: { name: 'R. Jacobs, huisarts', org: 'Huisartsenpraktijk De Brug', unit: { nl: '', en: '' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Binnenkomst', en: 'Arrival' }, value: { nl: '17-08-2025, 14:52, per ambulance', en: '17-08-2025, 14:52, by ambulance' } },
            { label: { nl: 'Triage', en: 'Triage' }, value: { nl: 'Oranje (MTS)', en: 'Orange (Manchester Triage)' } },
            { label: { nl: 'Ontslag', en: 'Discharged' }, value: { nl: '17-08-2025, 18:20, naar huis', en: '17-08-2025, 18:20, home' } },
          ],
        },
        { type: 'heading', text: { nl: 'Anamnese', en: 'History' } },
        {
          type: 'para',
          id: 'hx',
          text: {
            nl: 'Patiënte was bestuurder van een personenauto die op een kruising van opzij werd aangereden door een andere auto. Droeg gordel, airbags afgegaan. Geen bewustzijnsverlies. Klaagt over nekpijn. Erg geschrokken en trillerig.',
            en: 'The patient was driving a car that was hit from the side by another car at a junction. Seatbelt worn, airbags deployed. No loss of consciousness. Complains of neck pain. Very shaken and trembling.',
          },
        },
        { type: 'heading', text: { nl: 'Lichamelijk onderzoek', en: 'Examination' } },
        {
          type: 'para',
          text: {
            nl: 'ABCDE stabiel. EMV 15. Drukpijn paravertebraal cervicaal, geen drukpijn op de processus spinosi. Neurologisch geen uitval. Canadian C-spine rule: geen beeldvorming geïndiceerd.',
            en: 'ABCDE stable. GCS 15. Paravertebral cervical tenderness, no midline tenderness. No neurological deficit. Canadian C-spine rule: no imaging indicated.',
          },
        },
        { type: 'heading', text: { nl: 'Conclusie', en: 'Conclusion' } },
        { type: 'para', id: 'dx', text: { nl: 'Whiplash-letsel (WAD graad II) na verkeersongeval.', en: 'Whiplash injury (WAD grade II) after a road traffic collision.' } },
        { type: 'heading', text: { nl: 'Beleid', en: 'Plan' } },
        {
          type: 'para',
          id: 'plan',
          text: {
            nl: 'Ontslag naar huis. Paracetamol, zo nodig tramadol 50 mg. Verwijzing fysiotherapie. Gezien acute onrust en slaapproblemen zolpidem 10 mg, 7 tabletten, 1 voor de nacht. Controle bij de huisarts.',
            en: 'Discharged home. Paracetamol, tramadol 50 mg as needed. Physiotherapy referral. For acute distress and sleep problems, zolpidem 10 mg, 7 tablets, 1 at night. Follow-up with the GP.',
          },
        },
      ],
    },

    {
      id: 'p3-gp',
      patient: P,
      layout: 'journal',
      date: '2026-01-20',
      type: { nl: 'Journaal huisarts (uittreksel)', en: 'GP journal (extract)' },
      short: { nl: 'Journaal huisarts', en: 'GP consult' },
      org: 'debrug',
      unit: { nl: 'Huisartsenpraktijk', en: 'General practice' },
      author: { name: 'R. Jacobs', role: { nl: 'huisarts', en: 'general practitioner' } },
      blocks: [
        {
          type: 'soep',
          date: '2026-01-20',
          author: 'R. Jacobs, huisarts',
          rows: [
            {
              id: 's',
              code: 'S',
              text: {
                nl: 'Sinds het ongeluk in augustus slecht slapen, nachtmerries over de botsing, somber. Rijdt niet meer zelf auto. Vraagt om iets om te slapen; de zolpidem van de SEH hielp goed.',
                en: 'Since the accident in August: poor sleep, nightmares about the collision, low mood. No longer drives herself. Asks for something to help her sleep; the zolpidem from the ED helped well.',
              },
            },
            { id: 'o', code: 'O', text: { nl: 'Gespannen, wisselend affect. PHQ-9: 15.', en: 'Tense, variable affect. PHQ-9: 15.' } },
            {
              id: 'e',
              code: 'E',
              text: {
                nl: 'Depressieve klachten en slaapproblemen na verkeersongeval (P76, P06). Mogelijk PTSS (P82).',
                en: 'Depressive symptoms and sleep problems after a road traffic collision (ICPC P76, P06). Possible PTSD (P82).',
              },
            },
            {
              id: 'p',
              code: 'P',
              text: {
                nl: 'Start paroxetine 20 mg 1 dd 1. Zolpidem 10 mg a.n., 30 stuks, gebruik zoveel mogelijk beperken. Lab: TSH. Aanmelding psycholoog besproken; patiënte meldt zich zelf aan. Controle over 6 weken.',
                en: 'Start paroxetine 20 mg once daily. Zolpidem 10 mg at night, 30 tablets, keep use to a minimum. Bloods: TSH. Referral to a psychologist discussed; she will register herself. Review in 6 weeks.',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'p3-lab',
      patient: P,
      layout: 'lab',
      date: '2026-01-20',
      type: { nl: 'Laboratoriumuitslagen', en: 'Laboratory results' },
      short: { nl: 'Labuitslagen', en: 'Lab results' },
      org: 'diagnostiek',
      unit: { nl: 'Klinisch chemisch laboratorium', en: 'Clinical chemistry laboratory' },
      author: { name: 'R. Jacobs', role: { nl: 'huisarts (aanvrager)', en: 'general practitioner (requester)' } },
      blocks: [
        {
          type: 'fields',
          rows: [{ label: { nl: 'Afname', en: 'Sample taken' }, value: { nl: '22-01-2026 08:15', en: '22-01-2026 08:15' } }],
        },
        {
          type: 'table',
          columns: [
            { nl: 'Bepaling', en: 'Test' },
            { nl: 'Uitslag', en: 'Result' },
            { nl: 'Eenheid', en: 'Unit' },
            { nl: 'Referentie', en: 'Reference' },
          ],
          rows: [
            { id: 'tsh', cells: ['TSH', '2,4', 'mU/L', '0,4 – 4,0'] },
            { id: 'hb', cells: ['Hemoglobine', '8,4', 'mmol/L', '7,5 – 10,0'] },
            { id: 'glu', cells: ['Glucose (niet nuchter)', '5,8', 'mmol/L', '< 7,8'] },
          ],
        },
      ],
    },

    {
      id: 'p3-ref',
      patient: P,
      layout: 'letter',
      date: '2026-10-01',
      type: { nl: 'Verwijsbrief', en: 'Referral letter' },
      short: { nl: 'Verwijsbrief huisarts', en: 'GP referral' },
      org: 'debrug',
      unit: { nl: 'Huisartsenpraktijk', en: 'General practice' },
      author: { name: 'R. Jacobs', role: { nl: 'huisarts', en: 'general practitioner' } },
      to: { name: 'Polikliniek Psychiatrie', org: 'Ziekenhuis Wilgenhoek', unit: { nl: 't.a.v. intakecoördinator', en: 'attn. intake coordinator' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Verzonden via', en: 'Sent via' }, value: { nl: 'Elektronisch verwijsportaal', en: 'Electronic referral portal' } },
            { label: { nl: 'Specialisme', en: 'Specialty' }, value: { nl: 'Psychiatrie, volwassenen', en: 'Adult psychiatry' } },
            { label: { nl: 'Urgentie', en: 'Urgency' }, value: { nl: 'Regulier', en: 'Routine' } },
          ],
        },
        { type: 'heading', text: { nl: 'Reden van verwijzing', en: 'Reason for referral' } },
        {
          type: 'para',
          id: 'reason',
          text: {
            nl: 'Graag diagnostiek en traumagerichte behandeling bij vermoeden van een posttraumatische stressstoornis na een verkeersongeval (augustus 2025). Daarnaast graag uw advies over het afbouwen van langdurig zolpidemgebruik.',
            en: 'Please assess and offer trauma-focused treatment for suspected post-traumatic stress disorder after a road traffic collision (August 2025). We would also value your advice on tapering long-term zolpidem use.',
          },
        },
        { type: 'heading', text: { nl: 'Anamnese', en: 'History' } },
        {
          type: 'para',
          id: 'hx',
          text: {
            nl: 'Sinds het ongeval heeft mevrouw nachtmerries over de botsing, vermijdt zij autorijden en heeft zij het gevoel continu op haar hoede te moeten zijn. Zij schrikt bij harde geluiden.',
            en: 'Since the collision she has had nightmares about the crash, avoids driving and feels she has to be on guard all the time. She startles at loud noises.',
          },
        },
        {
          type: 'para',
          id: 'course',
          text: {
            nl: 'Sinds januari 2026 paroxetine 20 mg: stemming iets verbeterd, slaap onveranderd. Gebruikt sinds januari dagelijks zolpidem 10 mg; twee pogingen om te stoppen mislukten door slapeloosheid.',
            en: 'On paroxetine 20 mg since January 2026: mood somewhat better, sleep unchanged. Has taken zolpidem 10 mg every night since January; two attempts to stop failed because of insomnia.',
          },
        },
        {
          type: 'para',
          id: 'psy',
          text: {
            nl: 'Zij stond in het voorjaar van 2026 op de wachtlijst bij een psycholoog in de basis-GGZ. Of de behandeling is gestart, is mij niet bekend.',
            en: 'In spring 2026 she was on the waiting list for a psychologist in primary mental health care. I do not know whether treatment started.',
          },
        },
        { type: 'para', id: 'goal', text: { nl: 'Haar eigen doel: weer zelf naar haar werk kunnen rijden.', en: 'Her own goal: to be able to drive herself to work again.' } },
        { type: 'heading', text: { nl: 'Vragenlijsten (01-10-2026)', en: 'Questionnaires (01-10-2026)' } },
        {
          type: 'fields',
          rows: [
            { id: 'pcl', label: { nl: 'PCL-5', en: 'PCL-5' }, value: { nl: '52', en: '52' } },
            { id: 'phq', label: { nl: 'PHQ-9', en: 'PHQ-9' }, value: { nl: '11', en: '11' } },
            { id: 'isi', label: { nl: 'Insomnia Severity Index', en: 'Insomnia Severity Index' }, value: { nl: '21', en: '21' } },
            { id: 'audit', label: { nl: 'AUDIT-C', en: 'AUDIT-C' }, value: { nl: '2', en: '2' } },
          ],
        },
        { type: 'heading', text: { nl: 'Medicatie', en: 'Medication' } },
        {
          type: 'list',
          items: [
            { text: { nl: 'Paroxetine 20 mg, 1 x per dag 1 tablet', en: 'Paroxetine 20 mg, 1 tablet once daily' } },
            { text: { nl: 'Zolpidem 10 mg, 1 x per dag 1 tablet voor de nacht', en: 'Zolpidem 10 mg, 1 tablet at night' } },
          ],
        },
        { type: 'heading', text: { nl: 'Allergieën', en: 'Allergies' } },
        { type: 'para', text: { nl: 'Geen bekend.', en: 'None known.' } },
        { type: 'heading', text: { nl: 'Voorgeschiedenis', en: 'Past history' } },
        {
          type: 'list',
          items: [
            { text: { nl: '2025: whiplash-letsel na verkeersongeval (L83).', en: '2025: whiplash injury after road traffic collision (ICPC L83).' } },
            { text: { nl: '2009: appendectomie.', en: '2009: appendectomy.' } },
          ],
        },
      ],
    },

    {
      id: 'p3-meds',
      patient: P,
      layout: 'meds',
      date: '2026-10-01',
      type: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      short: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      org: 'debrug',
      unit: { nl: 'Huisartsinformatiesysteem', en: 'GP information system' },
      author: { name: 'R. Jacobs', role: { nl: 'huisarts', en: 'general practitioner' } },
      blocks: [
        {
          type: 'table',
          columns: [
            { nl: 'Geneesmiddel', en: 'Medicine' },
            { nl: 'Gebruik', en: 'Directions' },
            { nl: 'Start', en: 'Start' },
            { nl: 'Stop', en: 'Stop' },
            { nl: 'Voorschrijver', en: 'Prescriber' },
          ],
          rows: [
            { id: 'parox', cells: ['Paroxetine 20 mg tablet', { nl: '1 x per dag 1 tablet', en: '1 tablet once daily' }, '20-01-2026', '', 'R. Jacobs'] },
            { id: 'zol', cells: ['Zolpidem 10 mg tablet', { nl: '1 x per dag 1 tablet voor de nacht', en: '1 tablet at night' }, '20-01-2026', '', 'R. Jacobs'] },
            { id: 'zol-seh', cells: ['Zolpidem 10 mg tablet', { nl: '7 tabletten, 1 voor de nacht', en: '7 tablets, 1 at night' }, '17-08-2025', '24-08-2025', 'SEH Wilgenhoek'] },
            { id: 'tram', cells: ['Tramadol 50 mg capsule', { nl: 'zo nodig max. 3 x per dag 1', en: 'up to 1 three times daily as needed' }, '17-08-2025', '15-09-2025', 'SEH Wilgenhoek'] },
          ],
        },
      ],
    },
  ],
};
