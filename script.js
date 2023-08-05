
Let sections = document.querySelectorAll('section');
Let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sectons.forEach(sec => {
		Let top =window.scrollY;
		Let offset=sec.offsetTop-150;
		Let height= sec.offsetHeight;
		Let id = sec.getAttribute('id');

		if(top >= offset && top < offset+height) {
			navlinks.forEach(links => {
				links.classlist.remove('active');
				document.querySelector('header nav a[href*=' + id+ ']').classlist.add('active');
			});
		};
	});

	Let header = document.querySelector('header');

	header.classlist.toggle('sticky', window.srollY > 100);
};