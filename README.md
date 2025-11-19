# ꩜ Ensorcelled Expressions
Showcase website and content managment for a handmade ceramic art gallery.

This repository contains the full codebase for Ensorcelled Expressions, including:
- Next.js gallery website
- Sanity Studio CMS
- Shared configuration and workspace management

This repo is structured as a npm workspace monorepo for simplicity, shared dependencies, and smoother development.



# 🗂️ Repository Structure

```
/
├── ensorcelled-expressions-gallery   # Next.js website (deployed to Vercel)
│
├── ensorcelled-expressions-cms       # Sanity Studio (locally run to manage content)
│
├── package.json                      # Workspace root config
└── README.md
```


# 🚀 Technologies

Frontend
- Next.js
- React
- Tailwind CSS
- TypeScript
- Framer Motion (animation library)

CMS
- Sanity v3 Studio

Tooling
- npm workspaces (monorepo)
- ESLint
- TypeScript
- Vercel (deployment)



# 📦 Setup

This repository uses npm workspaces to manage the two applications under a single top-level configuration.

Root package.json:
- defines the workspace projects
- provides shared dev scripts
- contains the unified node_modules



## 🛠️ Install Dependencies

At the root of the repo:

`npm install`

This installs dependencies for both the Next.js site and the Sanity Studio.



# 🏃 Development

Run the gallery website

`npm run dev:site`

Runs the Next.js development server:

http://localhost:3000




Run the Sanity Studio

`npm run dev:cms`

Runs the Sanity Studio locally:

http://localhost:3333




## 🏗️ Build Commands

Build the website:

`npm run build:site`

Build the CMS:

`npm run build:cms`


# 🚀 Deployment

## Next.js Gallery (Primary Site)

The `ensorcelled-expressions-site` project is deployed through Vercel.

When setting up the project in Vercel:
- Project Directory: `ensorcelled-expressions-site`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: `.next`

Vercel automatically handles workspace-based installs.

## Sanity CMS (Content Managent Interface)

This is only meant to be run locally, as it's purpose is to modify and add content for the site.
It could be hosted, but that is out of the scope for this project.

# 🔐 Environment Variables

Create the following files as needed:

- ensorcelled-expressions-gallery/.env.local
- ensorcelled-expressions-cms/.env.local

Common variables include:

- `NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx`
- `NEXT_PUBLIC_SANITY_DATASET=production`
- `SANITY_API_READ_TOKEN=xxxx`
- `SANITY_WRITE_TOKEN=xxxx` (Studio only)

Don't commit these to Git.

# 📁 Git Ignore Rules

The root .gitignore excludes:
- environment files
- Node modules
- Next.js build output
- Sanity build output
- OS junk files (.DS_Store)

# 🧰 Scripts Summary

Script	Description
`npm run dev:gallery`: Run Next.js dev server  
`npm run dev:cms`: Run Sanity Studio dev server  
`npm run build:gallery`: Build the Next.js site  
`npm run build:cms`: Build the Sanity Studio  
`npm install`: Install all workspace deps  


# 📖 Useful Things of Note
- The CMS and website share the same Git repository but operate independently.
- The CMS is meant to be run locally only. It's purpose is to easily add and manage content for the site.
- Vercel automatically supports npm workspaces — no special config needed.
