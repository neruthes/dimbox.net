// Show commit stamp
(function () {
	var commitStamp = new XMLHttpRequest();
	commitStamp.open('GET', 'commit-stamp.txt', false);
	commitStamp.send();
	document.getElementById('commit-stamp').innerHTML = '<code>Commit stamp: ' + commitStamp.responseText + '</code>';
})();