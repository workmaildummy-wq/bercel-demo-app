# Bercel Demo Application

This repository is the controlled static deployment target for Bercel. It is a small React, Vite, and TypeScript application with no backend or runtime credentials.

```bash
npm ci
npm run typecheck
npm run build
```

The production output is written to `dist/`. Vite uses relative asset URLs so the site works beneath Bercel's immutable `/deployments/<deployment-id>/` prefix.

`buildspec.yml` defines the repository-root CodeBuild contract used by Bercel.
