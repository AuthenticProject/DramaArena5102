import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const shows = await readFile('src/components/ShowsSection.tsx', 'utf8');
const styles = await readFile('src/design/editorial-experience.css', 'utf8');

assert.match(shows, /role="status" aria-live="polite" aria-atomic="true"/, 'Filter changes must be announced politely');
assert.match(shows, /aria-controls="da-show-results"/, 'Filter controls must identify their results region');
assert.match(shows, /id="da-show-results"/, 'Show results must expose the controlled region id');
assert.match(shows, /decoding="async" fetchPriority="low"/, 'Show artwork must use non-blocking low-priority loading');
assert.match(shows, /<dl className="da-stage-specs">/, 'Stage specifications must use description-list semantics');
assert.match(shows, /<dt><strong>\{value\}<\/strong><\/dt>/, 'Each stage measurement must be a term');
assert.match(shows, /<dd>\{label\}<\/dd>/, 'Each stage measurement must have a description');
assert.match(styles, /\.da-stage-spec dt,\.da-stage-spec dd/, 'Semantic stage terms and descriptions must retain their layout');
assert.match(styles, /\.da-stage-spec dd \{margin-top:5px/, 'Stage descriptions must retain their visual spacing');

console.log('Show archive integrity passed: filter announcements, result linkage, image loading and semantic stage specifications.');
