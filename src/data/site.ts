/**
 * Single source of truth for everything that changes between environments or
 * that a human must fill in before launch. Nothing here should be duplicated
 * in a template — if a value appears twice, it belongs in this file.
 */
export const site = {
  name: 'LMVersity',
  /** No trailing slash. Used for canonicals, schema @id values and feeds. */
  url: 'https://lmversity.com',
  tagline: 'Learn to actually build with AI.',
  description:
    'A free, hands-on learning platform for the agentic-AI era. A structured path from your first prompt to production agents.',
  locale: 'en',
  /** ISO date the site first went live. Shown in the colophon. */
  founded: '2026',

  /**
   * The byline. E-E-A-T signals attach to a person, not a logo, so this is the
   * one block worth filling in properly before launch.
   * Leave a field empty and it is simply omitted from the markup — nothing
   * here is invented or guessed.
   */
  author: {
    name: 'Ahmed Ansari',
    role: 'Editor',
    /** Profile URLs used for schema `sameAs`. Add only real ones. */
    sameAs: ['https://ahmedansari.me', 'https://github.com/AhmedA-afk', 'https://www.linkedin.com/in/ahmed-1-ansari'] as string[],
  },

  /** Social handles, without the @. Empty values are omitted. */
  social: {
    x: '',
    github: 'AhmedA-afk',
    linkedin: 'ahmed-1-ansari',
    mastodon: '',
  },

  /** Where corrections and security reports go. */
  contact: {
    /** General corrections and errors. */
    email: 'ahmedraza1ansari@gmail.com',
    /** Security reports. Falls back to `email` when empty. */
    security: '',
  },

  /**
   * Privacy-friendly analytics. Leave `provider` empty to ship no analytics at
   * all — the site works fully without it and no third-party script loads.
   */
  analytics: {
    provider: '' as '' | 'plausible' | 'umami',
    /** Plausible: the domain. Umami: the website id. */
    id: '',
    /** Self-hosted instance origin. Empty uses the vendor's cloud. */
    host: '',
  },

  /**
   * Google AdSense. Leave `client` empty and nothing ad-related ships: no
   * script, no slots, no ads.txt. Set it to the publisher id ("ca-pub-…") and
   * the head script, the slots and /ads.txt switch on together, and /privacy
   * describes what that means. Slot ids are optional: without them the units
   * run as auto-format responsive ads under the client id.
   */
  ads: {
    client: 'ca-pub-2004809158099634',
    slots: { lesson: '', guide: '', blog: '' } as { lesson: string; guide: string; blog: string },
  },

  /** Repository, for "edit this page" links. Empty hides them. */
  repo: {
    url: 'https://github.com/AhmedA-afk/lmversity',
    branch: 'main',
  },
} as const;

export const absoluteUrl = (path: string) => new URL(path, site.url).href;

/** Handles are stored bare; render them with the @ where a human reads them. */
export const handle = (value: string) => (value ? `@${value.replace(/^@/, '')}` : '');
