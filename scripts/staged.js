#!/usr/bin/env node
/**
 * Generate a copyable conventional commit message (type(scope): description)
 * from currently staged files. Run: npm run staged
 */

const { execSync } = require('child_process');

function getStagedFiles() {
  try {
    const out = execSync('git diff --staged --name-only', { encoding: 'utf-8' });
    return out.trim() ? out.trim().split('\n') : [];
  } catch {
    return [];
  }
}

function getStagedDiff() {
  try {
    return execSync('git diff --staged', { encoding: 'utf-8' });
  } catch {
    return '';
  }
}

function pathToScope(path) {
  const base = path.replace(/^(app|components|lib|styles|scripts)\//, '').replace(/\.[^.]+$/, '');
  const noSuffix = base.replace(/(Section|Page|Component)$/i, '');
  const parts = noSuffix.split('/').filter(Boolean);
  const scope = (parts.length > 1 ? parts[parts.length - 1] : noSuffix).replace(/\//g, '-').toLowerCase();
  return scope || 'app';
}

function inferType(diff, paths) {
  const d = diff.toLowerCase();
  const pathStr = paths.join(' ').toLowerCase();
  if (d.includes('fix') || d.includes('bug') || pathStr.includes('fix')) return 'fix';
  if (d.includes('style') || d.includes('className') || d.includes('css') || d.includes('rounded') || d.includes('bg-') || d.includes('border')) return 'style';
  if (d.includes('feat') || d.includes('add') || pathStr.includes('feat')) return 'feat';
  if (d.includes('refactor') || pathStr.includes('refactor')) return 'refactor';
  if (d.includes('test')) return 'test';
  if (d.includes('docs') || pathStr.includes('readme') || pathStr.includes('.md')) return 'docs';
  if (d.includes('chore') || pathStr.includes('config')) return 'chore';
  return 'fix';
}

function inferDescription(diff, paths) {
  const d = diff.toLowerCase();
  if (d.includes('style') || d.includes('className') || d.includes('rounded') || d.includes('bg-')) return 'update styling';
  if (d.includes('fix') || d.includes('bug')) return 'fix issue';
  if (d.includes('add')) return 'add feature';
  const scope = pathToScope(paths[0] || '');
  return `update ${scope.replace(/-/g, ' ')}`;
}

function main() {
  const files = getStagedFiles();
  if (files.length === 0) {
    console.log('No staged files. Stage files with: git add <files>');
    process.exit(1);
  }

  const diff = getStagedDiff();
  const scope = pathToScope(files[0]);
  const type = inferType(diff, files);
  const description = inferDescription(diff, files);

  const msg = `${type}(${scope}): ${description}`;
  console.log('\n' + msg + '\n');
  console.log('Copy and run:');
  console.log('  git commit -m "' + msg + '"');
  console.log('');
}

main();
