const button = document.querySelector('#menu')
const closebutton = document.querySelector('#close')

const sidebar = document.querySelector('.sidebar__try')
const navbar = document.querySelector('#nav__links')

const navElements = document.querySelectorAll('#nav__links li')
const overlay = document.querySelector('#overlay')

button.addEventListener('click', () =>{
    sidebar.style.display = 'flex'
    overlay.style.display ='block'


    navElements.forEach((element) =>{
       document.querySelector('#sidebar__links').append(element)
    })

})

closebutton.addEventListener('click', () =>{
    sidebar.style.display = 'none'
    overlay.style.display ='none'

    navElements.forEach((element) =>{
        navbar.append(element)
    })


})

