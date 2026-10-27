import type { PatientBundle } from '../types';

const P = 'p2';

export const hendriks: PatientBundle = {
  patient: {
    id: P,
    name: 'Joost Hendriks',
    surname: 'Hendriks',
    initials: 'J.',
    sex: 'M',
    dob: '1992-05-23',
    mrn: 'SYN-03348',
    address: 'Vlierweg 31, 3554 ZZ Utrecht',
    specialty: { nl: 'Psychiatrie', en: 'Psychiatry' },
    visit: { kind: 'medication', mode: 'phone', reason: { nl: 'Lithiumcontrole, vervroegd', en: 'Lithium monitoring, brought forward' } },
    time: '09:50',
    durationMin: 30,
    allergies: { nl: 'Lamotrigine (huiduitslag, 2017)', en: 'Lamotrigine (rash, 2017)' },
    reason: {
      t: {
        nl: 'Halfjaarlijkse lithiumcontrole, vervroegd nadat zijn partner belde over verminderde slaap. Routinelab is op 9 okt afgenomen.',
        en: 'Six-monthly lithium review, brought forward after his partner phoned about reduced sleep. Routine bloods were taken on 9 Oct.',
      },
      refs: [
        { doc: 'p2-phone', at: 'plan' },
        { doc: 'p2-phone', at: 'report' },
      ],
    },
    measures: [
      { label: 'Lithium', value: '0.9 mmol/L', date: '2026-10-09', ref: { doc: 'p2-lab', at: 'li' } },
      { label: 'eGFR', value: '82 (98 in 2024)', date: '2026-10-09', ref: { doc: 'p2-lab', at: 'egfr' } },
      { label: 'TSH', value: '5.1 mU/L', date: '2026-10-09', ref: { doc: 'p2-lab', at: 'tsh' } },
    ],
    conditions: [
      { nl: 'Bipolaire I-stoornis (2016)', en: 'Bipolar I disorder (2016)' },
      { nl: 'Opname wegens manie, sep 2018', en: 'Admitted for mania, Sep 2018' },
      { nl: 'Signaleringsplan, apr 2026', en: 'Relapse prevention plan, Apr 2026' },
    ],
    summary: [
      {
        t: {
          nl: 'Bipolaire I-stoornis, vastgesteld in 2016; één opname voor een manische episode met psychotische kenmerken (5 weken, september tot oktober 2018).',
          en: 'Bipolar I disorder diagnosed in 2016; one admission for a manic episode with psychotic features (5 weeks, September to October 2018).',
        },
        refs: [
          { doc: 'p2-dis2018', at: 'dx' },
          { doc: 'p2-dis2018', at: 'course' },
        ],
      },
      {
        t: {
          nl: 'Sinds februari 2019 lithium, nadat valproïnezuur werd gestopt wegens gewichtstoename en onvoldoende effect; sindsdien geen opnames.',
          en: 'On lithium since February 2019, after valproate was stopped for weight gain and insufficient effect; no admissions since.',
        },
        refs: [
          { doc: 'p2-letter2019', at: 'switch' },
          { doc: 'p2-poli', at: 'e' },
        ],
      },
      { t: { nl: 'Lithiumspiegel 0,9 mmol/L, binnen de streefwaarde van 0,6 tot 1,0.', en: 'Lithium level 0.9 mmol/L, within the target range of 0.6 to 1.0.' }, refs: [{ doc: 'p2-lab', at: 'li' }] },
      { t: { nl: 'eGFR 82, gedaald van 98 in april 2024.', en: 'eGFR 82, down from 98 in April 2024.' }, refs: [{ doc: 'p2-lab', at: 'egfr' }] },
      { t: { nl: 'TSH 5,1 mU/L, voor het eerst boven de referentiewaarde.', en: 'TSH 5.1 mU/L, above the reference range for the first time.' }, refs: [{ doc: 'p2-lab', at: 'tsh' }] },
      {
        t: { nl: 'Zijn partner belde op 15 okt over ongeveer twee weken korter slapen.', en: 'His partner phoned on 15 Oct to report about two weeks of shorter sleep.' },
        refs: [{ doc: 'p2-phone', at: 'report' }],
      },
    ],
    risk: [
      { who: { nl: 'Partner, telefonisch', en: 'Partner, by phone' }, kind: { nl: 'Heteroanamnese', en: 'Collateral' }, ref: { doc: 'p2-phone', at: 'report' } },
      {
        who: { nl: 'Psychiater, met patiënt en partner', en: 'Psychiatrist, with patient and partner' },
        kind: { nl: 'Signaleringsplan', en: 'Relapse prevention plan' },
        ref: { doc: 'p2-signal', at: 'early' },
      },
      { who: { nl: 'Arts-assistent psychiatrie', en: 'Psychiatry resident' }, kind: { nl: 'Opnameverslag, 2018', en: 'Admission note, 2018' }, ref: { doc: 'p2-adm2018', at: 'risk' } },
    ],
    flags: [
      {
        t: {
          nl: 'De door zijn partner gemelde verminderde slaap is het eerste vroege signaal in zijn signaleringsplan.',
          en: 'The reduced sleep reported by his partner is the first early warning sign listed in his relapse prevention plan.',
        },
        refs: [
          { doc: 'p2-phone', at: 'report' },
          { doc: 'p2-signal', at: 'early' },
        ],
      },
      {
        t: {
          nl: 'TSH voor het eerst boven de referentiewaarde; vorige uitslag 2,9 mU/L in april 2026.',
          en: 'TSH above range for the first time; previous result 2.9 mU/L in April 2026.',
        },
        refs: [{ doc: 'p2-lab', at: 'tsh' }],
      },
      {
        t: {
          nl: 'eGFR is bij elke controle sinds 2024 gedaald; kreatinine nu net boven de referentiewaarde.',
          en: 'eGFR has fallen at each check since 2024; creatinine now just above range.',
        },
        refs: [
          { doc: 'p2-lab', at: 'egfr' },
          { doc: 'p2-lab', at: 'creat' },
        ],
      },
    ],
    visits: [
      {
        date: '2026-10-15',
        who: { nl: 'Telefonisch (partner)', en: 'Phone (partner)' },
        reason: { nl: 'Zorgen over verminderde slaap', en: 'Concern about reduced sleep' },
        action: { nl: 'Contact vastgelegd; controle vervroegd', en: 'Contact logged; review brought forward' },
        ref: { doc: 'p2-phone' },
      },
      {
        date: '2026-04-14',
        who: { nl: 'Psychiatrie', en: 'Psychiatry' },
        reason: { nl: 'Halfjaarlijkse lithiumcontrole', en: 'Six-monthly lithium review' },
        action: { nl: 'Stemming stabiel; lithium 0,8 mmol/L; signaleringsplan geactualiseerd', en: 'Mood stable; lithium 0.8 mmol/L; relapse prevention plan updated' },
        ref: { doc: 'p2-poli' },
      },
      {
        date: '2019-02-14',
        who: { nl: 'Psychiatrie', en: 'Psychiatry' },
        reason: { nl: 'Medicatie-evaluatie na opname', en: 'Medication review after admission' },
        action: { nl: 'Valproïnezuur en olanzapine gestopt; lithium gestart', en: 'Valproate and olanzapine stopped; lithium started' },
        ref: { doc: 'p2-letter2019' },
      },
      {
        date: '2018-09-03',
        who: { nl: 'Klinische opname', en: 'Inpatient' },
        reason: { nl: 'Manische episode met psychotische kenmerken', en: 'Manic episode with psychotic features' },
        action: { nl: '5 weken opgenomen; ontslag 8 okt 2018', en: 'Admitted 5 weeks; discharged 8 Oct 2018' },
        ref: { doc: 'p2-adm2018' },
      },
    ],
    meds: {
      current: [
        { name: { nl: 'Lithiumcarbonaat', en: 'Lithium carbonate' }, dose: { nl: '800 mg voor de nacht', en: '800 mg nocte' } },
        { name: { nl: 'Quetiapine', en: 'Quetiapine' }, dose: { nl: '25 tot 100 mg z.n. voor de nacht', en: '25 to 100 mg nocte PRN' } },
      ],
      past: [
        { name: { nl: 'Valproïnezuur 1000 mg', en: 'Valproate 1000 mg' }, when: { nl: '2016 tot 2019', en: '2016 to 2019' }, why: { nl: 'gewichtstoename, onvoldoende effect', en: 'weight gain, insufficient effect' } },
        { name: { nl: 'Olanzapine 10 mg', en: 'Olanzapine 10 mg' }, when: { nl: '2018 tot 2019', en: '2018 to 2019' }, why: { nl: 'gewichtstoename (12 kg in totaal)', en: 'weight gain (12 kg in total)' } },
      ],
      ref: { doc: 'p2-meds' },
    },
    tests: [
      { name: { nl: 'Lithium (12-uurs)', en: 'Lithium (12 h)' }, value: '0.9 mmol/L', range: '0.6 to 1.0', date: '2026-10-09', status: 'normal', ref: { doc: 'p2-lab', at: 'li' } },
      { name: 'eGFR (CKD-EPI)', value: '82 mL/min/1.73m²', range: '> 90', date: '2026-10-09', status: 'low', ref: { doc: 'p2-lab', at: 'egfr' } },
      { name: { nl: 'Kreatinine', en: 'Creatinine' }, value: '105 µmol/L', range: '64 to 104', date: '2026-10-09', status: 'high', ref: { doc: 'p2-lab', at: 'creat' } },
      { name: 'TSH', value: '5.1 mU/L', range: '0.4 to 4.0', date: '2026-10-09', status: 'high', ref: { doc: 'p2-lab', at: 'tsh' } },
      { name: 'Calcium', value: '2.41 mmol/L', range: '2.20 to 2.60', date: '2026-10-09', status: 'normal', ref: { doc: 'p2-lab', at: 'ca' } },
      { name: { nl: 'Natrium', en: 'Sodium' }, value: '139 mmol/L', range: '135 to 145', date: '2026-10-09', status: 'normal', ref: { doc: 'p2-lab', at: 'na' } },
    ],
    gaps: [
      { nl: 'Vrij T4 niet bepaald', en: 'Free T4 not measured' },
      { nl: 'Geen urineonderzoek of albumine in de urine', en: 'No urinalysis or urine albumin on file' },
      { nl: 'Huidig alcoholgebruik niet vastgelegd', en: 'Current alcohol use not documented' },
    ],
    qa: [
      {
        q: { nl: 'Laat het verloop van eGFR en lithium zien', en: 'Show the eGFR and lithium trend' },
        a: {
          nl: 'eGFR: 98 (apr 2024), 91 (apr 2025), 88 (apr 2026), 82 (okt 2026).\nLithium: 0,7, 0,8, 0,8 en 0,9 mmol/L bij dezelfde controles.',
          en: 'eGFR: 98 (Apr 2024), 91 (Apr 2025), 88 (Apr 2026), 82 (Oct 2026).\nLithium: 0.7, 0.8, 0.8 and 0.9 mmol/L at the same checks.',
        },
        refs: [
          { doc: 'p2-lab', at: 'egfr' },
          { doc: 'p2-lab', at: 'li' },
        ],
      },
      {
        q: { nl: 'Wat staat er in zijn signaleringsplan?', en: 'What does his relapse prevention plan say?' },
        a: {
          nl: 'Vroege signalen: minder dan 6 uur slaap, sneller praten, nieuwe zakelijke plannen.\nAfgesproken actie: hij of zijn partner neemt contact op met de polikliniek; quetiapine zo nodig voor de nacht.',
          en: 'Early warning signs: sleeping less than 6 hours, talking faster, new business plans.\nAgreed action: he or his partner contacts the outpatient clinic; quetiapine as needed for sleep.',
        },
        refs: [{ doc: 'p2-signal', at: 'early' }],
      },
      {
        q: { nl: 'Is ibuprofen veilig met zijn lithium?', en: 'Is ibuprofen safe with his lithium?' },
        out: true,
        a: {
          nl: "PreConsult controleert geen interacties en adviseert niet over voorschrijven. Gebruik hiervoor de medicatiebewaking van het ziekenhuis.\n\nRelevante gegevens: geen NSAID's op de huidige medicatielijst; eGFR 82 op 9 okt 2026.",
          en: "PreConsult does not check interactions or advise on prescribing. Use the hospital's medication check for this.\n\nRelevant entries: no NSAIDs on the current medication list; eGFR 82 on 9 Oct 2026.",
        },
        refs: [{ doc: 'p2-meds' }, { doc: 'p2-lab', at: 'egfr' }],
      },
    ],
  },

  docs: [
    {
      id: 'p2-adm2018',
      patient: P,
      layout: 'note',
      date: '2018-09-03',
      type: { nl: 'Opnameverslag', en: 'Admission note' },
      short: { nl: 'Opnameverslag', en: 'Admission note' },
      org: 'wilgenhoek',
      unit: { nl: 'Psychiatrie, kliniek', en: 'Psychiatry, inpatient unit' },
      author: { name: 'S. Yilmaz', role: { nl: 'arts-assistent psychiatrie (supervisor: dr. E. van Dam)', en: 'psychiatry resident (supervisor: Dr E. van Dam)' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Opnamedatum', en: 'Admission date' }, value: { nl: '03-09-2018, 23:15', en: '03-09-2018, 23:15' } },
            { label: { nl: 'Juridische status', en: 'Legal status' }, value: { nl: 'Vrijwillig', en: 'Voluntary' } },
            { label: { nl: 'Verwezen door', en: 'Referred by' }, value: { nl: 'Spoedeisende Hulp, na beoordeling crisisdienst', en: 'Emergency department, after crisis team assessment' } },
          ],
        },
        { type: 'heading', text: { nl: 'Aanleiding', en: 'Presenting situation' } },
        {
          type: 'para',
          id: 'reason',
          text: {
            nl: 'Patiënt werd door zijn partner naar de SEH gebracht in verband met een week van ontremd gedrag, nauwelijks slapen en grote uitgaven.',
            en: 'The patient was brought to the emergency department by his partner after a week of disinhibited behavior, hardly sleeping and large spending.',
          },
        },
        { type: 'heading', text: { nl: 'Psychiatrisch onderzoek', en: 'Mental state examination' } },
        {
          type: 'para',
          id: 'mse',
          text: {
            nl: 'Helder bewustzijn, volledig georiënteerd. Verhoogde spraakdruk, gedachtevlucht. Grootheidswanen: meent dat hij binnenkort een internationaal bedrijf gaat leiden. Heeft in één week ongeveer 8.000 euro uitgegeven en meerdere nachten niet geslapen. Geen hallucinaties. Ziektebesef beperkt.',
            en: 'Alert and fully oriented. Pressured speech, flight of ideas. Grandiose delusions: believes he will soon lead an international company. Spent about 8,000 euros in one week and has not slept for several nights. No hallucinations. Limited insight.',
          },
        },
        { type: 'heading', text: { nl: 'Risicotaxatie', en: 'Risk assessment' } },
        {
          type: 'para',
          id: 'risk',
          text: {
            nl: 'Risico op financiële en sociale schade door ontremming. Geen suïcidale uitingen, geen agressie. Stemt in met vrijwillige opname.',
            en: 'Risk of financial and social harm from disinhibition. No suicidal statements, no aggression. Agrees to voluntary admission.',
          },
        },
        { type: 'heading', text: { nl: 'Conclusie', en: 'Conclusion' } },
        {
          type: 'para',
          text: { nl: 'Manische episode met psychotische kenmerken bij bekende bipolaire I-stoornis.', en: 'Manic episode with psychotic features in known bipolar I disorder.' },
        },
        { type: 'heading', text: { nl: 'Beleid', en: 'Plan' } },
        {
          type: 'para',
          text: {
            nl: 'Opname open afdeling. Start olanzapine 10 mg a.n. Valproïnezuur continueren; spiegel bepalen. Prikkelreductie. Overleg met supervisor morgen.',
            en: 'Admit to the open ward. Start olanzapine 10 mg at night. Continue valproate; check level. Reduce stimulation. Review with supervisor tomorrow.',
          },
        },
      ],
    },

    {
      id: 'p2-dis2018',
      patient: P,
      layout: 'letter',
      date: '2018-10-08',
      type: { nl: 'Ontslagbrief', en: 'Discharge letter' },
      short: { nl: 'Ontslagbrief', en: 'Discharge letter' },
      org: 'wilgenhoek',
      unit: { nl: 'Psychiatrie, kliniek', en: 'Psychiatry, inpatient unit' },
      author: { name: 'dr. E. van Dam', role: { nl: 'psychiater', en: 'psychiatrist' } },
      to: { name: 'Huisarts van patiënt', org: '', unit: { nl: '', en: '' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Opname', en: 'Admitted' }, value: { nl: '03-09-2018', en: '03-09-2018' } },
            { label: { nl: 'Ontslag', en: 'Discharged' }, value: { nl: '08-10-2018', en: '08-10-2018' } },
            { label: { nl: 'Status', en: 'Status' }, value: { nl: 'Vrijwillig', en: 'Voluntary' } },
          ],
        },
        { type: 'heading', text: { nl: 'Diagnose', en: 'Diagnosis' } },
        {
          type: 'para',
          id: 'dx',
          text: {
            nl: 'Bipolaire I-stoornis, huidige episode manisch, ernstig, met psychotische kenmerken (F31.2). Diagnose gesteld in 2016.',
            en: 'Bipolar I disorder, current episode manic, severe, with psychotic features (F31.2). Diagnosed in 2016.',
          },
        },
        { type: 'heading', text: { nl: 'Beloop', en: 'Course' } },
        {
          type: 'para',
          id: 'course',
          text: {
            nl: 'Na start van olanzapine en optimalisatie van valproïnezuur geleidelijk herstel van slaap en stemming. Na vijf weken klinische opname in euthyme toestand ontslagen. Gewichtstoename van 6 kg tijdens de opname.',
            en: 'After starting olanzapine and optimizing valproate, sleep and mood gradually recovered. Discharged euthymic after five weeks of inpatient care. Weight gain of 6 kg during the admission.',
          },
        },
        { type: 'heading', text: { nl: 'Medicatie bij ontslag', en: 'Medication at discharge' } },
        {
          type: 'list',
          items: [
            { text: { nl: 'Valproïnezuur 500 mg, 2 x per dag 1 tablet', en: 'Valproate 500 mg, 1 tablet twice daily' } },
            { text: { nl: 'Olanzapine 10 mg, 1 x per dag 1 tablet voor de nacht', en: 'Olanzapine 10 mg, 1 tablet at night' } },
          ],
        },
        { type: 'heading', text: { nl: 'Beleid', en: 'Plan' } },
        {
          type: 'para',
          text: {
            nl: 'Poliklinische follow-up bij ondergetekende. Gezien de gewichtstoename en de partiële werkzaamheid van valproïnezuur overwegen wij een overstap naar lithium.',
            en: 'Outpatient follow-up with the undersigned. Given the weight gain and partial effect of valproate, we are considering a switch to lithium.',
          },
        },
      ],
    },

    {
      id: 'p2-letter2019',
      patient: P,
      layout: 'letter',
      date: '2019-02-14',
      type: { nl: 'Polikliniekbrief', en: 'Outpatient clinic letter' },
      short: { nl: 'Polikliniekbrief', en: 'Psychiatry letter' },
      org: 'wilgenhoek',
      unit: { nl: 'Psychiatrie, polikliniek', en: 'Psychiatry, outpatient clinic' },
      author: { name: 'dr. E. van Dam', role: { nl: 'psychiater', en: 'psychiatrist' } },
      to: { name: 'Huisarts van patiënt', org: '', unit: { nl: '', en: '' } },
      blocks: [
        {
          type: 'para',
          text: {
            nl: 'Ik zag uw patiënt vandaag op de polikliniek ter evaluatie van de medicatie na zijn opname in 2018.',
            en: 'I saw your patient in clinic today to review his medication after his admission in 2018.',
          },
        },
        {
          type: 'para',
          id: 'switch',
          text: {
            nl: 'Gezien de onvoldoende werkzaamheid en de forse gewichtstoename (in totaal 12 kg) is in overleg met patiënt valproïnezuur afgebouwd en lithiumcarbonaat gestart. Olanzapine is gestopt.',
            en: 'Because of insufficient effect and marked weight gain (12 kg in total), and in agreement with the patient, valproate has been tapered and lithium carbonate started. Olanzapine has been stopped.',
          },
        },
        {
          type: 'para',
          id: 'level',
          text: {
            nl: 'Streefspiegel lithium 0,6–1,0 mmol/L. Controle van spiegel, nierfunctie, TSH en calcium iedere zes maanden.',
            en: 'Target lithium level 0.6 to 1.0 mmol/L. Level, renal function, TSH and calcium to be checked every six months.',
          },
        },
        {
          type: 'para',
          id: 'allergy',
          text: {
            nl: 'Bij eerdere behandeling met lamotrigine (2017) trad huiduitslag op; dit middel is als allergie geregistreerd.',
            en: 'Earlier treatment with lamotrigine (2017) caused a rash; it is recorded as an allergy.',
          },
        },
        { type: 'para', text: { nl: 'Patiënt is euthym. Volgende controle over drie maanden.', en: 'The patient is euthymic. Next review in three months.' } },
      ],
    },

    {
      id: 'p2-poli',
      patient: P,
      layout: 'journal',
      date: '2026-04-14',
      type: { nl: 'Polikliniekverslag', en: 'Outpatient clinic note' },
      short: { nl: 'Polikliniekverslag', en: 'Psychiatry review' },
      org: 'wilgenhoek',
      unit: { nl: 'Psychiatrie, polikliniek', en: 'Psychiatry, outpatient clinic' },
      author: { name: 'dr. E. van Dam', role: { nl: 'psychiater', en: 'psychiatrist' } },
      blocks: [
        {
          type: 'soep',
          date: '2026-04-14',
          author: 'dr. E. van Dam, psychiater',
          rows: [
            {
              code: 'S',
              text: {
                nl: 'Halfjaarlijkse controle, partner aanwezig. Gaat goed, werkt fulltime. Slaapt 7 à 8 uur. Geen klachten van tremor, dorst of veel plassen.',
                en: 'Six-monthly review, partner present. Doing well, working full time. Sleeps 7 to 8 hours. No tremor, thirst or frequent urination.',
              },
            },
            {
              id: 'o',
              code: 'O',
              text: {
                nl: 'Euthym, adequaat contact. Lithiumspiegel 0,8 mmol/L (12-uurs). eGFR 88, TSH 2,9.',
                en: 'Euthymic, good rapport. Lithium level 0.8 mmol/L (12-hour). eGFR 88, TSH 2.9.',
              },
            },
            { id: 'e', code: 'E', text: { nl: 'Bipolaire I-stoornis, stabiel op lithium. Geen opnames sinds 2018.', en: 'Bipolar I disorder, stable on lithium. No admissions since 2018.' } },
            {
              id: 'p',
              code: 'P',
              text: {
                nl: 'Signaleringsplan samen met patiënt en partner geactualiseerd (zie apart document). Lithium ongewijzigd. Controle over zes maanden met lab vooraf.',
                en: 'Relapse prevention plan updated with the patient and his partner (see separate document). Lithium unchanged. Review in six months with bloods beforehand.',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'p2-signal',
      patient: P,
      layout: 'plan',
      date: '2026-04-14',
      type: { nl: 'Signaleringsplan', en: 'Relapse prevention plan' },
      short: { nl: 'Signaleringsplan', en: 'Relapse prevention plan' },
      org: 'wilgenhoek',
      unit: { nl: 'Psychiatrie, polikliniek', en: 'Psychiatry, outpatient clinic' },
      author: { name: 'dr. E. van Dam', role: { nl: 'psychiater, opgesteld met patiënt en partner', en: 'psychiatrist, drawn up with patient and partner' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Betrokken naaste', en: 'Involved relative' }, value: { nl: 'Partner, L. de Graaf', en: 'Partner, L. de Graaf' } },
            { id: 'consent', label: { nl: 'Toestemming contact met naaste', en: 'Consent to contact relative' }, value: { nl: 'Ja, gegeven op 14-04-2026', en: 'Yes, given on 14-04-2026' } },
          ],
        },
        {
          type: 'signal',
          phases: [
            {
              id: 'stable',
              tone: 'green',
              title: { nl: 'Fase 1: stabiel', en: 'Phase 1: stable' },
              signs: { nl: 'Slaapt 7 à 8 uur. Werkt fulltime, sport twee keer per week.', en: 'Sleeps 7 to 8 hours. Works full time, exercises twice a week.' },
              actions: { nl: 'Lithium dagelijks innemen. Halfjaarlijkse controle.', en: 'Take lithium daily. Six-monthly review.' },
            },
            {
              id: 'early',
              tone: 'orange',
              title: { nl: 'Fase 2: vroege signalen', en: 'Phase 2: early warning signs' },
              signs: { nl: 'Minder dan 6 uur slaap, sneller praten, nieuwe zakelijke plannen.', en: 'Less than 6 hours of sleep, talking faster, new business plans.' },
              actions: {
                nl: 'Patiënt of partner neemt contact op met de polikliniek. Quetiapine 25–100 mg zo nodig voor de nacht.',
                en: 'Patient or partner contacts the outpatient clinic. Quetiapine 25 to 100 mg at night as needed.',
              },
            },
            {
              id: 'crisis',
              tone: 'red',
              title: { nl: 'Fase 3: crisis', en: 'Phase 3: crisis' },
              signs: { nl: 'Nauwelijks slapen, grote aankopen, prikkelbaar, niet meer bereikbaar voor gesprek.', en: 'Hardly sleeping, large purchases, irritable, no longer open to conversation.' },
              actions: {
                nl: 'Partner belt de polikliniek, buiten kantoortijden de huisartsenpost voor de crisisdienst. Niet autorijden.',
                en: 'Partner calls the clinic, or out of hours the GP service to reach the crisis team. No driving.',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'p2-phone',
      patient: P,
      layout: 'note',
      date: '2026-10-15',
      type: { nl: 'Telefoonnotitie', en: 'Telephone note' },
      short: { nl: 'Telefoonnotitie', en: 'Phone note' },
      org: 'wilgenhoek',
      unit: { nl: 'Psychiatrie, polikliniek', en: 'Psychiatry, outpatient clinic' },
      author: { name: 'R. Hoekstra', role: { nl: 'verpleegkundig specialist GGZ', en: 'mental health nurse specialist' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Gesprek met', en: 'Call with' }, value: { nl: 'Partner van patiënt (L. de Graaf)', en: "Patient's partner (L. de Graaf)" } },
            { label: { nl: 'Toestemming patiënt', en: 'Patient consent' }, value: { nl: 'Ja, vastgelegd in signaleringsplan van 14-04-2026', en: 'Yes, recorded in relapse prevention plan of 14-04-2026' } },
          ],
        },
        {
          type: 'para',
          id: 'report',
          text: {
            nl: "Partner belt: hij slaapt sinds ongeveer twee weken vier à vijf uur per nacht en lijkt opgejaagd. Geen grote uitgaven voor zover zij weet. 'Zo begon het in 2018 ook.'",
            en: "Partner calls: for about two weeks he has been sleeping four to five hours a night and seems driven. No large spending as far as she knows. 'This is how it started in 2018 too.'",
          },
        },
        {
          type: 'para',
          id: 'plan',
          text: {
            nl: 'Overlegd met dr. Van Dam: controle vervroegd van 10-11 naar 03-11-2026. Lab van 09-10 (routine, voorafgaand aan controle) is beschikbaar. Partner gewezen op signaleringsplan fase 2; bij verdere toename direct bellen.',
            en: 'Discussed with Dr Van Dam: review brought forward from 10-11 to 03-11-2026. Bloods from 09-10 (routine, ahead of the review) are available. Partner referred to phase 2 of the relapse prevention plan; to call at once if things escalate.',
          },
        },
      ],
    },

    {
      id: 'p2-lab',
      patient: P,
      layout: 'lab',
      date: '2026-10-09',
      type: { nl: 'Cumulatief uitslagenoverzicht', en: 'Cumulative results overview' },
      short: { nl: 'Labuitslagen cumulatief', en: 'Lab results 2024 to 2026' },
      org: 'wilgenhoek',
      unit: { nl: 'Klinisch Chemisch Laboratorium', en: 'Clinical Chemistry Laboratory' },
      author: { name: 'dr. E. van Dam', role: { nl: 'psychiater (aanvrager)', en: 'psychiatrist (requester)' } },
      blocks: [
        {
          type: 'table',
          columns: [
            { nl: 'Bepaling', en: 'Test' },
            { nl: 'Eenheid', en: 'Unit' },
            { nl: 'Referentie', en: 'Reference' },
            { nl: '16-04-2024', en: '16-04-2024' },
            { nl: '15-04-2025', en: '15-04-2025' },
            { nl: '14-04-2026', en: '14-04-2026' },
            { nl: '09-10-2026', en: '09-10-2026' },
          ],
          rows: [
            { id: 'li', cells: ['Lithium (12-uurs)', 'mmol/L', '0,6 – 1,0', '0,7', '0,8', '0,8', '0,9'] },
            { id: 'creat', cells: ['Kreatinine', 'µmol/L', '64 – 104', '88', '95', '97', '105 H'] },
            { id: 'egfr', cells: ['eGFR (CKD-EPI)', 'mL/min/1,73m²', '> 90', '98', '91 L', '88 L', '82 L'] },
            { id: 'tsh', cells: ['TSH', 'mU/L', '0,4 – 4,0', '2,1', '2,4', '2,9', '5,1 H'] },
            { id: 'ca', cells: ['Calcium', 'mmol/L', '2,20 – 2,60', '2,38', '2,40', '2,39', '2,41'] },
            { id: 'na', cells: ['Natrium', 'mmol/L', '135 – 145', '140', '139', '141', '139'] },
          ],
        },
        {
          type: 'para',
          text: {
            nl: 'Lithiumspiegel 12 uur na laatste inname. eGFR berekend volgens CKD-EPI 2021.',
            en: 'Lithium level 12 hours after last dose. eGFR calculated with CKD-EPI 2021.',
          },
        },
      ],
    },

    {
      id: 'p2-meds',
      patient: P,
      layout: 'meds',
      date: '2026-10-09',
      type: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      short: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      org: 'wilgenhoek',
      unit: { nl: 'Psychiatrie, polikliniek (geverifieerd met openbare apotheek)', en: 'Psychiatry, outpatient clinic (verified with community pharmacy)' },
      author: { name: 'dr. E. van Dam', role: { nl: 'psychiater', en: 'psychiatrist' } },
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
            { id: 'li', cells: ['Lithiumcarbonaat 400 mg tablet', { nl: '1 x per dag 2 tabletten voor de nacht', en: '2 tablets once daily at night' }, '14-02-2019', '', ''] },
            { id: 'que', cells: ['Quetiapine 25 mg tablet', { nl: 'zo nodig 1–4 tabletten voor de nacht', en: '1 to 4 tablets at night as needed' }, '14-02-2019', '', ''] },
            {
              id: 'valp',
              cells: ['Valproïnezuur 500 mg tablet', { nl: '2 x per dag 1 tablet', en: '1 tablet twice daily' }, '2016', '14-02-2019', { nl: 'Gewichtstoename, onvoldoende effect', en: 'Weight gain, insufficient effect' }],
            },
            {
              id: 'olz',
              cells: ['Olanzapine 10 mg tablet', { nl: '1 x per dag 1 tablet voor de nacht', en: '1 tablet at night' }, '04-09-2018', '14-02-2019', { nl: 'Gewichtstoename (12 kg)', en: 'Weight gain (12 kg)' }],
            },
          ],
        },
        { type: 'heading', text: { nl: 'Allergieën', en: 'Allergies' } },
        { type: 'list', items: [{ id: 'lam', text: { nl: 'Lamotrigine: huiduitslag (2017).', en: 'Lamotrigine: rash (2017).' } }] },
      ],
    },
  ],
};
