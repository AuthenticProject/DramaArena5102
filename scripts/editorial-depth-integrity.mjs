import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const app = await readFile('src/App.tsx', 'utf8');
const styles = await readFile('src/design/editorial-experience.css', 'utf8');

const chapterMarkers = [...app.matchAll(/className="da-chapter-break"/g)];
assert.equal(chapterMarkers.length, 7, 'Seven editorial chapter transitions must separate the main content chapters');
for (const chapter of ['THE FOUNDATIONS', 'THE PHILOSOPHY', 'THE IDENTITY', 'THE BROTHERHOOD', 'THE PERFORMANCE', 'THE PEOPLE BEHIND IT', 'THE ARCHIVE']) {
  assert.ok(app.includes(chapter), `Missing chapter label: ${chapter}`);
}
assert.match(styles, /@supports \(animation-timeline: view\(\)\)/, 'Scroll-linked section transition must be feature-detected');
assert.match(styles, /animation-range: entry 0% entry 34%/, 'Section transition must be limited to its entrance range');
assert.match(styles, /prefers-reduced-motion: reduce/, 'Section motion must respect reduced-motion preferences');
assert.match(styles, /da-chapter-break::before/, 'Chapter markers must include ornamental editorial rules');

console.log('Editorial depth integrity passed: 7 chapter markers, progressive section entrances, feature detection and reduced-motion support.');
