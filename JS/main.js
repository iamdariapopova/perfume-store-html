const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const backgroundFade = document.querySelector('.background-fade');
const menuInner = document.querySelector('.menu__inner')
const body = document.body;

// Слайдер
new Swiper('.swiper', {

    navigation: {
      disabledClass: 'news__arrows-disabled',
      nextEl: '.news__arrows-forward',
      prevEl: '.news__arrows-back',
    },
    slidesPerView: 2,
    spaceBetween: 40,

    autoplay: {
        delay: 8000,
        // stopOnLastSlide: true,
    },
    speed: 500,
    
    breakpoints: {
    279: {
        slidesPerView: 1,
        spaceBetween: 24,
    },
    841: {
        slidesPerView: 2,
        spaceBetween: 24,
    },
    1441: {
        spaceBetween: 40,
        slidesPerView: 2,
    }
    },

  });

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuInner.classList.toggle('active');
    menuButton.classList.toggle('active');
    backgroundFade.classList.toggle('active');
    body.classList.toggle('lock');
});

menu.querySelectorAll('.menu__item-link').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuInner.classList.remove('active');
        menuButton.classList.remove('active');
        backgroundFade.classList.remove('active');
        body.classList.remove('lock');
    })
});

body.addEventListener('click', evnt => {
    if(evnt.target.classList.contains( ! menu )){
        menu.classList.remove('active');
        menuInner.classList.remove('active');
        menuButton.classList.remove('active');
        backgroundFade.classList.remove('active');
        // backgroundFade.classList.add('inactive');
        body.classList.remove('lock');
    }
})

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();
        
        const sectionID = anchor.getAttribute('href').substring(1);
        
        document.getElementById(sectionID).scrollIntoView({
            behavior: 'auto',
            block: 'start'
        })
        
    })
    
})