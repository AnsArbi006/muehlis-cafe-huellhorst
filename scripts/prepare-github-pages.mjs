import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist/client');
const basePath = '/muehlis-cafe-huellhorst';

async function rewriteHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(entries.map(async (entry) => {
    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return rewriteHtml(filePath);
    if (!entry.name.endsWith('.html')) return;

    const html = await readFile(filePath, 'utf8');
    const rewritten = html.replace(/\b(href|src)="\/(?!\/)/g, `$1="${basePath}/`);
    await writeFile(filePath, rewritten);
  }));
}

await rewriteHtml(outputDirectory);
