const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'images');

const files = ['frontend_3d.png', 'iot_3d.png'];

async function optimizeImages() {
  for (const file of files) {
    const input = path.join(dir, file);
    if (!fs.existsSync(input)) {
      console.log(`Skipping ${file} - not found`);
      continue;
    }
    const output = path.join(dir, file.replace('.png', '.webp'));
    
    console.log(`Processing ${file}...`);
    try {
      await sharp(input)
        .resize({ width: 400 }) // Resize to 400px width
        .webp({ quality: 80 }) // Compress with WebP
        .toFile(output);
      console.log(`Saved ${output}`);
    } catch (e) {
      console.error(`Error processing ${file}:`, e);
    }
  }
}

optimizeImages();
