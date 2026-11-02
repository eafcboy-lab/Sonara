# SONARA — free starter project

SONARA is a beginner-friendly, installable web app prototype designed to feel like an iPhone music app.

## What works in this starter
- Custom dark interface with Home, Search, Library and Settings.
- Search opens YouTube Music search results in the browser/app.
- Installable PWA structure and basic offline caching.
- No paid libraries, API keys or subscriptions required.

## Important limitations
This starter does **not** sign in to or synchronise a YouTube Music Premium account. Google does not provide a public API for a third-party app to fully control a user's YouTube Music library and playback. The app opens YouTube Music search links instead. Do not enter your Google password into this app.

## Publish free with GitHub Pages
1. Create a free GitHub account at https://github.com if you don't already have one.
2. On GitHub, create a new **public** repository named `sonara`.
3. Upload all files and folders from this project (keep the folder structure).
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch `main`, folder `/ (root)`, then Save.
7. Wait for GitHub Pages to publish. Your address will look like `https://YOUR-USERNAME.github.io/sonara/`.

## Install on iPhone
1. Open the published HTTPS address in **Safari** on your iPhone.
2. Tap Share (square with arrow).
3. Choose **Add to Home Screen**.
4. Name it SONARA and tap Add.

## Edit locally on Windows
You can edit the files in Visual Studio Code (free) or Notepad. For local preview, install the free Node.js LTS version and run:
```bash
npx serve .
```
Then open the local address on your PC. For iPhone installation, publish it over HTTPS using GitHub Pages.

## Next development steps
- Replace sample tiles with real metadata/search using a permitted provider.
- Add a properly licensed lyrics source if desired.
- Add more theme options and user-controlled settings.
- Investigate official YouTube embedded-player capabilities and their restrictions before adding playback.
