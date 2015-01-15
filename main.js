// Indicate current location on nav bar
(function () {
	var currentPage = window.location.pathname;
	var nav = document.getElementsByClassName('nav-links')[0].getElementsByTagName('a');
	for (var i = 0; i < nav.length; i++) {
		if (nav[i].href.match(currentPage)) {
			nav[i].classList.add('page-now-on');
			break;
		};
	};
})();

// Show commit stamp
(function () {
	var commitStamp = new XMLHttpRequest();
	commitStamp.open('GET', 'commit-stamp.txt', false);
	commitStamp.send();
	document.getElementById('commit-stamp').innerHTML = 'Commit stamp: ' + commitStamp.responseText;
})();