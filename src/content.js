// All personal content lives here. Edit this file to update the site.

export const profile = {
  name: 'Alan Dutton',
  initials: 'AD',
  role: 'Software Developer',
  location: 'Germany',
  status: 'Software Developer at PlanB. GmbH',
  headline: 'Software developer from Germany.',
  intro: "I'm Alan. I write mostly C# and .NET, and I'm currently building Authora, a self-hosted identity platform.",
}

// Add LinkedIn, X, etc. here — they show up in the hero and footer.
export const links = [{ label: 'GitHub', href: 'https://github.com/DuttonAlan' }]

export const about = {
  lead: 'I code. :D',
  body: 'Mostly in C# on the .NET stack: building APIs, backend services and the occasional frontend.',
  skills: ['C#', '.NET / ASP.NET Core', 'Entity Framework Core', 'PostgreSQL', 'OAuth 2.0 / OpenID Connect'],
}

export const projects = [
  {
    title: 'Authora',
    status: 'In progress',
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
    role: 'Software Developer',
    company: 'PlanB. GmbH',
  },
]
