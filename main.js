const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navCloese = document.getElementById('nav-close')



if(navToggle){
    navToggle.addEventListener('click',() =>{
     navMenu.classList.add('show-menu')
    })
}


if(navCloese){
    navCloese.addEventListener('click' , ()=>{
        navMenu.classList.remove('show-menu')
    })
}


const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click , linkAction'))




TweenMax.from('main', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('main__picture', 2, {delay: .3, opacity: 0, y: 35, ease: Expo.easeInOut})



