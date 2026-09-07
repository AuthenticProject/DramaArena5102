const fs = require('fs');
const path = require('path');

function getJpegDimensions(buffer) {
  let i = 0;
  if (buffer[0] !== 0xFF || buffer[1] !== 0xD8) return null;
  i += 2;
  while (i < buffer.length) {
    if (buffer[i] !== 0xFF) break;
    const marker = buffer[i + 1];
    i += 2;
    if (marker === 0xD9 || marker === 0xDA) break; // EOI or SOS
    const length = buffer.readUInt16BE(i);
    // SOF0 (0xC0) to SOF2 (0xC2)
    if ((marker >= 0xC0 && marker <= 0xC3) || (marker >= 0xC5 && marker <= 0xC7) || (marker >= 0xC9 && marker <= 0xCB) || (marker >= 0xCD && marker <= 0xCF)) {
      const height = buffer.readUInt16BE(i + 3);
      const width = buffer.readUInt16BE(i + 5);
      return { width, height };
    }
    i += length;
  }
  return null;
}

const dir = path.join(__dirname, 'public', 'extracted_assets');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).sort();
const summary = [];

for (const file of files) {
  const p = path.join(dir, file);
  const buf = fs.readFileSync(p);
  const dim = getJpegDimensions(buf);
  summary.push({
    file,
    sizeKB: Math.round(buf.length / 1024),
    width: dim ? dim.width : 0,
    height: dim ? dim.height : 0
  });
}

console.log(JSON.stringify(summary, null, 2));
