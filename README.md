# Respect Environment Group - Website

> This project is developed using Sanity.io and Next.js.

[Website](https://reg-website.vercel.app/) | [Studio](https://reg-website.vercel.app/studio) | [Storybook](https://main--65ff5460db6da88bf739e2ca.chromatic.com/)

## Project Overview

| [Personal Website](https://reg-website.vercel.app/)                                                                       | [Studio](https://reg-website.vercel.app/studio)                                                                        |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| ![Personal Website](https://user-images.githubusercontent.com/6951139/206395107-e58a796d-13a9-400a-94b6-31cb5df054ab.png) | ![Sanity Studio](https://user-images.githubusercontent.com/6951139/206395521-8a5f103d-4a0c-4da8-aff5-d2a1961fb2c0.png) |

## Configuration

### Step 1. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

### Step 2. Run locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

The website should be up and running on [http://localhost:3000](http://localhost:3000)

You can create and edit content on [http://localhost:3000/studio](http://localhost:3000/studio).
