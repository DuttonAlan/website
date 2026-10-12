// All personal content lives here. Edit this file to update the site.

export const profile = {
  name: 'Alan Dutton',
  firstName: 'Alan',
  initials: 'AD',
  role: 'Software Developer',
  location: 'Germany',
  timeZone: 'Europe/Berlin',
  github: 'DuttonAlan',
  intro:
    'Software developer from Germany. I spend most of my days in C# and .NET, and my evenings building Authora, a self-hosted identity platform.',
}

// Add LinkedIn, X, etc. here — they show up in the hero and footer.
export const links = [{ label: 'GitHub', href: 'https://github.com/DuttonAlan' }]

// The "Now" strip under the hero.
export const now = [
  { label: 'Working at', value: 'PlanB. GmbH' },
  { label: 'Building', value: 'Authora', href: '#work' },
  { label: 'Writing', value: 'Mostly C#' },
]

export const about = {
  lead: 'I develop software that solves problems.',
  body: [
    'Most of my work happens on the backend with C# and .NET: designing APIs, modelling data and building the services that keep applications running. I care about code that is easy to read and easy to maintain.',
    "Right now I'm also building Authora, a self-hosted identity platform. Authentication is something every application needs, but few teams want to build from scratch.",
  ],
  skills: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'Azure'],
}

export const projects = [
  {
    title: 'Authora',
    repo: 'DuttonAlan/Authora',
    status: 'In progress',
    tagline: 'Identity. Access. Control.',
    description:
      'A lightweight, self-hosted identity and access management platform for small projects. One identity provider for all your apps, built on OAuth 2.0 and OpenID Connect.',
    features: [
      'OAuth 2.0 & OpenID Connect',
      'User & account management',
      'Roles, permissions & access policies',
      'App & OAuth client registration',
    ],
    tags: ['C#', '.NET 10', 'ASP.NET Core', 'EF Core', 'PostgreSQL'],
    href: 'https://github.com/DuttonAlan/Authora',
  },
]

// `period` is optional — leave it out to show "Now".
export const experience = [
  {
    period: 'Aug 2025 — Now',
    role: 'Solution Expert',
    company: 'PlanB. GmbH',
  },
  {
    period: 'Sep 2022 — Aug 2025',
    role: 'Trainee',
    company: 'PlanB. GmbH',
  },
]
