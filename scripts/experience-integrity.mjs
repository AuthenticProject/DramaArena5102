import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const audioPlayer = await readFile('src/components/AudioPlayer.tsx', 'utf8');

assert.match(audioPlayer, /preload="none"/, 'The soundtrack must not preload before the visitor requests playback');
assert.doesNotMatch(audioPlayer, /autoplay(?:\s|=|>)/i, 'The soundtrack must never autoplay');
assert.doesNotMatch(audioPlayer, /addEventListener\(['"](?:click|touchstart)['"]/, 'Playback must not be triggered by unrelated page interactions');
assert.match(audioPlayer, /audio\.play\(\)/, 'The play control must start playback');
assert.match(audioPlayer, /audio\.pause\(\)/, 'The pause control must stop playback');
assert.match(audioPlayer, /onPlay=\{\(\) => setIsPlaying\(true\)\}/, 'The player state must follow native playback events');
assert.match(audioPlayer, /onPause=\{\(\) => setIsPlaying\(false\)\}/, 'The player state must follow native pause events');
assert.match(audioPlayer, /aria-pressed=\{isPlaying\}/, 'The play control must expose its pressed state');
assert.match(audioPlayer, /aria-pressed=\{isMuted\}/, 'The mute control must expose its pressed state');
assert.equal((audioPlayer.match(/min-h-\[44px\] min-w-\[44px\]/g) ?? []).length, 2, 'Both audio controls must meet the 44px touch target');

console.log('Experience integrity passed: opt-in audio, deferred media loading, native playback state, accessible controls and touch targets.');
