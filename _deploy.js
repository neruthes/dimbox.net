var fs = require('fs');

var currentCommitStamp = Number(fs.readFileSync('commit-stamp.txt').toString().trim())+1;

fs.writeFileSync('commit-stamp.txt', currentCommitStamp);

var mainjs = fs.readFileSync('main.js').toString();
fs.writeFileSync('main.js', mainjs.replace(/Commit stamp: \d+/g, 'Commit stamp: ' + currentCommitStamp));
