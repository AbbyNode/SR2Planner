# Fork of SLIME RANCHER 2 PLANNER

Changes made:

* Containerized the application
* Plot positioning is now relative to the parent area, not to the whole page
* GitHub Actions workflow for automatic deployment to GitHub Pages

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### GitHub Pages Setup

To enable GitHub Pages deployment, you need to configure the repository settings:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
4. Save the settings

Once configured, every push to the `main` branch will trigger the deployment workflow automatically.

### Manual Deployment

If you need to deploy manually, you can also use:

```bash
npm run deploy
```

This uses the `gh-pages` package to deploy the build folder directly.

### Viewing Your Site

After deployment completes, your site will be available at:
- https://SR2Planner.github.io/SR2Planner (or your configured homepage URL)
