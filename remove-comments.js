const fs = require('fs');
const path = require('path');

function removeCommentsFromFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  content = content.replace(/\/\/.*$/gm, '');
  content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
  content = content.replace(/^\s*[\r\n]/gm, (match, offset, string) => {
    const prevLine = string.slice(0, offset).split('\n').pop();
    const nextLine = string.slice(offset).split('\n')[1] || '';
    if (prevLine.trim() && nextLine.trim()) {
      return '\n';
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Cleaned: ${filePath}`);
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      removeCommentsFromFile(filePath);
    }
  });
}

const componentsDir = path.join(__dirname, 'src', 'components');
processDirectory(componentsDir);
console.log('All comments removed!');
