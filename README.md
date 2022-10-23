# maojian

> maojian (毛尖) is a kind of tea.

> Get git info from `.git`

## Usage

`yarn add @harvey0379/maojian`

### mjs

```js
const getGitInfo = require('@harvey0379/maojian');
const gitInfo = getGitInfo();
```

### esm

```js
import getGitInfo from '@harvey0379/maojian';
const gitInfo = getGitInfo();
```

## Typescript Support

```ts
import getGitInfo, { GitInfo, Params } from '@harvey0379/maojian';

const param: Params = {};
const gitInfo: GitInfo = getGitInfo(param);
```
