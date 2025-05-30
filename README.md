# URLs to Test the Apps

Deployment Status : [![Netlify Status](https://api.netlify.com/api/v1/badges/a2ade46d-abfd-4aa1-8d1f-6496a72ac851/deploy-status)](https://app.netlify.com/sites/clevertap-sdk-test/deploys)

1. Static : https://clevertap-sdk-test.netlify.app/?region=eu1&accountId={accountID}&token={token}
2. Reac SPA : https://clevertap-sdk-test.netlify.app/spa?region=eu1&accountId={accountID}&token={token}

### How to test locally

1. Static Pages
   - Run ` npx http-server staticPages -p 8080` in the root directory
   - Open `http://localhost:8080` in your browser
   - Test all the static pages
2. SPA
   - Run ` npm run dev` in the root directory
   - Open ` http://localhost:5173/spa` in your browser
   - Test different Use cases from /usecases route

### How to deploy to Netlify

1. Fork this repo
2. Go to Netlify and create a new site
3. Connect your GitHub account
4. Select the forked repo
5. Select the branch you want to deploy
6. Click on Deploy
7. Wait for the deployment to complete
8. Go to the site URL and test
9. Note all the staticPages would be directly available in the website due to the vite.config.js configuration
10. The SPA App would be available at the /spa route

### Pages

1. /spa : SPA App
2. /customWebInbox : Custom Web Inbox
3. / : All Basic Events and Lifecycle
4. / : Web Inbox

### Testing

1. Install VSCode Extension for Playwright : https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

2. Use the test section in the sidebar to do the testing

![alt text](assets/image.png)

```bash
  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.
```
