import type { PatientBundle } from '../types';

const P = 'p5';

export const mulder: PatientBundle = {
  patient: {
    id: P,
    name: 'Kevin Mulder',
    surname: 'Mulder',
    initials: 'K.',
    sex: 'M',
    dob: '2001-12-03',
    mrn: 'SYN-04012',
    address: 'Kanaalweg 66, 3526 ZZ Utrecht',
    specialty: { nl: 'Vroege psychose', en: 'Early psychosis' },
    visitType: { nl: 'Medicatie-evaluatie', en: 'Medication review' },
    time: '13:30',
    durationMin: 45,
    allergies: { nl: 'Geen bekend', en: 'None known' },
    reason: {
      t: {
        nl: 'Geplande driemaandelijkse medicatie-evaluatie met het FACT-team Vroege Psychose.',
        en: 'Scheduled three-monthly medication review with the early intervention psychosis team.',
      },
      refs: [{ doc: 'p5-review', at: 'p' }],
    },
    measures: [
      { label: { nl: 'Gewicht', en: 'Weight' }, value: '78 kg (+3)', date: '2026-07-22', ref: { doc: 'p5-review', at: 'se' } },
      { label: 'QTc', value: '418 ms', date: '2026-07-15', ref: { doc: 'p5-lab', at: 'qtc' } },
      { label: { nl: 'Urine drugsscreening', en: 'Urine drug screen' }, value: { nl: 'THC positief', en: 'THC positive' }, date: '2026-07-15', ref: { doc: 'p5-lab', at: 'uds' } },
    ],
    conditions: [
      { nl: 'Eerste psychose (mrt 2026)', en: 'First episode of psychosis (Mar 2026)' },
      { nl: 'Stoornis in cannabisgebruik', en: 'Cannabis use disorder' },
      { nl: 'Student, studie onderbroken', en: 'Student, on study leave' },
    ],
    summary: [
      {
        t: {
          nl: 'Eerste psychotische episode in maart 2026; drie weken opgenomen (18 mrt tot 9 apr).',
          en: 'First episode of psychosis in March 2026; admitted for three weeks (18 Mar to 9 Apr).',
        },
        refs: [
          { doc: 'p5-dis', at: 'dx' },
          { doc: 'p5-dis', at: 'course' },
        ],
      },
      {
        t: {
          nl: 'Aripiprazol sinds maart 2026; op 22 jul 2026 verhoogd van 10 naar 15 mg wegens resterende achterdocht.',
          en: 'Aripiprazole since March 2026; increased from 10 to 15 mg on 22 Jul 2026 for remaining suspiciousness.',
        },
        refs: [
          { doc: 'p5-dis', at: 'meds' },
          { doc: 'p5-review', at: 'p' },
        ],
      },
      {
        t: {
          nl: 'Hallucinaties en wanen in remissie bij de evaluatie in juli; nog enige achterdocht.',
          en: 'Hallucinations and delusions in remission at the July review; some residual suspiciousness.',
        },
        refs: [{ doc: 'p5-review', at: 'e' }],
      },
      {
        t: { nl: 'Meldt dagelijks cannabisgebruik; urine drugsscreening positief op THC.', en: 'Reports daily cannabis use; urine drug screen positive for THC.' },
        refs: [
          { doc: 'p5-review', at: 's' },
          { doc: 'p5-lab', at: 'uds' },
        ],
      },
      {
        t: {
          nl: 'Gewicht 3 kg toegenomen sinds maart; glucose, cholesterol, prolactine en QTc binnen de normaalwaarden.',
          en: 'Weight up 3 kg since March; glucose, cholesterol, prolactin and QTc within range.',
        },
        refs: [
          { doc: 'p5-review', at: 'se' },
          { doc: 'p5-lab', at: 'glu' },
          { doc: 'p5-lab', at: 'qtc' },
        ],
      },
      {
        t: { nl: 'Student met studieonderbreking; wil in februari 2027 weer beginnen.', en: 'Student on study leave; plans to return in February 2027.' },
        refs: [{ doc: 'p5-review', at: 's' }],
      },
    ],
    risk: [
      {
        who: { nl: 'Psychiater, FACT-team Vroege Psychose', en: 'Psychiatrist, early psychosis team' },
        kind: { nl: 'Evaluatie', en: 'Review' },
        ref: { doc: 'p5-review', at: 'risk' },
      },
      { who: { nl: 'Crisisdienst', en: 'Crisis service' }, kind: { nl: 'Crisisbeoordeling', en: 'Crisis assessment' }, ref: { doc: 'p5-crisis', at: 'risk' } },
    ],
    flags: [
      {
        t: {
          nl: 'Dosis op 22 jul 2026 verhoogd naar 15 mg; sindsdien is geen controle op bijwerkingen vastgelegd.',
          en: 'Dose increased to 15 mg on 22 Jul 2026; no side-effect check has been recorded since the increase.',
        },
        refs: [{ doc: 'p5-review', at: 'p' }],
      },
      {
        t: {
          nl: 'Laatste vastgelegde controle op bijwerkingen, bij 10 mg: geen bewegingsstoornissen, geen onrust.',
          en: 'Last recorded side-effect check, at 10 mg: no movement side effects, no restlessness.',
        },
        refs: [{ doc: 'p5-review', at: 'se' }],
      },
      {
        t: {
          nl: 'In juli is verwijzing naar verslavingszorg aangeboden; hij wilde erover nadenken.',
          en: 'Referral to addiction care offered in July; he wanted time to think it over.',
        },
        refs: [{ doc: 'p5-review', at: 'p' }],
      },
    ],
    visits: [
      {
        date: '2026-07-22',
        who: { nl: 'FACT-team Vroege Psychose', en: 'Early psychosis team' },
        reason: { nl: 'Driemaandelijkse evaluatie', en: 'Three-monthly review' },
        action: { nl: 'In remissie; aripiprazol 10 naar 15 mg wegens resterende achterdocht', en: 'In remission; aripiprazole 10 to 15 mg for remaining suspiciousness' },
        ref: { doc: 'p5-review' },
      },
      {
        date: '2026-03-18',
        who: { nl: 'Klinische opname', en: 'Inpatient' },
        reason: { nl: 'Eerste psychotische episode', en: 'First episode of psychosis' },
        action: { nl: '3 weken opgenomen; aripiprazol gestart; overgedragen aan FACT-team', en: 'Admitted 3 weeks; aripiprazole started; transferred to early psychosis team' },
        ref: { doc: 'p5-dis' },
      },
      {
        date: '2026-03-18',
        who: { nl: 'Crisisdienst', en: 'Crisis service' },
        reason: { nl: 'Paranoïde gedachten, niet slapen', en: 'Paranoid beliefs, not sleeping' },
        action: { nl: 'Beoordeling thuis; dezelfde avond vrijwillige opname', en: 'Home assessment; voluntary admission the same evening' },
        ref: { doc: 'p5-crisis' },
      },
    ],
    meds: {
      current: [{ name: { nl: 'Aripiprazol', en: 'Aripiprazole' }, dose: { nl: '15 mg 1 dd', en: '15 mg OD' } }],
      past: [{ name: { nl: 'Lorazepam 1 mg', en: 'Lorazepam 1 mg' }, when: { nl: 'mrt tot apr 2026', en: 'Mar to Apr 2026' }, why: { nl: 'korte kuur tijdens opname', en: 'short course during admission' } }],
      ref: { doc: 'p5-meds' },
    },
    tests: [
      { name: { nl: 'Glucose (nuchter)', en: 'Fasting glucose' }, value: '5.1 mmol/L', range: '< 6.1', date: '2026-07-15', status: 'normal', ref: { doc: 'p5-lab', at: 'glu' } },
      { name: { nl: 'Cholesterol totaal', en: 'Total cholesterol' }, value: '4.6 mmol/L', range: '< 5.0', date: '2026-07-15', status: 'normal', ref: { doc: 'p5-lab', at: 'chol' } },
      { name: { nl: 'Prolactine', en: 'Prolactin' }, value: '6 µg/L', range: '< 15', date: '2026-07-15', status: 'normal', ref: { doc: 'p5-lab', at: 'prl' } },
      { name: 'ECG QTc', value: '418 ms', range: '< 450', date: '2026-07-15', status: 'normal', ref: { doc: 'p5-lab', at: 'qtc' } },
      {
        name: { nl: 'Urine drugsscreening', en: 'Urine drug screen' },
        value: { nl: 'THC positief', en: 'THC positive' },
        range: { nl: 'negatief', en: 'negative' },
        date: '2026-07-15',
        status: 'abnormal',
        ref: { doc: 'p5-lab', at: 'uds' },
      },
    ],
    gaps: [
      { nl: 'Geen signaleringsplan (bij ontslag in april gepland)', en: 'No relapse prevention plan (planned at discharge in April)' },
      { nl: 'Psychiatrische familieanamnese niet vastgelegd', en: 'Family psychiatric history not documented' },
      { nl: 'Hoeveelheid cannabis per week niet vastgelegd', en: 'Amount of cannabis per week not quantified' },
    ],
    qa: [
      {
        q: { nl: 'Wat waren de klachten bij de eerste presentatie?', en: 'What were the symptoms at first presentation?' },
        a: {
          nl: 'Was ervan overtuigd dat de buren hem via de muren in de gaten hielden; had vier nachten niet geslapen en de ramen afgeplakt. Geen gedachten om zichzelf of anderen schade toe te brengen. Dezelfde avond vrijwillig opgenomen.',
          en: 'Convinced the neighbours were watching him through the walls; had not slept for four nights and had taped over the windows. No thoughts of harming himself or others. Admitted voluntarily the same evening.',
        },
        refs: [
          { doc: 'p5-crisis', at: 'reason' },
          { doc: 'p5-crisis', at: 'mse' },
          { doc: 'p5-crisis', at: 'plan' },
        ],
      },
      {
        q: { nl: 'Zijn er sinds de dosisverhoging bijwerkingen vastgelegd?', en: 'Any side effects recorded since the dose increase?' },
        a: {
          nl: 'Geen. De laatste controle op bijwerkingen was op 22 jul 2026, bij 10 mg: geen bewegingsstoornissen, geen onrust. Sinds de verhoging naar 15 mg is geen evaluatie vastgelegd.',
          en: 'None recorded. The last side-effect check was on 22 Jul 2026, at 10 mg: no movement side effects, no restlessness. No review has been recorded since the increase to 15 mg.',
        },
        refs: [
          { doc: 'p5-review', at: 'se' },
          { doc: 'p5-review', at: 'p' },
        ],
      },
      {
        q: { nl: 'Kan hij veilig stoppen met zijn medicatie voordat hij weer gaat studeren?', en: 'Can he safely stop his medication before university?' },
        out: true,
        a: {
          nl: 'PreConsult vat het dossier samen en geeft geen behandeladvies.\n\nRelevante gegevens: eerste episode maart 2026; in remissie sinds juli; dagelijks cannabisgebruik; het bij ontslag geplande signaleringsplan zit niet in het dossier.',
          en: 'PreConsult summarizes the record and does not advise on treatment.\n\nRelevant entries: first episode March 2026; in remission since July; daily cannabis use; the relapse prevention plan planned at discharge is not on file.',
        },
        refs: [
          { doc: 'p5-dis', at: 'dx' },
          { doc: 'p5-review', at: 'e' },
          { doc: 'p5-review', at: 's' },
          { doc: 'p5-dis', at: 'plan' },
        ],
      },
    ],
  },

  docs: [
    {
      id: 'p5-crisis',
      patient: P,
      layout: 'note',
      date: '2026-03-18',
      type: { nl: 'Crisisbeoordeling', en: 'Crisis assessment' },
      short: { nl: 'Crisisbeoordeling', en: 'Crisis assessment' },
      org: 'wilgenhoek',
      unit: { nl: 'Acute psychiatrie, crisisdienst', en: 'Acute psychiatry, crisis service' },
      author: { name: 'T. Brouwer en dr. N. Peeters', role: { nl: 'sociaal-psychiatrisch verpleegkundige en psychiater', en: 'community psychiatric nurse and psychiatrist' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Aanmelding', en: 'Referral' }, value: { nl: 'Huisartsenpost, 18-03-2026 21:40', en: 'Out-of-hours GP service, 18-03-2026 21:40' } },
            { label: { nl: 'Locatie', en: 'Location' }, value: { nl: 'Ouderlijk huis', en: "Parents' home" } },
            { label: { nl: 'Aanwezig', en: 'Present' }, value: { nl: 'Patiënt, moeder', en: 'Patient, mother' } },
          ],
        },
        { type: 'heading', text: { nl: 'Aanleiding', en: 'Presenting situation' } },
        {
          type: 'para',
          id: 'reason',
          text: {
            nl: 'Ouders maken zich zorgen: zoon slaapt al vier nachten niet, heeft de ramen afgeplakt en zegt dat de buren hem afluisteren.',
            en: 'Parents are worried: their son has not slept for four nights, has taped over the windows and says the neighbours are listening in on him.',
          },
        },
        { type: 'heading', text: { nl: 'Psychiatrisch onderzoek', en: 'Mental state examination' } },
        {
          type: 'para',
          id: 'mse',
          text: {
            nl: 'Wantrouwend en gespannen. Paranoïde waan: is ervan overtuigd dat de buren hem via de muren in de gaten houden. Geen hallucinaties aantoonbaar. Heeft vier nachten niet geslapen. Dagelijks cannabisgebruik, hoeveelheid onduidelijk.',
            en: 'Suspicious and tense. Paranoid delusion: convinced the neighbours are watching him through the walls. No hallucinations evident. Has not slept for four nights. Daily cannabis use, amount unclear.',
          },
        },
        { type: 'heading', text: { nl: 'Risicotaxatie', en: 'Risk assessment' } },
        {
          type: 'para',
          id: 'risk',
          text: {
            nl: 'Geen suïcidale gedachten. Geen gedachten om anderen schade toe te brengen. Woont bij zijn ouders, die steunend zijn.',
            en: 'No suicidal thoughts. No thoughts of harming others. Lives with his parents, who are supportive.',
          },
        },
        { type: 'heading', text: { nl: 'Conclusie', en: 'Conclusion' } },
        { type: 'para', text: { nl: 'Eerste psychotische episode, mogelijk mede uitgelokt door cannabisgebruik.', en: 'First psychotic episode, possibly partly triggered by cannabis use.' } },
        { type: 'heading', text: { nl: 'Beleid', en: 'Plan' } },
        {
          type: 'para',
          id: 'plan',
          text: {
            nl: 'Patiënt stemt in met vrijwillige opname op de afdeling psychiatrie van Ziekenhuis Wilgenhoek, dezelfde avond.',
            en: 'The patient agrees to voluntary admission to the psychiatry ward of Ziekenhuis Wilgenhoek the same evening.',
          },
        },
      ],
    },

    {
      id: 'p5-dis',
      patient: P,
      layout: 'letter',
      date: '2026-04-09',
      type: { nl: 'Ontslagbrief', en: 'Discharge letter' },
      short: { nl: 'Ontslagbrief', en: 'Discharge letter' },
      org: 'wilgenhoek',
      unit: { nl: 'Psychiatrie, kliniek', en: 'Psychiatry, inpatient unit' },
      author: { name: 'dr. K. Meijer', role: { nl: 'psychiater', en: 'psychiatrist' } },
      to: { name: 'Huisarts van patiënt', org: '', unit: { nl: '', en: '' } },
      blocks: [
        {
          type: 'fields',
          rows: [
            { label: { nl: 'Opname', en: 'Admitted' }, value: { nl: '18-03-2026', en: '18-03-2026' } },
            { label: { nl: 'Ontslag', en: 'Discharged' }, value: { nl: '09-04-2026', en: '09-04-2026' } },
            { label: { nl: 'Status', en: 'Status' }, value: { nl: 'Vrijwillig', en: 'Voluntary' } },
          ],
        },
        { type: 'heading', text: { nl: 'Diagnose', en: 'Diagnosis' } },
        {
          type: 'para',
          id: 'dx',
          text: {
            nl: 'Eerste psychotische episode; voorlopige classificatie schizofreniforme stoornis (DSM-5). Stoornis in het gebruik van cannabis, matig.',
            en: 'First psychotic episode; provisional classification schizophreniform disorder (DSM-5). Cannabis use disorder, moderate.',
          },
        },
        { type: 'heading', text: { nl: 'Beloop', en: 'Course' } },
        {
          type: 'para',
          id: 'course',
          text: {
            nl: 'Gestart met aripiprazol 10 mg en kortdurend lorazepam voor slaap en onrust. Binnen twee weken afname van de wanen; slaap genormaliseerd. Na drie weken met ontslag.',
            en: 'Started aripiprazole 10 mg and a short course of lorazepam for sleep and agitation. Delusions reduced within two weeks; sleep normalized. Discharged after three weeks.',
          },
        },
        { type: 'heading', text: { nl: 'Medicatie bij ontslag', en: 'Medication at discharge' } },
        {
          type: 'list',
          items: [
            { id: 'meds', text: { nl: 'Aripiprazol 10 mg, 1 x per dag 1 tablet (gestart 19-03-2026)', en: 'Aripiprazole 10 mg, 1 tablet once daily (started 19-03-2026)' } },
            { text: { nl: 'Lorazepam gestopt.', en: 'Lorazepam stopped.' } },
          ],
        },
        { type: 'heading', text: { nl: 'Beleid', en: 'Plan' } },
        {
          type: 'para',
          id: 'plan',
          text: {
            nl: 'Overdracht naar het FACT-team Vroege Psychose. Psycho-educatie aan patiënt en ouders gegeven. Een signaleringsplan wordt poliklinisch opgesteld.',
            en: 'Transfer to the FACT early psychosis team. Psychoeducation given to the patient and his parents. A relapse prevention plan will be drawn up in outpatient care.',
          },
        },
      ],
    },

    {
      id: 'p5-review',
      patient: P,
      layout: 'journal',
      date: '2026-07-22',
      type: { nl: 'Behandelevaluatie', en: 'Treatment review' },
      short: { nl: 'Behandelevaluatie FACT', en: 'Early psychosis review' },
      org: 'wilgenhoek',
      unit: { nl: 'FACT-team Vroege Psychose', en: 'FACT early psychosis team' },
      author: { name: 'dr. K. Meijer', role: { nl: 'psychiater', en: 'psychiatrist' } },
      blocks: [
        {
          type: 'soep',
          date: '2026-07-22',
          author: 'dr. K. Meijer, psychiater',
          rows: [
            {
              id: 's',
              code: 'S',
              text: {
                nl: "Gaat redelijk. Is nog wat achterdochtig naar de buren, maar kan dit relativeren. Gebruikt dagelijks cannabis ('om te ontspannen'). Wil in februari 2027 zijn hbo-studie hervatten.",
                en: "Doing reasonably well. Still somewhat suspicious of the neighbours, but can put it in perspective. Uses cannabis daily ('to relax'). Wants to resume his higher education course in February 2027.",
              },
            },
            {
              id: 'mse',
              code: 'O',
              text: {
                nl: 'Rustig en coöperatief. Geen hallucinaties, geen formele denkstoornissen; residuale achterdocht.',
                en: 'Calm and cooperative. No hallucinations, no formal thought disorder; residual suspiciousness.',
              },
            },
            {
              id: 'risk',
              code: 'O',
              text: {
                nl: 'Risicotaxatie: geen suïcidale gedachten, geen gedachten om anderen schade toe te brengen. Ziekte-inzicht gedeeltelijk.',
                en: 'Risk assessment: no suicidal thoughts, no thoughts of harming others. Partial insight.',
              },
            },
            {
              id: 'se',
              code: 'O',
              text: {
                nl: 'Bijwerkingen (aripiprazol 10 mg): geen extrapiramidale verschijnselen, geen acathisie. Gewicht 78 kg (maart: 75 kg).',
                en: 'Side effects (aripiprazole 10 mg): no extrapyramidal symptoms, no akathisia. Weight 78 kg (March: 75 kg).',
              },
            },
            {
              id: 'lab',
              code: 'O',
              text: {
                nl: 'Lab en ECG 15-07: glucose, cholesterol, prolactine en QTc binnen normale grenzen. Urine drugsscreening: THC positief.',
                en: 'Bloods and ECG 15-07: glucose, cholesterol, prolactin and QTc within normal limits. Urine drug screen: THC positive.',
              },
            },
            {
              id: 'e',
              code: 'E',
              text: {
                nl: 'Eerste psychose, positieve symptomen in remissie; residuale achterdocht. Dagelijks cannabisgebruik.',
                en: 'First-episode psychosis, positive symptoms in remission; residual suspiciousness. Daily cannabis use.',
              },
            },
            {
              id: 'p',
              code: 'P',
              text: {
                nl: 'Aripiprazol verhoogd van 10 naar 15 mg. Motiverende gespreksvoering rond cannabis; verwijzing naar verslavingszorg aangeboden, patiënt wil hierover nadenken. Volgende evaluatie over drie maanden.',
                en: 'Aripiprazole increased from 10 to 15 mg. Motivational interviewing on cannabis; referral to addiction care offered, the patient wants to think it over. Next review in three months.',
              },
            },
          ],
        },
      ],
    },

    {
      id: 'p5-lab',
      patient: P,
      layout: 'lab',
      date: '2026-07-15',
      type: { nl: 'Metabole screening en ECG', en: 'Metabolic screening and ECG' },
      short: { nl: 'Lab en ECG', en: 'Lab and ECG' },
      org: 'wilgenhoek',
      unit: { nl: 'Klinisch Chemisch Laboratorium en Cardiologie', en: 'Clinical Chemistry Laboratory and Cardiology' },
      author: { name: 'dr. K. Meijer', role: { nl: 'psychiater (aanvrager)', en: 'psychiatrist (requester)' } },
      blocks: [
        {
          type: 'fields',
          rows: [{ label: { nl: 'Afname', en: 'Sample taken' }, value: { nl: '15-07-2026 08:30, nuchter', en: '15-07-2026 08:30, fasting' } }],
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
            { id: 'glu', cells: ['Glucose (nuchter)', '5,1', 'mmol/L', '< 6,1'] },
            { id: 'hba1c', cells: ['HbA1c', '34', 'mmol/mol', '< 42'] },
            { id: 'chol', cells: ['Cholesterol totaal', '4,6', 'mmol/L', '< 5,0'] },
            { id: 'ldl', cells: ['LDL-cholesterol', '2,9', 'mmol/L', '< 3,0'] },
            { id: 'trig', cells: ['Triglyceriden', '1,1', 'mmol/L', '< 2,0'] },
            { id: 'prl', cells: ['Prolactine', '6', 'µg/L', '< 15'] },
            { id: 'uds', cells: ['Urine drugsscreening', { nl: 'THC positief; overige negatief', en: 'THC positive; others negative' }, '', { nl: 'negatief', en: 'negative' }], flag: '*' },
          ],
        },
        { type: 'heading', text: { nl: 'ECG', en: 'ECG' } },
        {
          type: 'para',
          id: 'qtc',
          text: {
            nl: 'Sinusritme 68/min, normale as, PR 152 ms, QRS 92 ms, QTc 418 ms (Bazett). Geen afwijkingen.',
            en: 'Sinus rhythm 68/min, normal axis, PR 152 ms, QRS 92 ms, QTc 418 ms (Bazett). No abnormalities.',
          },
        },
      ],
    },

    {
      id: 'p5-meds',
      patient: P,
      layout: 'meds',
      date: '2026-07-22',
      type: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      short: { nl: 'Medicatieoverzicht', en: 'Medication overview' },
      org: 'wilgenhoek',
      unit: { nl: 'FACT-team Vroege Psychose', en: 'FACT early psychosis team' },
      author: { name: 'dr. K. Meijer', role: { nl: 'psychiater', en: 'psychiatrist' } },
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
            { id: 'ari', cells: ['Aripiprazol 15 mg tablet', { nl: '1 x per dag 1 tablet', en: '1 tablet once daily' }, '19-03-2026 (15 mg sinds 22-07-2026)', '', ''] },
            { id: 'lora', cells: ['Lorazepam 1 mg tablet', { nl: 'zo nodig max. 2 x per dag 1', en: 'up to 1 twice daily as needed' }, '19-03-2026', '09-04-2026', { nl: 'Kortdurend tijdens opname', en: 'Short course during admission' }] },
          ],
        },
        { type: 'heading', text: { nl: 'Allergieën', en: 'Allergies' } },
        { type: 'para', text: { nl: 'Geen bekend.', en: 'None known.' } },
      ],
    },
  ],
};
