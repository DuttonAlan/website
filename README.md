# alandutton.de

My personal website, built with [Vite](https://vite.dev) and [React](https://react.dev).

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server at http://localhost:5173 |
| `npm run build`   | Build for production into `dist/`             |
| `npm run preview` | Preview the production build                  |
| `npm run lint`    | Check the code with ESLint                    |
| `npm run format`  | Format everything with Prettier               |

## Editing content

All text and links live in [`src/content.js`](src/content.js).
Light and dark colours are CSS variables at the top of [`src/index.css`](src/index.css).

## License

[MIT](LICENSE)
