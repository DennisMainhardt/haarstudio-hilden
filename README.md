# Haarstudio Hava Sarikaya

A modern web application built with Vite, React, TypeScript, and Shadcn UI.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Key Technologies](#key-technologies)
- [Editing the Code](#editing-the-code)
- [Deployment](#deployment)
- [Connecting a Custom Domain](#connecting-a-custom-domain)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: We recommend using the latest LTS version or v20+. You can use [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager) to manage multiple Node.js versions.
- **npm** (or **yarn**): Comes bundled with Node.js.

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_GIT_REPOSITORY_URL>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd celine
    ```
    _(Replace `celine` with the actual directory name if different)_
3.  **Install dependencies:**
    ```bash
    npm install
    ```
    _(Or `yarn install` if you prefer Yarn)_

## Available Scripts

In the project directory, you can run the following commands:

-   **`npm run dev`**: Starts the development server with hot-reloading at `http://localhost:8080` (or the next available port).
-   **`npm run build`**: Bundles the app into static files for production in the `dist` folder.
-   **`npm run build:dev`**: Bundles the app using the development configuration (useful for debugging production builds).
-   **`npm run lint`**: Lints the codebase using ESLint to check for code style issues and potential errors.
-   **`npm preview`**: Serves the production build locally to preview it before deployment.

## Key Technologies

This project utilizes the following core technologies:

-   [Vite](https://vitejs.dev/): Next-generation frontend tooling.
-   [React](https://react.dev/): A JavaScript library for building user interfaces.
-   [TypeScript](https://www.typescriptlang.org/): Typed JavaScript at scale.
-   [Shadcn UI](https://ui.shadcn.com/): Beautifully designed components built with Radix UI and Tailwind CSS.
-   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework.
-   [React Router](https://reactrouter.com/): Declarative routing for React applications.

## Editing the Code

You have several options for editing the codebase:

**1. Use your preferred IDE:**
   - Work locally after following the [Installation](#installation) steps.
   - Commit and push your changes to the Git repository.

**2. Use an AI Coding Assistant:**
   - Utilize an AI pair programmer directly within your IDE or environment.
   - Changes might be automatically managed depending on the assistant's integration.

**3. Edit directly on GitHub:**
   - Navigate to files in the GitHub repository.
   - Use the "Edit" button (pencil icon).
   - Commit changes directly through the web interface.

**4. Use GitHub Codespaces:**
   - Launch a cloud-based development environment directly from the repository ("Code" > "Codespaces" > "New codespace").
   - Edit, commit, and push from within the Codespace.

## Deployment

Deployment methods vary depending on your chosen hosting provider. Popular options for static sites include:

-   [Vercel](https://vercel.com/)
-   [Netlify](https://www.netlify.com/)
-   [GitHub Pages](https://pages.github.com/)
-   [Cloudflare Pages](https://pages.cloudflare.com/)

Consult your provider's documentation for deploying Vite-based React applications (usually involves connecting your Git repository and configuring build settings). The build output is typically generated in the `dist` directory by the `npm run build` command.

## Connecting a Custom Domain

Most hosting providers offer a way to connect a custom domain to your deployed application. Refer to your provider's documentation for specific instructions, which usually involve updating DNS records (e.g., CNAME or A records) with your domain registrar.
