const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFolder = 'images/';
const outputFolder = 'resized/';
const sizes = [
  { width: 800, height: 600 },
  { width: 400, height: 300 },
  { width: 200, height: 80 }
];

fs.readdirSync(inputFolder).forEach(file => {
  if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
    sizes.forEach(size => {
      const sizeFolder = `w${size.width}-h${size.height}`;
      const outputPath = path.join(outputFolder, sizeFolder);
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
      }

      const fileName = path.parse(file).name; // Without extension

      // 🔁 Resize and save as WebP
      sharp(`${inputFolder}/${file}`)
        .resize(size.width, size.height)
        .toFormat('webp')
        .toFile(`${outputPath}/${fileName}.webp`)
        .then(() => console.log(`✅ ${fileName} resized to ${size.width}x${size.height} as WebP`))
        .catch(err => console.error(`❌ Error resizing ${file}:`, err));
    });
  }
});
