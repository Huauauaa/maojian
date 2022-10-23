import { Params, GitInfo } from './types';

import fs from 'fs';
import path from 'path';

function readFileSync(filepath: string) {
  try {
    return fs.readFileSync(filepath, 'utf-8').trim();
  } catch (error) {
    console.error(error);
    return '';
  }
}

function readdirSync(filepath: string) {
  try {
    return fs.readdirSync(filepath);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function getGitInfo({ gitPath }: Params = {}): GitInfo {
  const cwd = gitPath ?? process.cwd();

  const tagPath = path.join(cwd, '.git/refs/tags/');
  const tags = readdirSync(tagPath);

  const headPath = path.join(cwd, '.git/HEAD');
  const head = readFileSync(headPath);
  const ref = head.match('refs/heads/.*');
  let latestCommit = '';
  if (ref) {
    latestCommit = readFileSync(path.join(cwd, '.git', ref[0]));
  }

  return {
    branch: /\/(\w+)$/.exec(head)?.[1],
    tags,
    latestCommit,
  };
}

export default getGitInfo;
