'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const hamburgerUL = hamburger.closest('ul');
    const menu = document.getElementById('menu');

    updateHamburger();

    function updateHamburger() {
        if(window.innerWidth <= 830) { // small screen
            hamburgerUL.style.display = 'flex';
            menu.hidden = true;
        }
        else { // wide screen
            hamburgerUL.style.display = 'none';
            menu.hidden = false;
        }
    }

    hamburger.addEventListener('click', function(e) {
        menu.hidden = !menu.hidden;
    });

    window.addEventListener('resize', function(e) {
        updateHamburger();
    });
});



