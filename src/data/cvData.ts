import { ICVData } from '../models'

export const cvData: ICVData = {
  avatarPath: './assets/avatar.JPG',
  fullName: 'Anton Chernykh',
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
  profile: [
    {
      body: 'Highly motivated IT Project Manager with 6 years professional education and more than 2 years of experience in successfully delivering EdTech, VoIP, FinTech, Medical and Sport projects, managing fully remote teams, publishing mobile apps to stores and more.',
    },
    {
      header: '📈<strong>Key achievements',
      body: '⚡️Delivered in time Cloud PBX SaaS system developed from scratch<br>— Budget: $300’000<br>— Terms: 12 months<br>— Current status: waiting for legal certification<br><br>⚡️Rapidly delivered to production ERP system for the debt collecting department of the credit organization<br>— Business value: department now can have more than 1 employees and manage their tasks<br>— Terms: 1.5 months<br><br>⚡️Set up more than 5 application stores accounts and published apps (incl. preparing minimal required legal documents, promo materials, setting up in-app purchases, passing review)<br>— More than 20’000 downloads on App Store and Google Play<br><br>⚡️Zero conflicts with clients including out-of-deadlines deliveries (due to external circumstances)<br><br>⚡️Successfully managed full remote teams up to 14 members',
    },
  ],
  careers: [
    {
      dates: 'May 2021 — Present',
      duration: '(2 years 3 months)',
      position: 'IT Project Manager, Analyst',
      onSiteRemote: 'remote',
      companyName: '2People IT',
      description: [
        {
          body: '2people IT is an international IT company that develops full-cycle custom software. Here I worked my way up from intern to strong middle specialist reporting directly to CTO and managing teams of up to 10 people.<br><br><strong>Key responsibilities</strong><br>— Working with stakeholders<br>— Project managing and coordinating<br>— Providing reports (progress, financial, resources)<br>— Collecting requirements and developing SRS<br>— Labor and financial costs estimates upon requests<br>— Developing UX prototypes in Figma',
        },
      ],
    },
    {
      dates: 'Jul 2020 — Aug 2020',
      duration: '(1 month)',
      position: 'Supply Chain Management Analyst (internship)',
      onSiteRemote: 'on-site',
      companyName: 'NOVARDIS Consulting',
      description: [
        {
          body: '<strong>Outline</strong><br>NOVARDIS is one of the leading SAP integrator company in Russia. During this internship I was taught SAP products lineup, spheres and processes can be optimized by implementing SAP products. Team of interns I was part of discovered SAP systems integration workflow. Few presentations on different SAP solutions were done during this internship.',
        },
      ],
    },
  ],
}
