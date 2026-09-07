const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, 'Draft 1 Drama Arena 5012 Ajuan Gontor 1, 24 Juli 2026.pdf');
const outDir = path.join(__dirname, 'public', 'extracted_assets');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Reading PDF buffer...');
const buf = fs.readFileSync(pdfPath);
console.log('Searching for JPEG images in PDF...');

let pos = 0;
let imgIndex = 0;
const results = [];

while (pos < buf.length) {
  // Find next \xFF\xD8\xFF (JPEG Start of Image)
  const soi = buf.indexOf(Buffer.from([0xFF, 0xD8, 0xFF]), pos);
  if (soi === -1) break;

  // Check if preceded closely by 'stream'
  const streamIdx = buf.lastIndexOf(Buffer.from('stream'), soi);
  if (streamIdx !== -1 && (soi - streamIdx) <= 16) {
    // Find matching \xFF\xD9 (JPEG End of Image)
    let eoi = buf.indexOf(Buffer.from([0xFF, 0xD9]), soi + 3);
    if (eoi !== -1) {
      // Sometimes multiple 0xFF 0xD9 inside, look for endstream nearby
      const endstreamIdx = buf.indexOf(Buffer.from('endstream'), eoi);
      if (endstreamIdx !== -1 && (endstreamIdx - eoi) <= 32) {
        const jpegData = buf.subarray(soi, eoi + 2);
        imgIndex++;
        const filename = `extracted_img_${String(imgIndex).padStart(2, '0')}.jpg`;
        const filePath = path.join(outDir, filename);
        fs.writeFileSync(filePath, jpegData);
        console.log(`Saved ${filename}: size ${(jpegData.length / 1024).toFixed(1)} KB`);
        results.push({ name: filename, size: jpegData.length, path: filePath });
        pos = endstreamIdx + 9;
        continue;
      }
    }
  }
  pos = soi + 3;
}

console.log(`Extracted ${results.length} JPEG images total!`);
fs.writeFileSync(path.join(__dirname, 'extracted_manifest.json'), JSON.stringify(results, null, 2));
