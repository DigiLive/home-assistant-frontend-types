const fs = require('node:fs');
const path = require('node:path');

const distDir = path.resolve(process.cwd(), 'dist');
const patchesDir = path.resolve(__dirname, '../patches/patches.json');

if (!fs.existsSync(patchesDir)) {
  console.log('No patch file found, skipping.');
  process.exit(0);
}

const patches = require(patchesDir);


// Uncomment below line to define the location to your patches JSON file.
//const patches = require('../patches/boolean-patches.json');

/**
 * Recursively collects all `.d.ts` declaration file paths under a directory.
 *
 * @param {string} dirPath Directory to traverse.
 * @returns {string[]} List of `.d.ts` file paths.
 */
function getDeclarationFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...getDeclarationFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.d.ts')) {
      files.push(fullPath);
    }
  }

  return files;
}

const declarationFiles = getDeclarationFiles(distDir);

if (declarationFiles.length === 0) {
  console.warn(`No .d.ts files found in ${distDir}; skipping type patches.`);
  process.exit(0);
}

for (const patch of patches) {
  let totalReplacements = 0;

  for (const filePath of declarationFiles) {
    const originalContent = fs.readFileSync(filePath, 'utf8');
    if (!originalContent.includes(patch.search)) {
      continue;
    }

    const count = originalContent.split(patch.search).length - 1;
    const updatedContent = originalContent.replaceAll(patch.search, patch.replace);

    fs.writeFileSync(filePath, updatedContent, 'utf8');
    totalReplacements += count;

    const relativePath = path.relative(process.cwd(), filePath);
    console.log(`Patched [${patch.name}] in ${relativePath} (${count} replacement(s)).`);
  }

  if (totalReplacements === 0) {
    console.warn(`No matches found for [${patch.name}]; leaving generated types as-is.`);
  }
}
