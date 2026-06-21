const fs = require('fs');
const path = require('path');
const outDir = path.join(process.env.USERPROFILE || 'C:\\Users\\mauri', 'EDself', 'agent', 'output');
fs.mkdirSync(outDir, { recursive: true });
const timestamp = new Date();
const pad = (n) => String(n).padStart(2, '0');
const ts = `${timestamp.getFullYear()}${pad(timestamp.getMonth()+1)}${pad(timestamp.getDate())}-${pad(timestamp.getHours())}${pad(timestamp.getMinutes())}${pad(timestamp.getSeconds())}`;
let mod = null;
let playwrightVersion = null;
try { mod = require('playwright'); } catch (e) { /* ignore */ }
if (mod && typeof mod.chromium !== 'undefined') {
  playwrightVersion = 'installed';
} else {
  playwrightVersion = 'missing';
}
const report = {
  generatedAt: timestamp.toISOString(),
  timestamp,
  summary: {
    playwrightInstalled: Boolean(mod),
    playwrightVersion,
    remoteDevServer: 'Chrome browser launch blocked in browser tool on this host',
  },
  projects: {
    princessmel_boutique: {
      root: 'C:\\Users\\mauri\\Desktop\\Princessmel-boutique',
      url: 'http://localhost:3000',
      screenshot: null,
      layoutIssues: null,
      consoleErrors: null,
      notes: 'Localhost porta 3000 em uso, mas lançamento do browser bloqueado pelo ambiente; sem screenshot.'
    },
    retailflow_dashboard: {
      root: 'C:\\Users\\mauri\\Desktop\\retailflow-dashboard-v1',
      url: 'http://localhost:5173',
      screenshot: null,
      layoutIssues: null,
      consoleErrors: null,
      notes: 'Vite dev server presumido em 5173; browser bloqueado.'
    },
    barberflow: {
      root: 'C:\\Users\\mauri\\Desktop\\Barberflow',
      url: 'http://localhost:3001',
      screenshot: null,
      layoutIssues: null,
      consoleErrors: null,
      notes: 'Porta 3001 em uso; browser bloqueado.'
    },
    mjr_forge_portfolio: {
      root: 'C:\\Users\\mauri\\Desktop\\mjr-forge-portfolio',
      url: 'http://localhost:3000',
      screenshot: null,
      layoutIssues: null,
      consoleErrors: null,
      notes: 'Projeto Next coringa em 3000; browser bloqueado.'
    },
    fillmaker: {
      root: null,
      url: null,
      screenshot: null,
      layoutIssues: null,
      consoleErrors: null,
      notes: 'Projeto não encontrado no workspace; verifique nome/caminho.'
    }
  }
};
const outPath = path.join(outDir, `visual-qa-${ts}.md`);
fs.writeFileSync(outPath, '');
module.exports = { outPath };
