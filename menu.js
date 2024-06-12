let btnmenu = document.getElementById('btnmenu')
let menumobile = document.getElementById('menu-mobile')


btnmenu.addEventListener('click', ()=>{
    menumobile.classList.add('mostrar')
})

menumobile.addEventListener('click', ()=>{
    menumobile.classList.remove('mostrar')
})
