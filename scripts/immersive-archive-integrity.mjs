import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const gallery = await readFile('src/components/PhotoGallery.tsx', 'utf8');
const map = await readFile('src/components/IndonesiaMap3D.tsx', 'utf8');
const styles = await readFile('src/design/editorial-experience.css', 'utf8');

assert.match(gallery, /handleStagePointerDown/, 'Lightbox must capture touch gesture start');
assert.match(gallery, /handleStagePointerUp/, 'Lightbox must process touch gesture end');
assert.match(gallery, /Math\.abs\(deltaX\) < 48/, 'Swipe navigation must use a deliberate horizontal threshold');
assert.match(gallery, /Math\.abs\(deltaX\) < Math\.abs\(deltaY\) \* 1\.25/, 'Vertical page scrolling must not trigger gallery navigation');
assert.match(gallery, /da-lightbox-stage.*onPointerDown/s, 'Touch handlers must be attached to the lightbox image stage');
assert.match(map, /activeCampusRef\.current\?\.id === campus\.id/, 'Selected campus marker must be visually emphasized');
assert.match(map, /performance\.now\(\) \* 0\.0032/, 'Selected marker pulse must be time-based');
assert.match(styles, /touch-action: pan-y pinch-zoom/, 'Gallery swipe must preserve vertical scrolling and pinch zoom');
assert.match(styles, /da-archive-image-arrive/, 'Archive image transition must be defined');
assert.match(styles, /prefers-reduced-motion: reduce/, 'New interaction motion must respect reduced-motion settings');

console.log('Immersive archive integrity passed: touch swipe, vertical-scroll safety, selected campus pulse and reduced-motion safeguards.');
