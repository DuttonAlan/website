# alandutton.de

My personal website, built with [Vite](https://vite.dev), [React](https://react.dev) and [Tailwind CSS](https://tailwindcss.com).

## Getting started

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # build for production into dist/
npm run preview   # preview the production build
npm run lint      # check the code with ESLint
npm run format    # format everything with Prettier
```

## Editing content

All personal content (intro, tools, projects, experience and links) lives in [`src/content.js`](src/content.js). Edit that file and the whole site updates.

The project card for Authora loads live stats and recent commits from the GitHub API in the browser. If the request fails, for example because of GitHub's rate limit, those parts are simply hidden.

## Project structure

```
src/
├── content.js         # all personal content
├── index.css          # Tailwind setup, colour tokens, light and dark palettes
├── lib/github.js      # GitHub API hook and relative-time helper
└── components/        # one component per section, plus shared UI in ui.jsx
```

## License

[MIT](LICENSE)
