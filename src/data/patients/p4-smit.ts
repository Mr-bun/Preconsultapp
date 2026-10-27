import type { PatientBundle } from '../types';

const P = 'p4';

export const smit: PatientBundle = {
  patient: {
    id: P,
    name: 'Willem Smit',
    surname: 'Smit',
    initials: 'W.',
    sex: 'M',
    dob: '1948-04-19',
    mrn: 'SYN-03790',
    address: 'Beukenhof 2, 3571 ZZ Utrecht',
    specialty: { nl: 'Ouderenpsychiatrie', en: 'Old-age psychiatry' },
    visitType: { nl: 'Consult', en: 'Consult' },
    time: '11:30',
    durationMin: 60,
    allergies: { nl: 'Haloperidol (ernstige rigiditeit, 2025)', en: 'Haloperidol (severe rigidity, 2025)' },
    reason: {
      t: {
        nl: 'Beoordeling van nieuwe visuele hallucinaties en wisselende alertheid. De neuroloog vraagt onderscheid te maken tussen psychose bij de ziekte van Parkinson, dementie en delier.',
        en: 'Assessment of new visual hallucinations and day-to-day changes in alertness. The neurologist asks to differentiate psychosis in Parkinson disease, dementia and delirium.',
      },
      refs: [{ doc: 'p4-neuro', at: 'question' }],
    },
    measures: [
      { label: 'MoCA', value: '21/30 (was 25)', date: '2026-10-07', ref: { doc: 'p4-neuro', at: 'exam' } },
      { label: { nl: 'RR liggend / staand', en: 'BP lying / standing' }, value: '138/80 · 112/70', date: '2026-10-07', ref: { doc: 'p4-neuro', at: 'exam' } },
      { label: { nl: 'Natrium', en: 'Sodium' }, value: '133 mmol/L', date: '2026-10-07', ref: { doc: 'p4-lab', at: 'na' } },
    ],
    conditions: [
      { nl: 'Ziekte van Parkinson (2017)', en: 'Parkinson disease (2017)' },
      { nl: 'Overactieve blaas', en: 'Overactive bladder' },
      { nl: 'Orthostatische hypotensie', en: 'Orthostatic hypotension' },
      { nl: 'Woont met echtgenote', en: 'Lives with wife' },
    ],
    summary: [
      {
        t: { nl: 'Ziekte van Parkinson sinds 2017; gebruikt levodopa/carbidopa en rasagiline.', en: 'Parkinson disease since 2017, on levodopa/carbidopa and rasagiline.' },
        refs: [
          { doc: 'p4-neuro', at: 'hx' },
          { doc: 'p4-meds', at: 'levo' },
        ],
      },
      {
        t: {
          nl: 'Zijn echtgenote meldt sinds ongeveer zes weken visuele hallucinaties (mensen en dieren in de kamer) en een alertheid die per dag wisselt.',
          en: 'His wife reports about six weeks of visual hallucinations (people and animals in the room) and alertness that varies from day to day.',
        },
        refs: [{ doc: 'p4-neuro', at: 'hx' }],
      },
      { t: { nl: 'MoCA 21/30, gedaald van 25/30 in oktober 2025.', en: 'MoCA 21/30, down from 25/30 in October 2025.' }, refs: [{ doc: 'p4-neuro', at: 'exam' }] },
      {
        t: {
          nl: 'Delier tijdens een opname wegens pneumonie in november 2025; ernstige rigiditeit na haloperidol, geregistreerd als allergie.',
          en: 'Delirium during a pneumonia admission in November 2025; severe rigidity after haloperidol, recorded as an allergy.',
        },
        refs: [
          { doc: 'p4-dis2025', at: 'course' },
          { doc: 'p4-dis2025', at: 'halo' },
        ],
      },
      { t: { nl: 'Oxybutynine 5 mg tweemaal daags gestart in juni 2026.', en: 'Oxybutynin 5 mg twice daily started in June 2026.' }, refs: [{ doc: 'p4-gp', at: 'p' }] },
      {
        t: { nl: 'Natrium 133 mmol/L en eGFR 58, beide net onder de referentiewaarde.', en: 'Sodium 133 mmol/L and eGFR 58, both just below the reference range.' },
        refs: [
          { doc: 'p4-lab', at: 'na' },
          { doc: 'p4-lab', at: 'egfr' },
        ],
      },
    ],
    risk: [{ who: { nl: 'Echtgenote, via neuroloog', en: 'Wife, via neurologist' }, kind: { nl: 'Heteroanamnese', en: 'Collateral' }, ref: { doc: 'p4-neuro', at: 'risk' } }],
    flags: [
      {
        t: {
          nl: 'Oxybutynine is gestart op 2 jun 2026; zijn echtgenote dateert de hallucinaties vanaf ongeveer eind augustus 2026.',
          en: 'Oxybutynin was started on 2 Jun 2026; his wife dates the hallucinations from about late August 2026.',
        },
        refs: [
          { doc: 'p4-gp', at: 'p' },
          { doc: 'p4-neuro', at: 'hx' },
        ],
      },
      {
        t: {
          nl: 'Eerder gestopt wegens bijwerkingen: amantadine (verwardheid, 2021) en ropinirol (impulscontroleklachten, 2024).',
          en: 'Earlier medicines stopped for side effects: amantadine (confusion, 2021) and ropinirole (impulse control symptoms, 2024).',
        },
        refs: [
          { doc: 'p4-meds', at: 'aman' },
          { doc: 'p4-meds', at: 'ropi' },
        ],
      },
    ],
    visits: [
      {
        date: '2026-10-07',
        who: { nl: 'Neurologie', en: 'Neurology' },
        reason: { nl: 'Hallucinaties en wisselende alertheid', en: 'Hallucinations and fluctuating alertness' },
        action: { nl: 'Levodopa ongewijzigd; MoCA 21; verwijzing ouderenpsychiatrie', en: 'Levodopa unchanged; MoCA 21; referral to old-age psychiatry' },
        ref: { doc: 'p4-neuro' },
      },
      {
        date: '2026-06-02',
        who: { nl: 'Huisarts', en: 'GP' },
        reason: { nl: 'Aandrang en vaak plassen', en: 'Urinary urgency and frequency' },
        action: { nl: 'Urinestick negatief; oxybutynine 5 mg 2 dd gestart', en: 'Urine dipstick negative; oxybutynin 5 mg BID started' },
        ref: { doc: 'p4-gp' },
      },
      {
        date: '2025-11-11',
        who: { nl: 'Interne geneeskunde, opname', en: 'Internal medicine, inpatient' },
        reason: { nl: 'Pneumonie; delier op dag 2', en: 'Pneumonia; delirium on day 2' },
        action: { nl: 'Haloperidol gegeven; ernstige rigiditeit; geregistreerd als allergie', en: 'Haloperidol given; severe rigidity; recorded as allergy' },
        ref: { doc: 'p4-dis2025' },
      },
    ],
    meds: {
      current: [
        { name: { nl: 'Levodopa/carbidopa', en: 'Levodopa/carbidopa' }, dose: { nl: '100/25 mg 3 dd', en: '100/25 mg TID' } },
        { name: { nl: 'Rasagiline', en: 'Rasagiline' }, dose: { nl: '1 mg 1 dd', en: '1 mg OD' } },
        { name: { nl: 'Oxybutynine', en: 'Oxybutynin' }, dose: { nl: '5 mg 2 dd', en: '5 mg BID' } },
        { name: { nl: 'Macrogol', en: 'Macrogol' }, dose: { nl: '1 sachet 1 dd', en: '1 sachet OD' } },
      ],
      past: [
        { name: { nl: 'Ropinirol 4 mg', en: 'Ropinirole 4 mg' }, when: { nl: '2018 tot 2024', en: '2018 to 2024' }, why: { nl: 'impulscontroleklachten', en: 'impulse control symptoms' } },
        { name: { nl: 'Amantadine 100 mg', en: 'Amantadine 100 mg' }, when: { nl: '2021', en: '2021' }, why: { nl: 'verwardheid', en: 'confusion' } },
      ],
      ref: { doc: 'p4-meds' },
    },
    tests: [
      { name: 'MoCA', value: '21/30', range: '≥ 26', date: '2026-10-07', status: 'low', ref: { doc: 'p4-neuro', at: 'exam' } },
      { name: { nl: 'Natrium', en: 'Sodium' }, value: '133 mmol/L', range: '135 to 145', date: '2026-10-07', status: 'low', ref: { doc: 'p4-lab', at: 'na' } },
      { name: 'eGFR (CKD-EPI)', value: '58 mL/min/1.73m²', range: '> 60', date: '2026-10-07', status: 'low', ref: { doc: 'p4-lab', at: 'egfr' } },
      { name: 'CRP', value: '4 mg/L', range: '< 10', date: '2026-10-07', status: 'normal', ref: { doc: 'p4-lab', at: 'crp' } },
      { name: { nl: 'Vitamine B12', en: 'Vitamin B12' }, value: '310 pmol/L', range: '145 to 600', date: '2026-10-07', status: 'normal', ref: { doc: 'p4-lab', at: 'b12' } },
    ],
    gaps: [
      { nl: 'Geen urineonderzoek sinds het begin van de hallucinaties', en: 'No urinalysis since the hallucinations began' },
      { nl: 'Geen beeldvorming van de hersenen sinds 2017', en: 'No brain imaging since 2017' },
      { nl: 'Slaapgedrag (bijvoorbeeld dromen naspelen) niet vastgelegd', en: 'Sleep behavior (for example acting out dreams) not documented' },
    ],
    qa: [
      {
        q: { nl: 'Tijdlijn van medicatiewijzigingen en begin van de klachten', en: 'Timeline of medication changes and symptom onset' },
        a: {
          nl: '2 jun 2026: oxybutynine gestart.\nOngeveer eind aug 2026: begin hallucinaties (volgens echtgenote).\n7 okt 2026: controle neurologie, levodopa ongewijzigd.\nEerder: amantadine gestopt 2021 (verwardheid); ropinirol gestopt 2024 (impulscontroleklachten).',
          en: '2 Jun 2026: oxybutynin started.\nAbout late Aug 2026: hallucinations begin (wife’s account).\n7 Oct 2026: neurology review, levodopa unchanged.\nEarlier: amantadine stopped 2021 (confusion); ropinirole stopped 2024 (impulse control symptoms).',
        },
        refs: [
          { doc: 'p4-gp', at: 'p' },
          { doc: 'p4-neuro', at: 'hx' },
          { doc: 'p4-meds', at: 'aman' },
          { doc: 'p4-meds', at: 'ropi' },
        ],
      },
      {
        q: { nl: 'Wat gebeurde er met haloperidol?', en: 'What happened with haloperidol?' },
        a: {
          nl: 'Op dag 2 van een opname wegens pneumonie tweemaal haloperidol 1 mg gekregen voor een delier. Binnen 24 uur ernstige rigiditeit en verminderde mobiliteit; haloperidol gestopt, herstel in vier dagen. Geregistreerd als allergie.',
          en: 'Given haloperidol 1 mg twice for delirium on day 2 of a pneumonia admission. Severe rigidity and reduced mobility within 24 hours; haloperidol stopped and he recovered over four days. Recorded as an allergy.',
        },
        refs: [
          { doc: 'p4-dis2025', at: 'course' },
          { doc: 'p4-dis2025', at: 'halo' },
        ],
      },
      {
        q: { nl: 'Welk antipsychoticum is voor hem het veiligst?', en: 'Which antipsychotic is safest for him?' },
        out: true,
        a: {
          nl: 'PreConsult vat het dossier samen en adviseert niet over voorschrijven.\n\nRelevante gegevens: ernstige rigiditeit na haloperidol in november 2025, geregistreerd als allergie. Er is geen ander antipsychoticum vastgelegd.',
          en: 'PreConsult summarizes the record and does not advise on prescribing.\n\nRelevant entries: severe rigidity after haloperidol in November 2025, recorded as an allergy. No other antipsychotic is recorded.',
        },
        refs: [{ doc: 'p4-dis2025', at: 'halo' }, { doc: 'p4-meds' }],
      },
    ],
  },

  docs: [
    {
      id: 'p4-neuro',
      patient: P,
      layout: 'letter',
      date: '2026-10-07',
      type: { nl: 'Intercollegiale verwijzing', en: 'Internal referral' },
      short: { nl: 'Verwijzing neuroloog', en: 'Neurology referral' },
      org: 'wilgenhoek',
      unit: { nl: 'Neurologie, polikliniek', en: 'Neurology, outpatient clinic' },
      author: { name: 'dr. P. Kuipers', role: { nl: 'neuroloog', en: 'neurologist' } },
      to: { name: 'Ouderenpsychiatrie', org: 'Ziekenhuis Wilgenhoek', unit: { nl: 'Psychiatrie, polikliniek', en: 'Psychiatry, outpatient clinic' } },
      blocks: [
        { type: 'heading', text: { nl: 'Vraagstelling', en: 'Question' } },
        {
          type: 'para',
          id: 'question',
          text: {
            nl: 'Graag uw beoordeling van nieuwe visuele hallucinaties en wisselende alertheid bij een patiënt met de ziekte van Parkinson. Differentiaaldiagnose: psychose bij de ziekte van Parkinson, beginnende dementie, delier. Graag ook uw advies over de behandeling.',
            en: 'Please assess new visual hallucinations and fluctuating alertness in a patient with Parkinson disease. Differential diagnosis: psychosis in Parkinson disease, emerging dementia, delirium. We would also value your advice on treatment.',
          },
        },
        { type: 'heading', text: { nl: 'Anamnese en heteroanamnese', en: 'History and collateral history' } },
        {
          type: 'para',
          id: 'hx',
          text: {
            nl: 'Bekend met de ziekte van Parkinson sinds 2017. Echtgenote vertelt dat hij sinds ongeveer zes weken mensen en dieren in de kamer ziet. Overdag wisselt zijn alertheid sterk: de ene dag helder, de andere dag suf en verward.',
            en: 'Known with Parkinson disease since 2017. His wife reports that for about six weeks he has been seeing people and animals in the room. His alertness varies a lot during the day: clear one day, drowsy and confused the next.',
          },
        },
        {
          type: 'para',
          id: 'risk',
          text: {
            nl: "Echtgenote: 'Hij stond 's nachts op om de mensen de slaapkamer uit te jagen en viel bijna van de trap.'",
            en: "Wife: 'He got up in the night to chase the people out of the bedroom and nearly fell down the stairs.'",
          },
        },
        { type: 'heading', text: { nl: 'Onderzoek', en: 'Examination' } },
        {
          type: 'para',
          id: 'exam',
          text: {
            nl: 'Hypomimie, rigiditeit links meer dan rechts, bradykinesie, geen rusttremor. RR liggend 138/80, staand na 3 minuten 112/70 mmHg. MoCA 21/30 (oktober 2025: 25/30).',
            en: 'Hypomimia, rigidity left more than right, bradykinesia, no resting tremor. BP lying 138/80, standing after 3 minutes 112/70 mmHg. MoCA 21/30 (October 2025: 25/30).',
          },
        },
        { type: 'heading', text: { nl: 'Aanvullend onderzoek', en: 'Investigations' } },
        {
          type: 'para',
          id: 'labsum',
          text: {
            nl: 'Laboratorium 07-10-2026: natrium 133 mmol/L, eGFR 58, CRP 4 mg/L, vitamine B12 310 pmol/L. Zie bijlage.',
            en: 'Bloods 07-10-2026: sodium 133 mmol/L, eGFR 58, CRP 4 mg/L, vitamin B12 310 pmol/L. See attachment.',
          },
        },
        { type: 'heading', text: { nl: 'Medicatie', en: 'Medication' } },
        {
          type: 'list',
          items: [
            { text: { nl: 'Levodopa/carbidopa 100/25 mg, 3 x per dag 1 tablet', en: 'Levodopa/carbidopa 100/25 mg, 1 tablet three times daily' } },
            { text: { nl: 'Rasagiline 1 mg, 1 x per dag 1 tablet', en: 'Rasagiline 1 mg, 1 tablet once daily' } },
            { text: { nl: 'Oxybutynine 5 mg, 2 x per dag 1 tablet (gestart door huisarts, juni 2026)', en: 'Oxybutynin 5 mg, 1 tablet twice daily (started by GP, June 2026)' } },
            { text: { nl: 'Macrogol/elektrolyten, 1 x per dag 1 sachet', en: 'Macrogol/electrolytes, 1 sachet once daily' } },
          ],
        },
        { type: 'heading', text: { nl: 'Allergieën', en: 'Allergies' } },
        { type: 'para', text: { nl: 'Haloperidol: ernstige rigiditeit (november 2025).', en: 'Haloperidol: severe rigidity (November 2025).' } },
        { type: 'heading', text: { nl: 'Beleid', en: 'Plan' } },
        {
          type: 'para',
          text: {
            nl: 'Levodopa vooralsnog ongewijzigd. Patiënt en echtgenote zijn op de hoogte van deze verwijzing.',
            en: 'Levodopa unchanged for now. The patient and his wife know about this referral.',
          },
        },
      ],
    },

    {
      id: 'p4-lab',
      patient: P,
      layout: 'lab',
      date: '2026-10-07',
      type: { nl: 'Laboratoriumuitslagen', en: 'Laboratory results' },
      short: { nl: 'Labuitslagen', en: 'Lab results' },
      org: 'wilgenhoek',
      unit: { nl: 'Klinisch Chemisch Laboratorium', en: 'Clinical Chemistry Laboratory' },
      author: { name: 'dr. P. Kuipers', role: { nl: 'neuroloog (aanvrager)', en: 'neurologist (requester)' } },
      blocks: [
        {
          type: 'fields',
          rows: [{ label: { nl: 'Afname', en: 'Sample taken' }, value: { nl: '07-10-2026 10:05', en: '07-10-2026 10:05' } }],
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
            { id: 'hb', cells: ['Hemoglobine', '8,6', 'mmol/L', '8,5 – 11,0'] },
            { id: 'leuko', cells: ['Leukocyten', '7,2', '10^9/L', '4,0 – 10,0'] },
            { id: 'crp', cells: ['CRP', '4', 'mg/L', '< 10'] },
            { id: 'na', cells: ['Natrium', '133', 'mmol/L', '135 – 145'], flag: 'L' },
            { id: 'k', cells: ['Kalium', '4,2', 'mmol/L', '3,5 – 5,0'] },
            { id: 'creat', cells: ['Kreatinine', '110', 'µmol/L', '64 – 104'], flag: 'H' },
            { id: 'egfr', cells: ['eGFR (CKD-EPI)', '58', 'mL/min/1,73m²', '> 60'], flag: 'L' },
            { id: 'glu', cells: ['Glucose (niet nuchter)', '6,1', 'mmol/L', '< 7,8'] },
            { id: 'b12', cells: ['Vitamine B12', '310', 'pmol/L', '145 – 600'] },
            { id: 'tsh', cells: ['TSH', '1,6', 'mU/L', '0,4 – 4,0'] },
          ],
        },
      ],
    },

    {
      id: 'p4-dis2025',
      patient: P,
      layout: 'letter',
      date: '2025-11-22',
      type: { nl: 'Ontslagbrief', en: 'Discharge letter' },
      short: { nl: 'Ontslagbrief interne', en: 'Discharge letter' },
      org: 'wilgenhoek',
      unit: { nl: 'Interne geneeskunde', en: 'Internal medicine' },
      author: { name: 'dr. M. Haddou', role: { nl: 'internist (namens deze: J. Visser, arts-assistent)', en: 'internist (on behalf: J. Visser, resident)' } },
      to: { name: 'H. Verbeek, huisarts', org: 'Huisartsenpraktijk Lindeboom', unit: { nl: '', en: '' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Opname', en: 'Admitted' }, value: { nl: '11-11-2025', en: '11-11-2025' } },
            { label: { nl: 'Ontslag', en: 'Discharged' }, value: { nl: '22-11-2025', en: '22-11-2025' } },
          ],
        },
        { type: 'heading', text: { nl: 'Reden van opname', en: 'Reason for admission' } },
        { type: 'para', text: { nl: 'Community-acquired pneumonie van de rechter onderkwab.', en: 'Community-acquired pneumonia of the right lower lobe.' } },
        { type: 'heading', text: { nl: 'Beloop', en: 'Course' } },
        {
          type: 'para',
          id: 'course',
          text: {
            nl: "Behandeld met amoxicilline intraveneus, na drie dagen oraal. Op dag 2 's nachts onrustig en verward, passend bij een delier. Hiervoor tweemaal haloperidol 1 mg gegeven.",
            en: 'Treated with intravenous amoxicillin, switched to oral after three days. On day 2 restless and confused at night, consistent with delirium. Given haloperidol 1 mg twice for this.',
          },
        },
        {
          type: 'para',
          id: 'halo',
          text: {
            nl: 'Binnen 24 uur ernstige rigiditeit en verminderde mobiliteit, passend bij overgevoeligheid voor antipsychotica bij de ziekte van Parkinson. Haloperidol gestaakt; herstel in vier dagen. Haloperidol is als allergie geregistreerd.',
            en: 'Within 24 hours severe rigidity and reduced mobility, consistent with antipsychotic sensitivity in Parkinson disease. Haloperidol stopped; recovered over four days. Haloperidol is recorded as an allergy.',
          },
        },
        { type: 'heading', text: { nl: 'Ontslagdiagnosen', en: 'Discharge diagnoses' } },
        {
          type: 'list',
          items: [
            { text: { nl: 'Pneumonie rechter onderkwab, hersteld', en: 'Right lower lobe pneumonia, resolved' } },
            { text: { nl: 'Delier bij infectie, hersteld', en: 'Delirium due to infection, resolved' } },
            { text: { nl: 'Overgevoeligheid voor haloperidol', en: 'Haloperidol sensitivity' } },
          ],
        },
        { type: 'heading', text: { nl: 'Medicatie bij ontslag', en: 'Medication at discharge' } },
        { type: 'para', text: { nl: 'Thuismedicatie ongewijzigd. Amoxicilline gestopt.', en: 'Home medication unchanged. Amoxicillin stopped.' } },
      ],
    },

    {
      id: 'p4-gp',
      patient: P,
      layout: 'journal',
      date: '2026-06-02',
      type: { nl: 'Journaal huisarts (uittreksel)', en: 'GP journal (extract)' },
      short: { nl: 'Journaal huisarts', en: 'GP consult' },
      org: 'lindeboom',
      unit: { nl: 'Huisartsenpraktijk', en: 'General practice' },
      author: { name: 'H. Verbeek', role: { nl: 'huisarts', en: 'general practitioner' } },
      blocks: [
        {
          type: 'soep',
          date: '2026-06-02',
          author: 'H. Verbeek, huisarts',
          rows: [
            {
              code: 'S',
              text: {
                nl: "Sinds enkele maanden aandrang en vaak plassen, ook 's nachts drie keer. Geen pijn bij plassen, geen koorts.",
                en: 'For a few months urgency and frequent urination, including three times at night. No pain on urination, no fever.',
              },
            },
            { id: 'o', code: 'O', text: { nl: 'Urinestick: nitriet negatief, leukocyten negatief.', en: 'Urine dipstick: nitrite negative, leukocytes negative.' } },
            { code: 'E', text: { nl: 'Overactieve blaas (U13).', en: 'Overactive bladder (ICPC U13).' } },
            {
              id: 'p',
              code: 'P',
              text: { nl: 'Start oxybutynine 5 mg 2 dd 1. Evaluatie over 6 weken.', en: 'Start oxybutynin 5 mg twice daily. Review in 6 weeks.' },
            },
          ],
        },
      ],
    },

    {
      id: 'p4-meds',
      patient: P,
      layout: 'meds',
      date: '2026-10-07',
      type: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      short: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      org: 'wilgenhoek',
      unit: { nl: 'Neurologie (geverifieerd met openbare apotheek)', en: 'Neurology (verified with community pharmacy)' },
      author: { name: 'dr. P. Kuipers', role: { nl: 'neuroloog', en: 'neurologist' } },
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
            { id: 'levo', cells: ['Levodopa/carbidopa 100/25 mg', { nl: '3 x per dag 1 tablet', en: '1 tablet three times daily' }, '2017', '', ''] },
            { id: 'rasa', cells: ['Rasagiline 1 mg', { nl: '1 x per dag 1 tablet', en: '1 tablet once daily' }, '2019', '', ''] },
            { id: 'oxy', cells: ['Oxybutynine 5 mg', { nl: '2 x per dag 1 tablet', en: '1 tablet twice daily' }, '02-06-2026', '', ''] },
            { id: 'macro', cells: ['Macrogol/elektrolyten', { nl: '1 x per dag 1 sachet', en: '1 sachet once daily' }, '2020', '', ''] },
            {
              id: 'ropi',
              cells: ['Ropinirol 4 mg (retard)', { nl: '1 x per dag 1 tablet', en: '1 tablet once daily' }, '2018', '2024', { nl: 'Impulscontrolestoornis (koopdrang)', en: 'Impulse control disorder (compulsive buying)' }],
            },
            { id: 'aman', cells: ['Amantadine 100 mg', { nl: '2 x per dag 1 capsule', en: '1 capsule twice daily' }, '2021', '2021', { nl: 'Verwardheid', en: 'Confusion' }] },
          ],
        },
        { type: 'heading', text: { nl: 'Allergieën', en: 'Allergies' } },
        { type: 'list', items: [{ id: 'halo', text: { nl: 'Haloperidol: ernstige rigiditeit (november 2025).', en: 'Haloperidol: severe rigidity (November 2025).' } }] },
      ],
    },
  ],
};
