# Ying's Thinking Wood

A personal blog built with Astro, MDX, and Tailwind CSS. Forest-toned design with dark mode, syntax highlighting, and a focus on comfortable reading.

## Stack

- [Astro](https://astro.build/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/) for rich post authoring
- [Shiki](https://shiki.style/) for syntax highlighting (light: `vitesse-light`, dark: `material-theme-palenight`)
- [Pagefind](https://pagefind.app/) for static search

## Running Locally

**Recommended Cursor / VSCode extensions:**

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

```bash
bun install
bun dev
```

## Commands

| Command       | Action                                     |
| :------------ | :----------------------------------------- |
| `bun install` | Install dependencies                       |
| `bun dev`     | Start local dev server at `localhost:4321` |
| `bun build`   | Build production site to `./dist/`         |
| `bun preview` | Preview production build locally           |

## Configure

Edit `src/data/site.config.ts` to update site metadata (title, author, description, URL, pagination size).

## Categories

Add or edit categories in `src/data/categories.ts`:

```ts
export const CATEGORIES = ['Design', 'Code', 'Life'] as const
```

Zod validates categories at build time — a typo in a post's frontmatter will throw a build error.

## Writing a Post

Create a `.md` or `.mdx` file in `src/content/blog/`. The filename becomes the URL slug.

**Required frontmatter:**

```yaml
title: My Post Title
description: A short description shown in previews.
pubDate: 2026-03-18
heroImage: ../../assets/images/cover.jpg
category: Design
```

**Optional frontmatter:**

```yaml
tags: [astro, css]
draft: true # hides the post from listings
```

## Features

- Dark / light mode
- Reading time estimate
- Table of contents
- Copy-to-clipboard code blocks
- SEO meta tags + OpenGraph
- Sitemap + RSS feed
- Static full-text search (Pagefind)
- View transitions
- Pagination
