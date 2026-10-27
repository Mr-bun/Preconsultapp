import type { PatientBundle } from '../types';

const P = 'p1';

export const koster: PatientBundle = {
  patient: {
    id: P,
    name: 'Sanne Koster',
    surname: 'Koster',
    initials: 'S.',
    sex: 'F',
    dob: '1997-02-11',
    mrn: 'SYN-03105',
    address: 'Esdoornstraat 14, 3512 ZZ Utrecht',
    specialty: 'Psychiatry',
    visitType: 'Medication review',
    time: '09:00',
    slot: 'Tue 3 Nov 2026 · 09:00',
    allergies: 'None known',
    reason: {
      t: 'Medication review after partial response to sertraline. The GP asks for advice on next steps in treatment and whether specialist psychotherapy is indicated.',
      refs: [{ doc: 'p1-ref', at: 'reason' }],
    },
    measures: [
      { label: 'PHQ-9', value: '17 (was 21)', date: '29 Sep 2026', ref: { doc: 'p1-poh', at: 'scores' } },
      { label: 'GAD-7', value: '12', date: '29 Sep 2026', ref: { doc: 'p1-poh', at: 'scores' } },
      { label: 'Last risk screen', value: 'POH-GGZ', date: '29 Sep 2026', ref: { doc: 'p1-poh', at: 'risk' } },
    ],
    conditions: ['Recurrent depressive disorder (2019)', 'Anxiety symptoms', 'Partial sick leave since Sep 2026'],
    summary: [
      {
        t: 'Recurrent depressive disorder; the current episode is her third, with symptoms returning around July 2026.',
        refs: [{ doc: 'p1-ref', at: 'hpi' }],
      },
      {
        t: 'Sertraline started on 4 Aug 2026 at 50 mg and increased to 100 mg after two weeks.',
        refs: [
          { doc: 'p1-gp', at: 'p-0804' },
          { doc: 'p1-gp', at: 'p-0818' },
        ],
      },
      {
        t: 'PHQ-9 was 21 at the start of sertraline and 17 after eight weeks.',
        refs: [
          { doc: 'p1-gp', at: 'o-0804' },
          { doc: 'p1-poh', at: 'scores' },
        ],
      },
      {
        t: 'Citalopram (Nov 2021 to Sep 2022) was stopped because of emotional blunting; recorded as an intolerance.',
        refs: [{ doc: 'p1-meds', at: 'cital' }],
      },
      {
        t: 'Completed 12 sessions of CBT (Oct 2023 to Mar 2024) and was discharged in remission.',
        refs: [
          { doc: 'p1-psy', at: 'tx' },
          { doc: 'p1-psy', at: 'result' },
        ],
      },
      { t: 'On partial sick leave from work since September 2026.', refs: [{ doc: 'p1-ref', at: 'hpi' }] },
    ],
    risk: [
      { who: 'POH-GGZ (practice mental health nurse)', kind: 'Risk screen', ref: { doc: 'p1-poh', at: 'risk' } },
      { who: 'GZ-psychologist', kind: 'Discharge letter', ref: { doc: 'p1-psy', at: 'risk' } },
    ],
    riskGap: 'No structured risk assessment by a psychiatrist and no safety plan on file.',
    flags: [
      {
        t: 'Passive death wishes first recorded on 29 Sep 2026; the 2024 discharge letter recorded no suicidal ideation.',
        refs: [
          { doc: 'p1-poh', at: 'risk' },
          { doc: 'p1-psy', at: 'risk' },
        ],
      },
      {
        t: 'The 2024 discharge letter mentions a relapse prevention plan held by the patient; it is not in the record.',
        refs: [{ doc: 'p1-psy', at: 'result' }],
      },
      { t: 'Vitamin D 38 nmol/L, below the reference range.', refs: [{ doc: 'p1-lab', at: 'vitd' }] },
    ],
    visits: [
      {
        date: '29 Sep 2026',
        who: 'POH-GGZ',
        reason: 'Follow-up of low mood',
        action: 'PHQ-9 17; risk screen; discussed with GP; psychiatry referral',
        ref: { doc: 'p1-poh' },
      },
      {
        date: '4 Aug 2026',
        who: 'GP',
        reason: 'Return of depressive symptoms',
        action: 'Sertraline started 50 mg, increased to 100 mg after 2 weeks; bloods',
        ref: { doc: 'p1-gp' },
      },
      {
        date: '12 Mar 2024',
        who: 'GZ-psychologist',
        reason: 'Second depressive episode',
        action: 'Completed 12 sessions of CBT; discharged in remission',
        ref: { doc: 'p1-psy' },
      },
    ],
    meds: {
      current: [
        { name: 'Sertraline', dose: '100 mg OD' },
        { name: 'Melatonin', dose: '2 mg nocte PRN' },
      ],
      past: [{ name: 'Citalopram 20 mg', when: '2021 to 2022', why: 'emotional blunting' }],
      ref: { doc: 'p1-meds' },
    },
    tests: [
      { name: 'PHQ-9', value: '17', range: '< 5', date: '29 Sep 2026', status: 'high', ref: { doc: 'p1-poh', at: 'scores' } },
      { name: 'GAD-7', value: '12', range: '< 5', date: '29 Sep 2026', status: 'high', ref: { doc: 'p1-poh', at: 'scores' } },
      { name: 'TSH', value: '1.8 mU/L', range: '0.4 to 4.0', date: '4 Aug 2026', status: 'normal', ref: { doc: 'p1-lab', at: 'tsh' } },
      { name: 'Hemoglobin', value: '8.1 mmol/L', range: '7.5 to 10.0', date: '4 Aug 2026', status: 'normal', ref: { doc: 'p1-lab', at: 'hb' } },
      { name: 'Vitamin D (25-OH)', value: '38 nmol/L', range: '> 50', date: '4 Aug 2026', status: 'low', ref: { doc: 'p1-lab', at: 'vitd' } },
    ],
    gaps: [
      'Structured risk assessment and safety plan',
      'Alcohol and substance use not recorded',
      'No collateral history from partner or family',
      'Adherence to sertraline not recorded',
    ],
    qa: [
      {
        q: 'When was risk last assessed, and by whom?',
        a: 'Last risk screen: 29 Sep 2026, by the POH-GGZ. Recorded: occasional passive death wishes, no plans, no preparations, no previous attempts.\n\nNo structured risk assessment by a psychiatrist and no safety plan are on file.',
        refs: [{ doc: 'p1-poh', at: 'risk' }],
      },
      {
        q: 'Why was citalopram stopped?',
        a: 'Stopped on 5 Sep 2022, after about ten months, because of emotional blunting. It is recorded as an intolerance.',
        refs: [{ doc: 'p1-meds', at: 'cital' }],
      },
      {
        q: 'Should I increase the sertraline dose?',
        out: true,
        a: 'PreConsult summarizes the record and does not advise on treatment.\n\nRelevant entries: sertraline 100 mg since 18 Aug 2026; PHQ-9 21 to 17 over eight weeks; no side effects reported; adherence not recorded.',
        refs: [
          { doc: 'p1-gp', at: 'p-0818' },
          { doc: 'p1-poh', at: 'scores' },
        ],
      },
    ],
  },

  docs: [
    {
      id: 'p1-ref',
      patient: P,
      layout: 'letter',
      date: '2026-10-06',
      type: { nl: 'Verwijsbrief', en: 'Referral letter' },
      short: { nl: 'Verwijsbrief huisarts', en: 'GP referral' },
      org: 'kastanjeplein',
      unit: { nl: 'Huisartsenpraktijk', en: 'General practice' },
      author: { name: 'L. Smeets', role: { nl: 'huisarts', en: 'general practitioner' } },
      to: { name: 'Polikliniek Psychiatrie', org: 'Ziekenhuis Wilgenhoek', unit: { nl: 't.a.v. dienstdoend psychiater', en: 'attn. psychiatrist on duty' } },
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
            nl: 'Graag uw beoordeling en advies over het verdere medicamenteuze beleid bij een recidiverende depressieve stoornis met partiële respons op sertraline. Daarnaast de vraag of verwijzing naar specialistische psychotherapie geïndiceerd is.',
            en: 'Please assess and advise on further medication management for recurrent depressive disorder with a partial response to sertraline. We also ask whether referral for specialist psychotherapy is indicated.',
          },
        },
        { type: 'heading', text: { nl: 'Anamnese', en: 'History' } },
        {
          type: 'para',
          id: 'hpi',
          text: {
            nl: 'Mevrouw is een 29-jarige vrouw die sinds juli 2026 opnieuw last heeft van somberheid, verminderde interesse, concentratieproblemen en vroeg wakker worden. Het betreft haar derde depressieve episode (eerder in 2019 en 2021). Sinds september 2026 is zij voor 50% ziekgemeld bij haar werkgever.',
            en: 'Ms Koster is a 29-year-old woman who has again had low mood, loss of interest, poor concentration and early waking since July 2026. This is her third depressive episode (previous episodes in 2019 and 2021). Since September 2026 she has been on 50% sick leave from her employer.',
          },
        },
        {
          type: 'para',
          id: 'tx',
          text: {
            nl: 'Op 4 augustus 2026 gestart met sertraline 50 mg, na twee weken opgehoogd naar 100 mg. Na acht weken partiële respons: PHQ-9 daalde van 21 naar 17. Daarnaast ondersteunende gesprekken bij de POH-GGZ (vijf contacten). Geen bijwerkingen gemeld.',
            en: 'Sertraline 50 mg started on 4 August 2026, increased to 100 mg after two weeks. Partial response after eight weeks: PHQ-9 fell from 21 to 17. Supportive sessions with the practice mental health nurse (POH-GGZ), five contacts so far. No side effects reported.',
          },
        },
        {
          type: 'para',
          id: 'risk',
          text: {
            nl: 'Bij het laatste contact met de POH-GGZ (29-09-2026) gaf mevrouw passieve doodsgedachten aan, zonder plannen of voorbereidingen; zie bijgevoegd journaal. Zij weet de praktijk, de huisartsenpost en 113 te vinden.',
            en: 'At the last contact with the POH-GGZ (29-09-2026) she reported passive death wishes, with no plans or preparations; see the attached journal entry. She knows how to reach the practice, the out-of-hours GP service and 113 (suicide prevention line).',
          },
        },
        { type: 'heading', text: { nl: 'Voorgeschiedenis', en: 'Past history' } },
        {
          type: 'list',
          items: [
            { text: { nl: '2019: depressieve episode (P76); begeleiding POH-GGZ, hersteld.', en: '2019: depressive episode (ICPC P76); supported by POH-GGZ, recovered.' } },
            { text: { nl: '2021: depressieve episode (P76); citalopram 2021–2022, gestopt wegens emotionele vervlakking; aansluitend CGT bij GZ-psycholoog (2023–2024).', en: '2021: depressive episode (P76); citalopram 2021 to 2022, stopped because of emotional blunting; followed by CBT with a GZ-psychologist (2023 to 2024).' } },
          ],
        },
        { type: 'heading', text: { nl: 'Medicatie', en: 'Medication' } },
        {
          type: 'list',
          items: [
            { text: { nl: 'Sertraline 50 mg, 1 x per dag 2 tabletten', en: 'Sertraline 50 mg, 2 tablets once daily' } },
            { text: { nl: 'Melatonine 2 mg, zo nodig 1 tablet voor de nacht', en: 'Melatonin 2 mg, 1 tablet at night as needed' } },
          ],
        },
        { type: 'heading', text: { nl: 'Allergieën en intoleranties', en: 'Allergies and intolerances' } },
        {
          type: 'para',
          text: {
            nl: 'Geen bekende allergieën. Intolerantie: citalopram (emotionele vervlakking).',
            en: 'No known allergies. Intolerance: citalopram (emotional blunting).',
          },
        },
        { type: 'heading', text: { nl: 'Bijlagen', en: 'Attachments' } },
        {
          type: 'para',
          text: {
            nl: 'Journaalregels huisarts en POH-GGZ; medicatieoverzicht; laboratoriumuitslagen van 04-08-2026.',
            en: 'GP and POH-GGZ journal entries; medication overview; laboratory results of 04-08-2026.',
          },
        },
      ],
    },

    {
      id: 'p1-gp',
      patient: P,
      layout: 'journal',
      date: '2026-08-04',
      type: { nl: 'Journaal huisarts (uittreksel)', en: 'GP journal (extract)' },
      short: { nl: 'Journaal huisarts', en: 'GP consult' },
      org: 'kastanjeplein',
      unit: { nl: 'Huisartsenpraktijk', en: 'General practice' },
      author: { name: 'L. Smeets', role: { nl: 'huisarts', en: 'general practitioner' } },
      blocks: [
        {
          type: 'soep',
          date: '2026-08-04',
          author: 'L. Smeets, huisarts',
          rows: [
            {
              code: 'S',
              text: {
                nl: 'Sinds ongeveer juli weer somber, weinig plezier in dingen, slaapt slecht (wordt om 4 à 5 uur wakker), concentratie op het werk matig. Herkent dit van eerdere episodes. Wil graag weer medicatie, maar geen citalopram.',
                en: 'Low mood again since about July, little enjoyment, sleeping badly (wakes at 4 to 5 am), concentration at work poor. Recognizes this from earlier episodes. Would like medication again, but not citalopram.',
              },
            },
            {
              id: 'o-0804',
              code: 'O',
              text: {
                nl: 'Rustige vrouw, vlak affect, spreekt zacht. PHQ-9: 21. Geen psychotische kenmerken. Doodsgedachten: ontkent.',
                en: 'Calm woman, flat affect, speaks softly. PHQ-9: 21. No psychotic features. Thoughts of death: denies.',
              },
            },
            { code: 'E', text: { nl: 'Recidief depressieve episode, matig-ernstig (P76).', en: 'Recurrent depressive episode, moderate to severe (P76).' } },
            {
              id: 'p-0804',
              code: 'P',
              text: {
                nl: 'Uitleg gegeven. Start sertraline 50 mg 1 dd 1; bij goede verdraagzaamheid na 2 weken 100 mg. Melatonine 2 mg z.n. Lab: Hb, TSH, vitamine D. Vervolg bij POH-GGZ; controle huisarts over 6 weken.',
                en: 'Explanation given. Start sertraline 50 mg once daily; if well tolerated, 100 mg after 2 weeks. Melatonin 2 mg as needed. Bloods: Hb, TSH, vitamin D. Follow-up with POH-GGZ; GP review in 6 weeks.',
              },
            },
          ],
        },
        {
          type: 'soep',
          date: '2026-08-18',
          author: 'L. Smeets, huisarts (telefonisch consult)',
          rows: [
            { code: 'S', text: { nl: 'Verdraagt sertraline goed, eerste dagen wat misselijk, nu over.', en: 'Tolerating sertraline well; some nausea in the first days, now gone.' } },
            {
              id: 'p-0818',
              code: 'P',
              text: { nl: 'Sertraline ophogen naar 100 mg 1 dd (2 tabletten). Lab besproken: vitamine D laag, suppletie geadviseerd.', en: 'Increase sertraline to 100 mg once daily (2 tablets). Bloods discussed: vitamin D low, supplementation advised.' },
            },
          ],
        },
      ],
    },

    {
      id: 'p1-poh',
      patient: P,
      layout: 'journal',
      date: '2026-09-29',
      type: { nl: 'Journaal POH-GGZ', en: 'POH-GGZ journal entry' },
      short: { nl: 'Journaal POH-GGZ', en: 'POH-GGZ note' },
      org: 'kastanjeplein',
      unit: { nl: 'POH-GGZ', en: 'Practice mental health nurse' },
      author: { name: 'M. de Wit', role: { nl: 'praktijkondersteuner GGZ', en: 'practice mental health nurse (POH-GGZ)' } },
      blocks: [
        {
          type: 'soep',
          date: '2026-09-29',
          author: 'M. de Wit, POH-GGZ',
          rows: [
            {
              code: 'S',
              text: {
                nl: 'Vijfde contact. Stemming iets beter dan in augustus, maar nog steeds weinig energie en moeite met concentreren. Werkt 50%. Slaapt beter sinds melatonine.',
                en: 'Fifth contact. Mood slightly better than in August, but still low energy and difficulty concentrating. Working 50%. Sleeping better since melatonin.',
              },
            },
            { id: 'scores', code: 'O', text: { nl: 'PHQ-9: 17 (04-08: 21). GAD-7: 12.', en: 'PHQ-9: 17 (04-08: 21). GAD-7: 12.' } },
            {
              id: 'risk',
              code: 'O',
              text: {
                nl: 'Suïcidaliteit uitgevraagd: geeft aan soms te denken dat het niet erg zou zijn als ze niet meer wakker werd. Geen plannen, geen voorbereidingen, geen eerdere pogingen. Woont samen met partner, die weet hoe zij zich voelt.',
                en: 'Suicidality assessed: says she sometimes thinks it would not matter if she did not wake up. No plans, no preparations, no previous attempts. Lives with her partner, who knows how she is feeling.',
              },
            },
            { code: 'E', text: { nl: 'Depressieve episode met partiële respons op sertraline. Passieve doodsgedachten.', en: 'Depressive episode with partial response to sertraline. Passive death wishes.' } },
            {
              code: 'P',
              text: {
                nl: 'Overlegd met huisarts (L. Smeets): verwijzing psychiatrie voor medicatieadvies. Afgesproken: bij toename van doodsgedachten direct contact met praktijk of huisartsenpost; 113 besproken. Volgend contact over 2 weken.',
                en: 'Discussed with GP (L. Smeets): referral to psychiatry for medication advice. Agreed: if thoughts of death increase, contact the practice or out-of-hours GP service at once; 113 discussed. Next contact in 2 weeks.',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'p1-meds',
      patient: P,
      layout: 'meds',
      date: '2026-10-06',
      type: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      short: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      org: 'kastanjeplein',
      unit: { nl: 'Huisartsinformatiesysteem', en: 'GP information system' },
      author: { name: 'L. Smeets', role: { nl: 'huisarts', en: 'general practitioner' } },
      blocks: [
        {
          type: 'table',
          columns: [
            { nl: 'Geneesmiddel', en: 'Medicine' },
            { nl: 'Gebruik', en: 'Directions' },
            { nl: 'Start', en: 'Start' },
            { nl: 'Stop', en: 'Stop' },
            { nl: 'Reden stop', en: 'Reason stopped' },
          ],
          rows: [
            { id: 'sert', cells: ['Sertraline 50 mg tablet', { nl: '1 x per dag 2 tabletten', en: '2 tablets once daily' }, '04-08-2026', '', ''] },
            { id: 'mela', cells: ['Melatonine 2 mg tablet', { nl: 'zo nodig 1 tablet voor de nacht', en: '1 tablet at night as needed' }, '04-08-2026', '', ''] },
            {
              id: 'cital',
              cells: ['Citalopram 20 mg tablet', { nl: '1 x per dag 1 tablet', en: '1 tablet once daily' }, '12-11-2021', '05-09-2022', { nl: 'Emotionele vervlakking', en: 'Emotional blunting' }],
            },
          ],
        },
        { type: 'heading', text: { nl: 'Contra-indicaties en intoleranties', en: 'Contraindications and intolerances' } },
        {
          type: 'list',
          items: [{ id: 'ici', text: { nl: 'Citalopram: intolerantie, emotionele vervlakking (geregistreerd 05-09-2022).', en: 'Citalopram: intolerance, emotional blunting (recorded 05-09-2022).' } }],
        },
      ],
    },

    {
      id: 'p1-psy',
      patient: P,
      layout: 'letter',
      date: '2024-03-12',
      type: { nl: 'Afsluitbrief behandeling', en: 'End-of-treatment letter' },
      short: { nl: 'Afsluitbrief psycholoog', en: 'Psychologist discharge letter' },
      org: 'steiger',
      unit: { nl: 'Basis-GGZ', en: 'Primary mental health care' },
      author: { name: 'drs. A. Bos', role: { nl: 'GZ-psycholoog', en: 'healthcare psychologist (GZ)' } },
      to: { name: 'L. Smeets, huisarts', org: 'Huisartsenpraktijk Kastanjeplein', unit: { nl: '', en: '' } },
      blocks: [
        {
          type: 'para',
          text: {
            nl: 'Hierbij bericht ik u over de afsluiting van de behandeling van bovengenoemde patiënte, die op 2 oktober 2023 door u werd verwezen.',
            en: 'I am writing to inform you that treatment has ended for the patient named above, whom you referred on 2 October 2023.',
          },
        },
        { type: 'heading', text: { nl: 'Klachten bij aanmelding', en: 'Presenting complaints' } },
        {
          type: 'para',
          text: {
            nl: 'Aanhoudende somberheid en piekeren na een depressieve episode in 2021, waarvoor citalopram (gestopt in 2022 wegens bijwerkingen). PHQ-9 bij intake: 14.',
            en: 'Persistent low mood and rumination after a depressive episode in 2021, treated with citalopram (stopped in 2022 because of side effects). PHQ-9 at intake: 14.',
          },
        },
        { type: 'heading', text: { nl: 'Classificatie (DSM-5)', en: 'Classification (DSM-5)' } },
        { type: 'para', text: { nl: 'Depressieve stoornis, recidiverend, lichte ernst (F33.0).', en: 'Major depressive disorder, recurrent, mild (F33.0).' } },
        { type: 'heading', text: { nl: 'Behandeling', en: 'Treatment' } },
        {
          type: 'para',
          id: 'tx',
          text: {
            nl: 'Cognitieve gedragstherapie, 12 sessies (oktober 2023 tot en met maart 2024), gericht op activatie, cognitieve herstructurering en terugvalpreventie.',
            en: 'Cognitive behavioral therapy, 12 sessions (October 2023 to March 2024), focused on activation, cognitive restructuring and relapse prevention.',
          },
        },
        { type: 'heading', text: { nl: 'Resultaat', en: 'Outcome' } },
        {
          type: 'para',
          id: 'result',
          text: {
            nl: 'De klachten zijn in remissie. PHQ-9 bij afsluiting: 4. Samen met patiënte is een terugvalpreventieplan opgesteld, dat zij zelf beheert.',
            en: 'Symptoms are in remission. PHQ-9 at discharge: 4. A relapse prevention plan was drawn up together with the patient, who keeps it herself.',
          },
        },
        {
          type: 'para',
          id: 'risk',
          text: { nl: 'Gedurende de behandeling op geen enkel moment sprake van suïcidale gedachten.', en: 'No suicidal ideation at any point during treatment.' },
        },
        { type: 'heading', text: { nl: 'Advies', en: 'Advice' } },
        {
          type: 'para',
          text: {
            nl: 'Bij terugkeer van klachten laagdrempelig contact opnemen; dan eventueel boostersessies CGT.',
            en: 'If symptoms return, low threshold for contact; booster CBT sessions can then be considered.',
          },
        },
      ],
    },

    {
      id: 'p1-lab',
      patient: P,
      layout: 'lab',
      date: '2026-08-04',
      type: { nl: 'Laboratoriumuitslagen', en: 'Laboratory results' },
      short: { nl: 'Labuitslagen', en: 'Lab results' },
      org: 'diagnostiek',
      unit: { nl: 'Klinisch chemisch laboratorium', en: 'Clinical chemistry laboratory' },
      author: { name: 'L. Smeets', role: { nl: 'huisarts (aanvrager)', en: 'general practitioner (requester)' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Afname', en: 'Sample taken' }, value: { nl: '04-08-2026 08:42', en: '04-08-2026 08:42' } },
            { label: { nl: 'Materiaal', en: 'Material' }, value: { nl: 'Veneus bloed', en: 'Venous blood' } },
          ],
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
            { id: 'hb', cells: ['Hemoglobine', '8,1', 'mmol/L', '7,5 – 10,0'] },
            { id: 'leuko', cells: ['Leukocyten', '6,4', '10^9/L', '4,0 – 10,0'] },
            { id: 'glu', cells: ['Glucose (niet nuchter)', '5,4', 'mmol/L', '< 7,8'] },
            { id: 'creat', cells: ['Kreatinine', '66', 'µmol/L', '49 – 90'] },
            { id: 'tsh', cells: ['TSH', '1,8', 'mU/L', '0,4 – 4,0'] },
            { id: 'vitd', cells: ['25-OH-vitamine D', '38', 'nmol/L', '> 50'], flag: 'L' },
          ],
        },
      ],
    },
  ],
};
