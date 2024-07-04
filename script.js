let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navbar')


menubart.onclick = () => {
    menubart.clssList.toggle('fa-times')
    nav.clssList.toggle('active')

}


const sr = ScrollReveal({
    distance: '45px',
    duration: 2700,
    reset: true,
})


sr.reveal('.myimageabout', { delay: 350, origin: 'left' })
sr.reveal('.about-text-content', { delay:, origin: 'right' })


