import { CVData } from '../models'

export const cvData: CVData = {
  headerData: {
    avatarPath: './assets/avatar.JPG',
    fullName: 'Bosir Barbaris',
    position: 'IT Project Manager',
    contactInformation: [
      {
        iconPath: './assets/icons/E-mail.svg',
        title: 'E-mail',
        body: 'a.chernykh@pm.me',
        bodyLink: 'mailto:a.chernykh@pm.me',
      },
      {
        iconPath: './assets/icons/LinkedIn.svg',
        title: 'LinkedIn',
        body: 'linkedin.com/in/shtraus12',
        bodyLink: 'https://www.linkedin.com/in/shtraus12/',
      },
      {
        iconPath: './assets/icons/Telegram.svg',
        title: 'Telegram',
        body: '@shtraus12',
        bodyLink: 'https://t.me/shtraus12',
      },
      {
        iconPath: './assets/icons/Location.svg',
        title: 'Location',
        body: 'Kazakhstan (both relocation and remote work are considered',
      },
    ],
  },
  profile: {
    description:
      'Highly motivated IT Project Manager with 6 years professional education and more than 2 years of experience in successfully delivering EdTech, VoIP, FinTech, Medical and Sport projects, managing fully remote teams, publishing mobile apps to stores and more.<br><br>📈<strong>Key achievements</strong><br>⚡️Delivered in time Cloud PBX SaaS system developed from scratch<br>— Budget: $300’000<br>— Terms: 12 months<br>— Current status: waiting for legal certification<br><br>⚡️Rapidly delivered to production ERP system for the debt collecting department of the credit organization<br>— Business value: department now can have more than 1 employees and manage their tasks<br>— Terms: 1.5 months<br><br>⚡️Set up more than 5 application stores accounts and published apps (incl. preparing minimal required legal documents, promo materials, setting up in-app purchases, passing review)<br>— More than 20’000 downloads on App Store and Google Play<br><br>⚡️Zero conflicts with clients including out-of-deadlines deliveries (due to external circumstances)<br><br>⚡️Successfully managed full remote teams up to 14 members',
  },

  careers: [
    {
      dates: 'May 2021 — Present',
      duration: '(2 years 3 months)',
      position: 'IT Project Manager, Analyst',
      onSiteRemote: 'remote',
      companyName: '2People IT',
      description:
        '2people IT is an international IT company that develops full-cycle custom software. Here I worked my way up from intern to strong middle specialist reporting directly to CTO and managing teams of up to 10 people.<br><br><strong>Key responsibilities</strong><br>— Working with stakeholders<br>— Project managing and coordinating<br>— Providing reports (progress, financial, resources)<br>— Collecting requirements and developing SRS<br>— Labor and financial costs estimates upon requests<br>— Developing UX prototypes in Figma',
    },
    {
      dates: 'Jul 2020 — Aug 2020',
      duration: '(1 month)',
      position: 'Supply Chain Management Analyst (internship)',
      onSiteRemote: 'on-site',
      companyName: 'NOVARDIS Consulting',
      description:
        '<strong>Outline</strong><br>NOVARDIS is one of the leading SAP integrator company in Russia. During this internship I was taught SAP products lineup, spheres and processes can be optimized by implementing SAP products. Team of interns I was part of discovered SAP systems integration workflow. Few presentations on different SAP solutions were done during this internship.',
    },
  ],
  projectsHighlights: [
    {
      title:
        'NDA: Ultimate Cloud PBX SaaS solution for carrier services provider',
      dates: 'Jul 2022 — Jun 2023',
      duration: '(12 months)',
      description:
        '<strong>Project Description</strong><br>This project was to develop a cloud PBX for a large telecommunications service provider from scratch to production release. This software is distributed as a service for end users and consists of three user applications: a client web application for managing their PBX node, an admin web application for client management, and a cross-platform (Android and iOS) softphone mobile app.<br><br><strong>Activities and responsibilities</strong><br>Development was based on the <u>SCRUM</u>, with 2-3 week sprints and daily stand-ups held by me. All 14 team members worked <u>remotely</u>, and communications were based on <u>Discord</u> and Telegram. I planned each phase of the project in detail, including possible <u>risks</u> and actions to prevent them. Each phase ended with a demo presentation for the customer. I used <u>Postman</u> and <u>SIP softphones</u> to check out results and dig into bugs with the team. Developed mobile apps were listed in stores set up by me in <u>App Store Connect</u> and <u>Play Store Console</u>.<br>The only input provided was a 2-page document with key req-s, so my main objective was to design all product features. I used to work closely with the customer to collect their desires and to ensure that my product decisions based on deep market research met their expectations. The main artifacts of my activity as an Analyst on this project are the <u>SRS</u> and user manuals. Key tools used are <u>Figma</u> for prototyping, <u>Wiki-based service</u> for requirements, and <u>Google suite</u> (Drive, Sheets, and Docs) for manuals and some other docs.',
    },
    {
      title:
        'NDA: A smart app for a lineup of branded smart blood pressure monitors',
      dates: 'Apr 2022 — Sep 2022',
      duration: '(4 months)',
      description:
        '<strong>Project Description</strong><br>Cross-platform (Android and iOS) mobile app. The companion app for branded smart health devices (BPM, heart rate monitors, thermometers, etc.) complemented with the web admin panel for managing devices, app content and users, and a server-side with the corresponding functionality.<br><br><strong>Activities and responsibilities</strong><br><u>As a Project Manager</u> I developed detailed plans for the project, worked closely with the customer, held demos, and managed risks. Both platform apps were listed in the store accounts set up by me (<u>App Store Connect</u> and <u>Google Play Console</u>). Integration with Google Fit required additional <u>Google Cloud verification</u>, which was successfully completed. To achieve the desired user experience, I interacted with the device supplier (<u>OEM</u>) and decided in each case whether it was easier to update the unit software or implement some workaround in the app.<br><u>As an Analyst</u> I carried out <u>market research</u> and collected customer requirements so I could develop <u>SRS</u> for the product.',
    },
  ],
  educations: [
    {
      dates: '2020 — 2022',
      schoolName: 'Saint Petersburg State Electrotechnical University',
      description: "Master's degree in Project and Product Management",
    },
    {
      dates: '2016 — 2020',
      schoolName: 'Saint Petersburg State Electrotechnical University',
      description: 'Bachelor’s degree in Information Systems and Technologies',
    },
  ],
  languages: [
    {
      languageName: 'English',
      level: 'Professional working proficiency',
    },
    {
      languageName: 'Russian',
      level: 'Native or bilingual proficiency',
    },
  ],
}
