# A Next.js Personal Website with a Native Authoring Experience<!-- omit in toc -->

This starter is a statically generated personal website that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content. It comes with a native Sanity Studio that offers features like real-time collaboration and visual editing with live updates using [Presentation][presentation].

The Studio connects to Sanity Content Lake, which gives you hosted content APIs with a flexible query language, on-demand image transformations, powerful patching, and more. You can use this starter to kick-start a personal website or learn these technologies.

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

## Features

- A performant, static personal website with editable projects
- A native and customizable authoring environment, accessible on `yourpersonalwebsite.com/studio`
- Real-time and collaborative content editing with fine-grained revision history
- Side-by-side instant content preview that works across your whole site
- Support for block content and the most advanced custom fields capability in the industry
- Webhook-triggered Incremental Static Revalidation; no need to wait for a rebuild to publish new content
- Free Sanity project with unlimited admin users, free content updates, and pay-as-you-go for API overages
- A project with starter-friendly and not too heavy-handed TypeScript and Tailwind.css

## Table of Contents

- [Features](#features)
- [Table of Contents](#table-of-contents)
- [Project Overview](#project-overview)
  - [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Step 1. Set up the project locally](#step-1-set-up-the-project-locally)
  - [Step 2. Run Next.js locally in development mode](#step-2-run-nextjs-locally-in-development-mode)
  - [Step 3. Deploy to production](#step-3-deploy-to-production)
  - [Step 4. Conventional commits](#step-4-conventional-commits)
- [Questions and Answers](#questions-and-answers)
- [Next steps](#next-steps)

## Project Overview

| [Personal Website](https://template-nextjs-personal-website.sanity.build/)                                                | [Studio](https://template-nextjs-personal-website.sanity.build/studio)                                                 |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Personal Website](https://user-images.githubusercontent.com/6951139/206395107-e58a796d-13a9-400a-94b6-31cb5df054ab.png) | ![Sanity Studio](https://user-images.githubusercontent.com/6951139/206395521-8a5f103d-4a0c-4da8-aff5-d2a1961fb2c0.png) |

### Important files and folders

| File(s)                                                    | Description                                             |
| ---------------------------------------------------------- | ------------------------------------------------------- |
| `sanity.config.ts`                                         | Config file for Sanity Studio                           |
| `sanity.cli.ts`                                            | Config file for Sanity CLI                              |
| `/app/studio/[[...tool]]/Studio.tsx`                       | Where Sanity Studio is mounted                          |
| `/app/api/revalidate/route.ts`                             |  Serverless route for triggering ISR                    |
| `/app/api/draft/route.ts`                                  | Serverless route for triggering Draft mode              |
| `/sanity/schemas`                                          | Where Sanity Studio gets its content types from         |
| `/sanity/plugins`                                          | Where the advanced Sanity Studio customization is setup |
| `/sanity/loader/loadQuery.ts`,`/sanity/loader/useQuery.ts` | Configuration for the Sanity Content Lake client        |

## Configuration

### Step 1. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

### Step 2. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your personal website should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 3. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```

### Step 4. Conventional commits

Must be one of the following:

- build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ci: Changes to our CI configuration files and scripts (example - scopes: Travis, Circle, BrowserStack, SauceLabs)
- docs: Documentation only changes
- feat: A new feature
- fix: A bug fix
- perf: A code change that improves performance
- refactor: A code change that neither fixes a bug nor adds a feature
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- test: Adding missing tests or correcting existing

more info: https://www.conventionalcommits.org

## Questions and Answers

## Next steps
