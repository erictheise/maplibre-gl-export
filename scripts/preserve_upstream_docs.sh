#!/bin/bash

if [ ! -d "upstream" ]; then
  mkdir upstream
fi
for i in $(git ls-tree upstream/main --name-only); do
  if [[ $i == *.md ]];then
    echo $i
    git show upstream/main:$i > upstream/$i
  fi
done
git show upstream/main:LICENSE > upstream/LICENSE
git add upstream
if [ -n "$(git status --porcelain)" ]; then
  git commit -m 'Preserving upstream markdown & text files.'
fi
