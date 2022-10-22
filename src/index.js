const fs = require('fs');
const path = require('path');

function readFileSync(filepath) {
  try {
    return fs.readFileSync(filepath, 'utf-8').trim();
  } catch (error) {
    console.error(error);
    return '';
  }
}

function readdirSync(filepath) {
  try {
    return fs.readdirSync(filepath);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function getGitInfo({ gitPath } = {}) {
  const cwd = gitPath ?? process.cwd();

  const tagPath = path.join(cwd, '.git/refs/tags/');
  const tags = readdirSync(tagPath);

  const headPath = path.join(cwd, '.git/HEAD');
  const head = readFileSync(headPath);
  const ref = head.match('refs/heads/.*');
  const latestCommit = readFileSync(path.join(cwd, '.git', ref[0]));

  return {
    branch: /\/(\w+)$/.exec(head)[1],
    tags,
    latestCommit,
  };
}

module.exports = getGitInfo;
