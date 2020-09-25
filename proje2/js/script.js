
/* REVEAL ANİMATİON JS CODE */ 

ScrollReveal().reveal('.reveal-left', { 

        distance: '10rem',
        origin: 'left',
        duration: 1000,
        easing:'ease-in'

});

ScrollReveal().reveal('.reveal-right', { 

    distance: '10rem',
    origin: 'right',
    duration: 1000,
    easing:'ease-in'

});

ScrollReveal().reveal('.reveal-bottom', { 

    distance: '10rem',
    origin: 'bottom',
    duration: 1000,
    easing:'ease-in'

});

ScrollReveal().reveal('.reveal-fadeUp', { 

    opacity: 0,
    easing:'ease-in'

});

ScrollReveal().reveal('.reveal-delay200', { 

    delay:200

});

ScrollReveal().reveal('.reveal-delay500', { 

    delay:500

});

ScrollReveal().reveal('.reveal-delay1000', { 

    delay:1000

});


/* NAVBAR TOGGLER MENU RESPONSIVE */

const navMenu = () =>{
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navList = document.querySelector(".nav-list");

    navbarToggler.addEventListener("click", ()=>{
        navList.classList.toggle("nav-active");
        navbarToggler.classList.toggle("toggle");
    })
}

navMenu();

/* SERVICES SLIDER RESPONSIVE */

const changeService = () =>{
    let firstChild,lastChild;
    const arrowLeft = document.querySelector("#arrow-left");
    const arrowRight = document.querySelector("#arrow-right");
    const servicesSlider = document.querySelector(".services-slider");

    document.addEventListener("click", ()=>{
        if(event.target === arrowLeft){
            lastChild = servicesSlider.lastElementChild;
            servicesSlider.insertAdjacentElement("afterbegin",lastChild)
        }
        else if(event.target === arrowRight){
            firstChild = servicesSlider.firstElementChild;
            servicesSlider.insertAdjacentElement("beforeend",firstChild);
        }
    })
}

changeService();