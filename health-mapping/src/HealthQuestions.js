export const newHealthQuestions = [
  {
    question: "PEDdiabetesDetails",
    qcd: 205,
    description:
      "Diabetes Mellitus type 1 or Diabetes on insulin or Diabetes associated with blindness or chronic foot ulcer",
    checked: "",
    period: "",
    sinceQuestion: "diabetesExistingSince",
  },
  {
    question: "PEDhyperTensionDetails",
    qcd: 207,
    description: "Hypertension / High Blood Pressure",
    checked: "",
    period: "",
    sinceQuestion: "hyperTensionExistingSince",
  },
  {
    question: "PEDliverDetails",
    qcd: 232,
    description:
      "Pancreatitis or Liver disease (including but not limited to Cirrhosis / Hepatitis B or C / Willson’s disease) or any other digestive track disorder (disorders of esophagus or stomach or intestine or any other)",
    checked: "",
    period: "",
    sinceQuestion: "liverExistingSince",
  },
  {
    question: "PEDcancerDetails",
    qcd: 114,
    description: "Cancer",
    checked: "",
    period: "",
    sinceQuestion: "cancerExistingSince",
  },
  {
    question: "PEDcardiacDetails",
    qcd: 143,
    description:
      "Any cardiovascular/Heart Disease (including but not limited to Coronary artery disease / Rheumatic heart disease / Heart Attack or Myocardial infarction / Heart failure / Bypass Grafting or CABG / Angioplasty or PTCA / Heart valve diseases / Pacemaker implantation)",
    checked: "",
    period: "",
    sinceQuestion: "cardiacExistingSince",
  },
  {
    question: "PEDjointpainDetails",
    qcd: 105,
    description:
      "Any disorders of Blood and / or Immunity (including but not limited to bleeding or clotting disorders, Systemic Lupus Erythematosus, Rheumatoid Arthritis, Crohn’s disease, Ulcerative Colitis).",
    checked: "",
    period: "",
    sinceQuestion: "jointpainExistingSince",
  },
  {
    question: "PEDkidneyDetails",
    qcd: 129,
    description: "Any Kidney / urinary track / reproductive organ Disease",
    checked: "",
    period: "",
    sinceQuestion: "kidneyExistingSince",
  },
  {
    question: "PEDparalysisDetails",
    qcd: 164,
    description:
      "Any Neuromuscular (muscles or nervous system) disorder or Psychiatric disorders (including but not limited to Motor Neuron Disease, Muscular dystrophies, Epilepsy, Paralysis, Parkinsonism, multiple sclerosis, stroke, mental illness)",
    checked: "",
    period: "",
    sinceQuestion: "paralysisExistingSince",
  },
  {
    question: "PEDcongenitalDetails",
    qcd: 122,
    description: "Congenital Disorder?",
    checked: "",
    period: "",
    sinceQuestion: "congenitalExistingSince",
  },
  {
    question: "PEDHivaidsDetails",
    qcd: 147,
    description: "HIV/ AIDS/ STD?",
    checked: "",
    period: "",
    sinceQuestion: "hivaidsExistingSince",
  },
  {
    question: "HEDHealthHospitalized",
    qcd: "H001",
    description:
      "Have any of the above mentioned person(s) to be insured been diagnosed / hospitalized for any illness / injury during the last 48 months?",
    checked: "",
  },
  {
    question: "HEDHealthClaim",
    qcd: "H002",
    description:
      "Have any of the person(s) to be insured ever filed a claim with their current / previous insurer?",
    checked: "",
  },
  {
    question: "HEDHealthDeclined",
    qcd: "H003",
    description:
      "Has any proposal for Health insurance been declined, cancelled or charged a higher premium?",
    checked: "",
  },
  {
    question: "HEDHealthCovered",
    qcd: "H004",
    description:
      "Is any of the person(s) to be insured, already covered under any other health insurance policy of Religare Health Insurance?",
    checked: "",
  },
  {
    question: "PEDotherDetails",
    qcd: 210,
    description: "Any other diseases or ailments not mentioned above ?",
    checked: "",
    period: "",
    sinceQuestion: "otherExistingSince",
  },
  {
    question: "PEDRespiratoryDetails",
    qcd: 250,
    description:
      "Any Respiratory disease / Disease of Lungs, Pleura and airway (including but not limited to Asthma / Tuberculosis / Pleural effusion / Bronchitis / Emphysema)",
    checked: "",
    period: "",
    sinceQuestion: "respiratoryExistingSince",
  },
  {
    question: "PEDEndoDetails",
    qcd: 222,
    description:
      "Any disorders of the endocrine system (including but not limited to Pituitary / Parathyroid / adrenal gland disorders)",
    checked: "",
    period: "",
    sinceQuestion: "EndocriExistingSince",
  },
  {
    question: "PEDillnessDetails",
    qcd: 502,
    description:
      "Has any of the Proposed to be Insured consulted/taken treatment or recommended to take investigations/medication/surgery other than for childbirth/minor injuries? *",
    checked: "",
    period: "",
    sinceQuestion: "illnessExistingSince",
  },
  {
    question: "PEDSurgeryDetails",
    qcd: 503,
    description:
      "Has any of the Proposed to be Insured been hospitalized or has been under any prolonged treatment for any illness/injury or has undergone surgery other than for childbirth/minor injuries? *",
    checked: "",
    period: "",
    sinceQuestion: "SurgeryExistingSince",
  },
  {
    question: "PEDSmokeDetails",
    qcd: 504,
    description:
      "Do You smoke, consume alcohol, or chew tobacco, ghutka or paan or use any recreational drugs? If ‘Yes’ then please provide the frequency & amount consumed. *",
    checked: "",
    period: "",
    sinceQuestion: "SmokeExistingSince",
  },
];

export const familyData = {
  self: true,
  spouse: true,
  son: true,
  daughter: false,
  father: false,
  mother: false,
  fatherInLaw: false,
  motherInLaw: false,
  sonCount: 2,
  daughterCount: 0,
};

export const membersData = {
  membersData: {
    self: {
      title: "Mr",
      firstName: "sudhir kumar",
      lastName: "kalivarapu",
      gender: "MALE",
      dob: "13/12/1995",
      martialStatus: "married",
      relationship: "self",
      height: 182,
      weight: 75,
    },
    spouse: {
      title: "Ms",
      firstName: "Avneet ",
      lastName: "kaur",
      gender: "FEMALE",
      dob: "06/06/2001",
      martialStatus: "married",
      relationship: "spouse",
      height: 175,
      weight: 85,
    },
    son1: {
      title: "Mr",
      firstName: "puneeth",
      lastName: "kaur",
      gender: "FEMALE",
      dob: "06/06/2001",
      martialStatus: "married",
      relationship: "spouse",
      height: 175,
      weight: 85,
    },
    son2: {
      title: "Mr",
      firstName: "sunil ",
      lastName: "kaur",
      gender: "FEMALE",
      dob: "06/06/2001",
      martialStatus: "married",
      relationship: "spouse",
      height: 175,
      weight: 85,
    },
    son3: {
      title: "Mr",
      firstName: "Eren Yeager ",
      lastName: "kaur",
      gender: "FEMALE",
      dob: "06/06/2001",
      martialStatus: "married",
      relationship: "spouse",
      height: 175,
      weight: 85,
    },
  },
};

export let newMembersData = {
  self: {
    title: "Mr",
    firstName: "sudhir kumar",
    lastName: "kalivarapu",
    gender: "MALE",
    dob: "04/12/2023",
    martialStatus: "married",
    relationship: "self",
    height: 156,
    weight: 84,
  },
  spouse: {
    title: "Ms",
    firstName: "avneet ",
    lastName: "kaur",
    gender: "FEMALE",
    dob: "27/11/2023",
    martialStatus: "married",
    relationship: "spouse",
    height: 152,
    weight: 89,
  },
  son: [
    {
      title: "Mr",
      firstName: "sweqcwe",
      lastName: "kalivarapu",
      gender: "MALE",
      dob: "26/11/2023",
      martialStatus: "married",
      relationship: "son",
      height: 147,
      weight: 75,
    },
    {
      title: "Mr",
      firstName: "xwqxwxw",
      lastName: ",m xm,as",
      gender: "MALE",
      dob: "04/12/2023",
      martialStatus: "married",
      relationship: "son",
      height: 175,
      weight: 25,
    },
  ],
};

export const newData = {
  self: {
    title: "Mr",
    firstName: "sudhir kumar",
    lastName: "kalivarapu",
    gender: "MALE",
    dob: "05/12/2023",
    relationship: "self",
    height: 124,
    weight: 45,
  },
  spouse: {
    title: "Ms",
    firstName: "avneet ",
    lastName: "kaur",
    gender: "FEMALE",
    dob: "27/11/2023",
    relationship: "spouse",
    height: 145,
    weight: 75,
  },
  son1: {
    title: "Mr",
    firstName: "sudhir kumar",
    lastName: "kalivarapu",
    gender: "MALE",
    dob: "11/12/2023",
    maritalStatus: "married",
    relationship: "son",
    height: 145,
    weight: 45,
  },
  son2: {
    title: "Mr",
    firstName: "xwqxwxw",
    lastName: ",m xm,as",
    gender: "MALE",
    dob: "29/12/2023",
    maritalStatus: "married",
    relationship: "son",
    height: 128,
    weight: 45,
  },
};