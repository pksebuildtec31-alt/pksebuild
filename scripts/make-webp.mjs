// Creates .webp siblings for the images used as CSS backgrounds (next/image can't optimize those).
import sharp from 'sharp';
import { access } from 'node:fs/promises';
const files = process.argv.slice(2);
for (const f of files) {
  const out = f.replace(/\.(jpe?g|png)$/i, '.webp');
  await sharp(f, { failOn: 'none' }).resize({ width: 1920, withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
  console.log(out);
}
