const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const outputDir = path.join(__dirname, 'public', 'extracted_pages');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const pdfPath = path.join(__dirname, 'Draft 1 Drama Arena 5012 Ajuan Gontor 1, 24 Juli 2026.pdf');
  const buf = fs.readFileSync(pdfPath);
  console.log('PDF read, size:', (buf.length / (1024 * 1024)).toFixed(2), 'MB');

  const parser = new PDFParse({ data: buf });
  const doc = await parser.load();
  console.log('Total pages:', doc.numPages);

  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const ops = await page.getOperatorList();
    console.log(`Page ${p}: ops = ${ops.fnArray.length}`);
    
    // Find image objects
    for (let i = 0; i < ops.fnArray.length; i++) {
      const fn = ops.fnArray[i];
      // Check paintImageXObject (usually 85 or similar in pdfjs)
      if (ops.argsArray[i] && ops.argsArray[i][0] && typeof ops.argsArray[i][0] === 'string' && ops.argsArray[i][0].startsWith('g_') || ops.argsArray[i][0].startsWith('img_')) {
        const imgName = ops.argsArray[i][0];
        console.log(`  Found potential image ${imgName} on page ${p}`);
      }
    }
  }
  await parser.destroy();
})();
