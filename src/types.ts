export interface Params {
  gitPath?: string;
}

export interface GitInfo {
  branch: string | undefined;
  tags: Array<string>;
  latestCommit: string;
}
