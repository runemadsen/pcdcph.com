# Processing Community Day Copenhagen Website

The website is built with [Astro](https://astro.build) and deployed to
Cloudflare Workers.

## Requirements

Node 24. The repository has an `.nvmrc` file, so `nvm use` selects the correct
version.

## Develop

```
$ npm i
$ npm run dev
```

## Build and preview

`npm run build` writes the static site to `dist/`. `npm run preview` builds and
then serves `dist/` through the local Cloudflare Workers runtime, which is the
closest match to production.

## Deploy

```
$ npm run deploy
```

This builds the site and runs `wrangler deploy`. The Worker configuration lives
in `wrangler.jsonc`.
