// scripts/copy-404.js
import fs from 'fs'
import path from 'path'

const dist = path.resolve('dist')
const indexFile = path.join(dist, 'index.html')
const notFoundFile = path.join(dist, '404.html')

if (fs.existsSync(indexFile)) {
  fs.copyFileSync(indexFile, notFoundFile)
  console.log('Created dist/404.html for SPA fallback')
}
