//TO CHECK WHICH SECTION YOU ARE IN
window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
   showNavOnScroll()
   showBackToTopButtonOnScroll()

   activateMenuAtCurrentSection(home)
   activateMenuAtCurrentSection(services)
   activateMenuAtCurrentSection(about)
   activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
   const targetLine = scrollY + innerHeight / 2

   //verificar se a seção passou da linha
   const sectionTop = section.offsetTop
   const sectionHeight = section.offsetHeight
   const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

   //verificar se a base está abaixo da linha alvo
   const sectionEndsAt = sectionTop + sectionHeight
   const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

   //limites da seção
   const sectionBoundaries =
      sectionTopReachOrPassedTargetLine &&
      !sectionEndPassedTargetLine

   const sectionId = section.getAttribute(`id`)
   const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

   menuElement.classList.remove('active')
   if (sectionBoundaries) {
      menuElement.classList.add('active')
   }
}

function showNavOnScroll() {
   if (scrollY > 0) {
      navigation.classList.add('scroll')
   } else {
      navigation.classList.remove('scroll')
   }
}

function showBackToTopButtonOnScroll() {
   if (scrollY > 1400) {
      backToTopButton.classList.add('show')
   } else {
      backToTopButton.classList.remove('show')
   }
}

function openMenu() {
   document.body.classList.add('menu-expanded')
}

function closeMenu() {
   document.body.classList.remove('menu-expanded')
}

//SCROLL REVEAL API

ScrollReveal({
   origin: 'top',
   distance: '80px',
   duration: 700
}).reveal(`
   #home, 
   #home img, 
   #home .stat, 
   #services,
   #services header,
   #services .card,
   #about,
   #about header,
   #about .content,
   #about .content img`);

   //SLIDER SECTION#ABOUT

   document.querySelector('#slide1').style.backgroundColor = 'red'