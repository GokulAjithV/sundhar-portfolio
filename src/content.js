// All site copy lives here, taken from the resume. Editing the site never means touching a component.

export const links = {
  linkedin: 'https://www.linkedin.com/in/sundhar-g-036545251',
  presentation: 'https://drive.google.com/file/d/19r6s0SuS-_SQBdMS-wD_Wpd6pzmiee9B/view',
  resume: '/assets/Sundhar_G_Resume.pdf',
}

export const navItems = [
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certificates', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  name: 'Sundhar G',
  title: 'Test & FA Engineering',
  location: 'Bengaluru',
  photo: '/assets/sundhar-photo.jpg',
  initials: 'SG',
  summary: [
    'Engineer with four years in the Electronics Manufacturing Services (EMS) industry, working on hardware test for PCB, MLB and FATP across telecommunication and power electronics.',
    'Handles NPI phases such as engineering builds, with expertise in product validation and troubleshooting during PVT builds, in line with QMS and Lean standards.',
  ],
}

export const stats = [
  { value: '4 years', label: 'in electronics manufacturing' },
  { value: '4', label: 'electronics companies' },
  { value: '16% → 4%', label: 'retest rate on one failure' },
  { value: '7', label: 'verifiable training certificates' },
]

export const experience = [
  {
    year: '2025',
    company: 'Foxconn Hon Hai Technology India Mega Development Pvt Ltd',
    location: 'Bengaluru',
    role: 'Junior Engineer',
    department: 'MLB-TE',
    product: 'Apple iPhone',
    stages: ['OVB', 'PRB', 'PPVT', 'PVT', 'MP'],
    bullets: [
      'Responsible for Operation Build (Ops) activities, including test set-up and validation from the OVB, PRB, PPVT and PVT stages through to ramp-up and Mass Production (MP) approval.',
      'Ran the Line Bring-up Unit (LBU) process start to end, covering CTB, inspection, retrofit, instrument and fixture calibration, test results, ESD measurements, Gage R&R and CPK, and compiled Line Qualification and Lessons Learned reports for Lean production.',
      'Installed AP (TransTest) and RF (Tescom, Anora) test fixtures with equipment communication interfaces using block diagrams, following SOPs and keeping fixtures in good health.',
      'Resolved power and RF failure parameters at FCT, cellular (2G, 3G, 4G, 5G) and non-cellular (Wi-Fi) test stations.',
      'Presented at sync-up and wrap-up meetings on offline QPL, robotics breakdowns and NTF.',
      'Monitored UPH, FPY, total yield rate and NTF (DPPM), and mapped customer feedback through QFD, with a main focus on reducing retest rate.',
    ],
  },
  {
    year: '2024',
    company: 'Salcomp Manufacturing India Pvt Ltd',
    location: 'Chennai',
    role: 'Test Technician',
    department: 'Enphase Engineering',
    product: 'Micro-Inverter',
    bullets: [
      'Installed Automated Test Equipment (ATE) and semi-automated testers, connecting instruments such as DAQ, Hioki AC-DC power meters and KIKUSUI AC power sources to the computer interface.',
      'Set up Bed of Nails (BON) compatibility with the test head, including position alignment and X-Y axis calibration.',
      'Tested Micro-Inverters and System Controllers at ICT (Keysight i3070), FCT, ET (Emechanicz), HT and ST stations, identifying RC&CA to minimise downtime on failure parameters.',
      'Uploaded ASIC programs and carried out PCBA-level bench testing and debugging through to box build testing.',
      'Handled changeovers and remote login, helping to understand customer specifications.',
    ],
  },
  {
    year: '2022',
    company: 'Indian Power Electronics India Pvt Ltd (IPEC)',
    location: 'Bengaluru',
    role: 'Test Engineer',
    department: 'TE',
    product: 'EV charger & Harness',
    bullets: [
      'Defined and managed testing SOPs for all test stations, maintained the test logs and reports required by management, and ensured NG part validation.',
      'Ather portable EV charger: manual functional testing of I/O constant current, constant voltage and power cycle function.',
      'OLA Hyper EV charger: continuity, safety and software sequence testing with TCU category embedded systems, over-voltage and under-voltage testing using a transformer, and grounding and earthing checks.',
      'HMCL vehicle inlet harness: Hi-pot and Insulation Resistance (IR) testing.',
    ],
  },
  {
    year: '2021',
    company: 'Nokia Solutions & Networks India Pvt Ltd',
    location: 'Chennai',
    role: 'Test Technician Trainee',
    department: 'MS Testing',
    product: 'BTS',
    bullets: [
      'MFT: installed GPIB testers and troubleshot significant parameters.',
      'Filter: fixed tuning problems using E-Cal (8509xC/D, N4431B, N443xA/B series) and alignment issues on jig and auto-tuning fixtures.',
      'CUTS: calibrated RF testers using NRP power sensors with attenuators.',
      'Supported preventive maintenance and monitored periodic and predictive maintenance for all test stations, weekly and monthly.',
      'Supported senior technicians and engineers when checking major down testers.',
    ],
  },
]

export const skills = [
  { group: 'Test', items: ['Functional Test (FT)', 'In-Circuit Test (ICT)', 'Hi-Pot Testing (HT)', 'IR Testing', 'DUT / UUT'] },
  { group: 'Equipment', items: ['VNA', 'Spectrum Analyzer', 'CMW', 'DMM', 'AC-DC / DC-AC auxiliary power supplies'] },
  { group: 'RCA', items: ['Fish Bone Diagram', '5W2H', 'Five Whys', 'A3 sheet', 'CAPA', 'Troubleshooting brainstorms'] },
  { group: 'Process', items: ['PCB stack-up', 'iPhone MLB / SMT process flow', 'Lean Methodologies'] },
  { group: 'Debug & rework', items: ['THT soldering', 'Resoldering', 'PCBA desoldering'] },
  { group: 'Communication protocols', items: ['I2C', 'SPI', 'UART', 'CAN'] },
  { group: 'Automation', items: ['A1200 / A1701 robot and claw installation', 'HMI position points'] },
  { group: 'Electronic components', items: ['Active and passive identification', 'Value reading', 'Component testing'] },
  { group: 'Drawings', items: ['GD&T technical drawings', 'PCBA schematic diagrams'] },
  { group: 'Software & tools', items: ['Microsoft Excel', 'Word', 'PowerPoint', 'Minitab Workspace'] },
]

export const achievements = [
  'Carried out marginal analysis on a special-cause failure parameter at a retest rate (RR) of 16% and fixed that failure code, bringing RR to 4%.',
  'Completed an AC to DC 12V-9V-5V conversion sample.',
]

const qualityGurus = 'https://certificates.qualitygurus.com/en/verify'
const udemy = 'https://www.udemy.com/certificate'

// Names match the certificate pages, since that's what a visitor sees after clicking Verify.
export const certifications = [
  {
    name: 'Root Cause Analysis and the 8D Problem Solving Bootcamp (Accredited)',
    issuer: 'Quality Gurus',
    href: `${qualityGurus}/63236431895747`,
  },
  {
    name: 'Measurement System Analysis (MSA) Expert (Accredited)',
    issuer: 'Quality Gurus',
    href: `${qualityGurus}/00204951435269`,
  },
  {
    name: 'Statistical Process Control (SPC) Bootcamp (Accredited)',
    issuer: 'Quality Gurus',
    href: `${qualityGurus}/31947805653720`,
  },
  {
    name: 'Design and Analysis of Experiments (DoE) (Accredited)',
    issuer: 'Quality Gurus',
    href: `${qualityGurus}/67211306841604`,
  },
  {
    name: 'The Complete Lean Six Sigma Green Belt Course',
    issuer: 'Udemy',
    href: `${udemy}/UC-69406615-890d-4617-a4c9-4fc9d3d75b13/`,
  },
  {
    name: 'ISO/IEC 17025 – Laboratory Management Systems Certification',
    issuer: 'Udemy',
    href: `${udemy}/UC-9341b60b-b0ff-4db7-b361-7ee96366082f/`,
  },
  {
    name: 'IATF 16949 Mastery: Automotive Quality & Certification Guide',
    issuer: 'Udemy',
    href: `${udemy}/UC-a4136931-ea6a-4c37-9ddb-f7d2226af8da/`,
  },
  { name: 'Laptop Motherboard Troubleshooting course' },
]

export const education = {
  degree: 'Diploma, Electronics and Communication Engineering',
  level: 'Associate degree',
  school: 'Thanthai Periyar E.V Ramasamy Government Polytechnic College (TPEVR), Vellore',
  details: '2018–2021 · 78% overall',
}

export const languages = [
  { name: 'Tamil', level: 'Native or bilingual' },
  { name: 'Kannada', level: 'Full professional' },
  { name: 'English', level: 'Professional working' },
]

export const contact = {
  email: 'sundharg28@gmail.com',
  phone: '+91 96069 78345',
}

export const footer = '© 2026 Sundhar G'
