#! /bin/sh

node ./_deploy.js

git add .
git commit -m "`cat commit-stamp.txt`: $1"
git push

exit 0
