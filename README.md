[![Greenkeeper badge](https://badges.greenkeeper.io/srghma/linted-git-commit.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/srghma/linted-git-commit.svg?branch=master)](https://travis-ci.org/srghma/linted-git-commit)

# linted-git-commit
Lints commit message using [commitlint](https://github.com/marionebl/commitlint), commits if message is valid.

Also can show markdowned `help` message from your `~/.commitlintrc.yml`

[![asciicast](https://asciinema.org/a/Q051j9QEV38DcOdK7awEitr8s.png)](https://asciinema.org/a/Q051j9QEV38DcOdK7awEitr8s)

## Install

```bash
# Install commitlint cli, config and linted-git-commit
npm install -g @commitlint/{config-conventional,cli} linted-git-commit

# configure commitlint to use config and show help message
cat << EOF > ~/.commitlintrc.yml
---
extends:
  - '@commitlint/config-conventional'
rules:
  type-enum:
  - 2
  - always
  - - chore
    - ci
    - feat
    - fix
    - docs
    - style
    - refactor
    - perf
    - test
    - revert
help: |
  **Possible types**:

  `chore`:    Change build process, tooling or dependencies.
  `ci`:       Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
  `feat`:     Adds a new feature.
  `fix`:      Solves a bug.
  `docs`:     Adds or alters documentation.
  `style`:    Improves formatting, white-space.
  `refactor`: Rewrites code without feature, performance or bug changes.
  `perf`:     Improves performance.
  `test`:     Adds or modifies tests.
  `revert`:   Changes that reverting other changes
EOF

# make aliases
cat << EOF >> ~/.zshrc
alias lc="linted-git-commit"
alias lc!="linted-git-commit --amend"
EOF

# and use it like
gaa && lc -m "feat: added linted-git-commit"

# all unknown parameters goes to git
lc! -m "feat: added linted-git-commit" --no-verify
```
