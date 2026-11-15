import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const fadeIn = await readFile('src/components/FadeIn.tsx', 'utf8');
const motionStyles = await readFile('src/design/editorial-experience.css', 'utf8');
const entry = await readFile('src/main.tsx', 'utf8');

assert.match(fadeIn, /useReducedMotion/, 'Scroll reveal must respect reduced-motion preferences');
assert.match(fadeIn, /viewport=\{\{ once: true/, 'Scroll reveal must run once rather than replay on every scroll');
assert.match(fadeIn, /amount: 0\.18/, 'Scroll reveal must wait until a meaningful part of the element is visible');
assert.match(motionStyles, /@media \(prefers-reduced-motion: reduce\)/, 'Editorial motion must provide reduced-motion overrides');
assert.match(motionStyles, /@keyframes da-stage-light/, 'Hero stage lighting animation must be defined');
assert.match(motionStyles, /@keyframes da-title-arrive/, 'Hero title entrance animation must be defined');
assert.match(motionStyles, /@media \(max-width: 767px\)/, 'Motion refinements must include a mobile breakpoint');
assert.match(entry, /editorial-experience\.css/, 'Editorial motion stylesheet must be loaded by the application');

console.log('Visual experience integrity passed: scroll reveal, reduced motion, cinematic hero motion, responsive overrides and stylesheet loading.');
