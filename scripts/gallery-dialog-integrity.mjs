import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const gallery = await readFile('src/components/PhotoGallery.tsx', 'utf8');

const required = [
  ['role="dialog"', 'The lightbox must expose dialog semantics'],
  ['aria-modal="true"', 'The lightbox must be announced as modal'],
  ['aria-labelledby="da-lightbox-title"', 'The dialog must have an accessible title'],
  ['aria-describedby="da-lightbox-description"', 'The dialog must reference its description'],
  ['id="da-lightbox-title"', 'The title must be associated with the dialog'],
  ['id="da-lightbox-description"', 'The description must be associated with the dialog'],
  ['role="status" aria-live="polite" aria-atomic="true"', 'Gallery navigation must be announced politely'],
  ["document.querySelector<HTMLElement>('.da-lightbox[role=\"dialog\"]')", 'The focus trap must target the dialog'],
  ["if (event.key === 'Escape') close()", 'Escape must close the dialog'],
  ["if (event.key === 'ArrowRight') move(1)", 'Right arrow must navigate forward'],
  ["if (event.key === 'ArrowLeft') move(-1)", 'Left arrow must navigate backward'],
  ['previousFocus?.focus()', 'Closing the dialog must restore focus'],
];

for (const [needle, message] of required) assert.ok(gallery.includes(needle), message);

console.log('Gallery dialog integrity passed: modal semantics, accessible naming, live navigation, keyboard controls and focus restoration.');
