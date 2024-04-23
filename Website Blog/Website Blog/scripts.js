let sections = docutment.querySelectorALL('section');
let navLinks = docutment.querySelectorALL('header nav a');

window.onscroll = () => {
    sections.foreEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute9('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add
                ('active');
            });
        };
    });
 };