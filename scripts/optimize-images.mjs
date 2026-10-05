// One-off/repeatable: shrinks every JPG/PNG in public/images in place (same filenames,
// so no code references change). Only overwrites when the result is smaller.
import sharp from 'sharp';
import { readdir, stat, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';

const DIR = 'public/images';
const MAX_W = 1920;
let before = 0, after = 0, changed = 0;

for (const f of await readdir(DIR)) {
  const ext = path.extname(f).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
  const p = path.join(DIR, f);
  const size = (await stat(p)).size;
  before += size;
  const buf = await readFile(p);
  let img = sharp(buf, { failOn: 'none' }).rotate().resize({ width: MAX_W, withoutEnlargement: true });
  img = ext === '.png'
    ? img.png({ compressionLevel: 9, palette: true, quality: 85, effort: 8 })
    : img.jpeg({ quality: 78, mozjpeg: true });
  const out = await img.toBuffer();
  if (out.length < size) { await writeFile(p, out); after += out.length; changed++; }
  else after += size;
}
const mb = (n) => (n / 1048576).toFixed(1) + ' MB';
console.log(`optimized ${changed} files: ${mb(before)} -> ${mb(after)}`);
