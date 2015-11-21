#! /bin/sh

node ./_deploy.js

git add .
git commit -m "$1"
git push

exit 0
