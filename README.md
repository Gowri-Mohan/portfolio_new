
# Gowri Mohan's Portfolio

This is a portfolio website built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js and npm (or yarn) installed on your machine.
- A GitHub account.

### Installation

1.  **Clone the repository (or download the source code):**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    This will start a local server, usually at `http://localhost:3000`.
    ```bash
    npm run start
    ```

## How to Deploy to GitHub Pages

This project is set up to be easily deployed as a static site on GitHub Pages.

### Step 1: Install `gh-pages`

This is a development dependency that helps in publishing files to a `gh-pages` branch on GitHub.

```bash
npm install gh-pages --save-dev
```

### Step 2: Update `package.json`

You need to add a few properties to your `package.json` file.

1.  **Add a `homepage` property:**
    At the top level of your `package.json`, add a `homepage` field. The format should be `https://{username}.github.io/{repo-name}`. Replace `{username}` with your GitHub username and `{repo-name}` with your repository name.

    ```json
    "homepage": "https://your-username.github.io/your-repo-name",
    ```

2.  **Add `predeploy` and `deploy` scripts:**
    In the `scripts` section of your `package.json`, add the following scripts:

    ```json
    "scripts": {
      // ... other scripts like start, build, test, eject
      "predeploy": "npm run build",
      "deploy": "gh-pages -d build"
    }
    ```

    Your `package.json` should look something like this:

    ```json
    {
      "name": "portfolio",
      "version": "0.1.0",
      "private": true,
      "homepage": "https://your-username.github.io/your-repo-name",
      "dependencies": {
        // ...
      },
      "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject",
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      },
      // ...
    }
    ```

### Step 3: Deploy the Application

Now, you can deploy your application by running a single command:

```bash
npm run deploy
```

This command will first run the `predeploy` script, which creates a `build` folder with the static, production-ready version of your app. Then, the `deploy` script will push the contents of that `build` folder to a new `gh-pages` branch in your GitHub repository.

### Step 4: Configure GitHub Repository Settings

1.  Go to your repository on GitHub.
2.  Click on the **Settings** tab.
3.  In the left sidebar, click on **Pages**.
4.  Under the "Build and deployment" section, for the **Source**, select `Deploy from a branch`.
5.  Set the branch to **`gh-pages`** and the folder to **`/(root)`**.
6.  Click **Save**.

GitHub will now publish your site. It might take a few minutes for the changes to go live. You can find the URL for your live site in this same settings page. It should match the `homepage` URL you set in `package.json`.

That's it! Your portfolio is now live on GitHub Pages.
