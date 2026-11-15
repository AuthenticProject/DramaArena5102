import assert from 'node:assert/strict';
import { access, readdir } from 'node:fs/promises';

const referenceDirectory = 'public/referensi';
const canonicalReferences = [
  'slide-01-main-concept.jpg',
  'slide-02-ide-pokok.jpg',
  'slide-03-tema.jpg',
  'slide-04-moto.jpg',
  'slide-05-main-branding.jpg',
  'slide-06-logo.jpg',
  'slide-07-philosophy-wave.jpg',
  'slide-08-philosophy-monogram.jpg',
  'slide-09-typografi.jpg',
  'slide-10-color-palette.jpg',
  'slide-11-font.jpg',
  'slide-12-key-visual.jpg',
];

for (const filename of canonicalReferences) {
  await access(`${referenceDirectory}/${filename}`);
}

const publicReferences = await readdir(referenceDirectory);
const duplicateExports = publicReferences.filter((filename) =>
  /^WhatsApp Image 2026-11-12 at 19\\.50\\./.test(filename)
);

assert.deepEqual(
  duplicateExports,
  [],
  'Original WhatsApp-named exports must not be duplicated beside the canonical slide assets'
);

console.log(`Public asset integrity passed: ${canonicalReferences.length} canonical reference images retained; duplicate public exports absent.`);
