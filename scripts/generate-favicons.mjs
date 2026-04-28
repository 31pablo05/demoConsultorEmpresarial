// scripts/generate-favicons.mjs
// Ejecutar con: node scripts/generate-favicons.mjs
// Requiere: npm install sharp

import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const svgPath = resolve('./public/imagenes/logo/logonogoli.svg');
const svgBuffer = readFileSync(svgPath);

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(svgBuffer)
    .resize(size, size)
    .png()
    .toFile(resolve(`./public/${name}`));
  console.log(`✅ Generado: ${name} (${size}x${size})`);
}

console.log('\n🎉 Todos los favicons generados en /public/');
