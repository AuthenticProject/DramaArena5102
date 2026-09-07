const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, 'Draft 1 Drama Arena 5012 Ajuan Gontor 1, 24 Juli 2026.pdf');

console.log('Reading PDF:', pdfPath);
const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
    console.log('Number of pages:', data.numpages);
    console.log('Info:', data.info);
    console.log('Metadata:', data.metadata);
    fs.writeFileSync(path.join(__dirname, 'draft_extracted_text.txt'), data.text);
    console.log('Text extracted successfully! Total chars:', data.text.length);
}).catch(function(err) {
    console.error('Error parsing PDF:', err);
});
