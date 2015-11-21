// Show commit stamp
(function () {
	if (document.getElementById('commit-stamp')) {
		document.getElementById('commit-stamp').innerHTML = '| Commit stamp: 49';
	};
})();

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
