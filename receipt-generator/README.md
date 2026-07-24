# receipt-generator

React app source for [Rent Receipt Generator](https://rent-receipt-generator.vercel.app/).

> See the [root README](../README.md) for full project documentation.

## Available Scripts

From inside this directory (`receipt-generator/`):

### `npm start`

Runs the app in development mode via CRACO.
Open [http://localhost:3000](http://localhost:3000) in your browser.

Hot-reloads on file changes. Lint errors appear in the console.

### `npm run build`

Builds the optimised production bundle into the `build/` folder.

### `npm test`

Launches the test runner in interactive watch mode.

## Dependency Notes

This project uses `--legacy-peer-deps` during install due to a peer dependency mismatch between `@craco/craco@6` and `react-scripts@5`. This is safe and does not affect runtime behaviour.

```bash
npm install --legacy-peer-deps
```
