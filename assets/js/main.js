/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})



// Tradução
let DEFAULT_LANG = 'pt-br';
let DATA_LANG_ELEMENTS = document.querySelectorAll('[data-lang-str]');
let TRANSLATIONS = {
    'en': {

        'NavProjeto': 'Project',
        'NavSessaoProblema':'The Pitfalls of Social Media',

       'Slogan': 'Doing what is needed for those in need.',
       'BotãoSaibaMais': 'Learn more about',
       
       'NossoProjeto': 'The project',
       'TituloSessaoProjeto': `Showing what the eye can't see`,
       'DescricaoSessaoProjeto': 'Social media can be a place of extreme complexity. With this in mind, many people are unaware of its evils and how they can impact their lives. The virtual simulacrum becomes a distorted, fragmented reality.',
       'BotaoSessaoProjeto': 'Learn more about',

       'VamosConversar' :`Let's talk about it!`,
       'TituloSessaoProblemas': 'The Pitfalls of Social Media',
       'DescricaoSessaoProblemas': 'Social media is totally linked to technological advancement. The more technology advances, the more the desire to consume content on the Internet increases.',
       'BotaoSessaoProblemas': 'Learn more about',

    },
    'pt-br': {
       'NavProjeto': 'O projeto',
       'NavSessaoProblema':'Os problemas das redes sociais',

       'Slogan': 'Fazendo o preciso para quem precisa.',
       'BotãoSaibaMais': 'Saiba mais',
       
       'NossoProjeto': 'Nosso projeto',
       'TituloSessaoProjeto': 'Mostrando o que os olhos não podem ver',
       'DescricaoSessaoProjeto': 'As redes sociais podem ser um lugar de extrema complexidade. Tendo isso em mente, diversas pessoas não conhecem seus males e como eles podem impactar em sua vida. O simulacro virtual se torna uma realidade distorcida, fragmentada.',
       'BotaoSessaoProjeto': 'Leia mais',

       'VamosConversar' :'Vamos conversar!',
       'TituloSessaoProblemas': 'Os problemas das redes sociais',
       'DescricaoSessaoProblemas': 'As redes sociais estão totalmente ligadas ao avanço tecnológico. Quanto mais a tecnologioa avança, mais o desejo de consumir de consumir conteúdos na internet aumenta.',
       'BotaoSessaoProblemas': 'Leia mais'

    }
}


const translate = (lang = null) => {
    if (lang === null) {
      lang = DEFAULT_LANG;
    }
    let DEFAULT_LANG_LENGTH = Object.keys(TRANSLATIONS[DEFAULT_LANG]).length;
    // Verifica se o idioma selecionado existe.
    if (TRANSLATIONS[lang]) {
      // Existe... Agora verifica se a tradução selecionada está completa
      // Se não estiver exibe a mensagem.
    
      let LANG_LENGTH = Object.keys(TRANSLATIONS[lang]).length;
    
      DATA_LANG_ELEMENTS.forEach((el) => {
        let STR = el.getAttribute('data-lang-str');
        if (TRANSLATIONS[lang][STR]) {
          el.innerText = (TRANSLATIONS[lang][STR]);
        }
      });
    } else {
     
    }
  }
  
  let BTNS_TRANSLATE = document.querySelectorAll('[name=btn-translate]');
  BTNS_TRANSLATE.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      translate(btn.getAttribute('data-lang'));
    });
  });
  
  translate();
