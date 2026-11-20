# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.0.0] - 2026-11-20

### Changed

- Redesigned the site as a single, minimal page: a short intro, links to Authora and Logbook, and a faint grid background.
- Dark mode now always follows the system setting.
- Restyled the favicon and 404 page to match.

### Removed

- Navigation, About, Projects and Experience sections, and the live GitHub data.
- The manual theme toggle.
- Tailwind CSS and the Geist Mono font.
- Link preview image, `robots.txt`, `sitemap.xml` and `CNAME` (the custom domain is set in the repository's Pages settings).

## [1.0.0] - 2026-10-12

### Added

- Personal website built with Vite, React and Tailwind CSS.
- Hero with live local time, intro and a "Now" strip (current employer, project and language).
- About section with a short bio and the tools I use.
- Work section featuring Authora, with live GitHub data: stars, last update, recent commits and language breakdown.
- Experience timeline.
- Light and dark mode that follows the system setting, with a toggle that remembers the choice.
- Responsive layout with a mobile menu.
- All personal content kept in a single file, `src/content.js`.
- Link preview image and Open Graph tags.
- `robots.txt`, `sitemap.xml` and a custom 404 page.
- GitHub Pages deployment workflow for `alandutton.de`.
- ESLint and Prettier setup.

[Unreleased]: https://github.com/DuttonAlan/website/compare/v2.0.0...HEAD
[2.0.0]: https://github.com/DuttonAlan/website/compare/v1.0.0...v2.0.0
[1.0.0]: https://github.com/DuttonAlan/website/releases/tag/v1.0.0
