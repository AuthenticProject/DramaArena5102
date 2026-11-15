import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const hero = await readFile('src/components/HeroSection.tsx', 'utf8');
const styles = await readFile('src/design/editorial-experience.css', 'utf8');

assert.match(hero, /role="group" aria-label="Pilih variasi lambang resmi"/, 'Emblem selector must have an accessible group label');
assert.equal((hero.match(/aria-pressed=\{activeHeroTab ===/g) || []).length, 2, 'Both emblem choices must expose their pressed state');
assert.equal((hero.match(/aria-controls="hero-emblem-display"/g) || []).length, 2, 'Both choices must reference the emblem display');
assert.match(hero, /id="hero-emblem-display"/, 'The controlled emblem display must have a stable id');
assert.match(hero, /alt="Lambang ombak resmi Drama Arena 5102"/, 'Wave artwork must have descriptive alternative text');
assert.match(hero, /alt="Monogram DA resmi Drama Arena 5102"/, 'Monogram artwork must have descriptive alternative text');
assert.match(styles, /\[aria-controls="hero-emblem-display"\]\[aria-pressed="true"\]/, 'Selected emblem control must have a visible active state');
assert.match(styles, /\[aria-controls="hero-emblem-display"\]:focus-visible/, 'Keyboard focus must be visible');
assert.match(styles, /prefers-reduced-motion: reduce/, 'Emblem transitions must respect reduced motion');

console.log('Hero identity accessibility integrity passed: labelled controls, state semantics, descriptive artwork and keyboard focus.');
