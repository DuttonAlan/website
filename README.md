# alandutton.de

My personal website, built with [Vite](https://vite.dev) and [React](https://react.dev).

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

All personal content (intro, projects and footer links) lives in [`src/content.js`](src/content.js). Edit that file and the whole site updates.

The site follows the system's light or dark setting automatically. Both palettes are CSS variables at the top of [`src/index.css`](src/index.css).

## Project structure

```
src/
├── content.js   # all personal content
├── App.jsx      # the page
└── index.css    # colour tokens (light and dark) and all styles
public/
├── favicon.svg
└── 404.html     # shown by GitHub Pages for unknown URLs
```

## License

[MIT](LICENSE)
