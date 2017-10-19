[![Greenkeeper badge](https://badges.greenkeeper.io/BjornMelgaard/ramda-asserters.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/BjornMelgaard/ramda-asserters.svg?branch=master)](https://travis-ci.org/BjornMelgaard/ramda-asserters)

# ramda-asserters
Lint commit message using commitlint, commit if message is valid, show useful info about your config on -h flag

## Usage

lint commit message using commitlint,
commit if message is valid,

note:
  - commitlint searches config file (.commitlintrc.yml)
    upwards of directory tree, so you can store config
    file in your $HOME
usage:
- in bash
  alias lc="linted-git-commit"
  alias lc!="linted-git-commit --amend"
- in console
  gaa && lc -m "feat: added linted-git-commit"

## Installation

