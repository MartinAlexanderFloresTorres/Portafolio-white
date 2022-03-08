const menu = document.querySelector('.inicio-menu');
const header = document.querySelector('.header');
const close = document.querySelector('.close');
const item = document.querySelectorAll('.header-nav__a');
const overlay = document.querySelector('.overlay');
const logo = document.querySelector('.menu-logo');
const menuToggle = () =>{
    menu.addEventListener('click', ()=>{
        header.classList.toggle('active');
        overlay.classList.toggle('active');
        logo.classList.toggle('active');
    })
    close.addEventListener('click', () =>{
        header.classList.remove('active');
        overlay.classList.remove('active')
        logo.classList.remove('active');
    })
    item.forEach((elemento) =>{
        elemento.addEventListener('click', ()=>{
            header.classList.remove('active');
            overlay.classList.remove('active')
            logo.classList.remove('active');
        })
    })
    overlay.addEventListener('click', ()=>{
        header.classList.remove('active');
        overlay.classList.remove('active')
        logo.classList.remove('active');
    })
}
menuToggle();
const body = document.querySelector('body');
const tema = document.querySelector('.temas-iconos__button--position');
const rojo = document.querySelector('.rojo');
const naranja = document.querySelector('.naranja');
const verde = document.querySelector('.verde');
const azul = document.querySelector('.azul');
const rosado = document.querySelector('.rosado');
const temaColores = document.querySelector('.temas-colores');
const cog = document.querySelector('.temas-iconos__i--cog');

const temaToogle = () =>{
    tema.addEventListener('click', () =>{
        tema.classList.toggle('active');
        body.classList.toggle('oscuro');
        !body.classList.contains('oscuro') ? localStorage.setItem('modo', 'claro') : localStorage.setItem('modo', 'oscuro'); 
    })
    let getmodo = localStorage.getItem('modo');

    if (getmodo === 'oscuro') {
        body.classList.toggle('oscuro');
        tema.classList.toggle('active');
    } else {
        body.classList.remove('oscuro');
        tema.classList.remove('active');
    }
    rojo.addEventListener('click', ()=>{
        body.classList.toggle('rojo');
        body.classList.remove('naranja');
        body.classList.remove('verde');
        body.classList.remove('azul');
        body.classList.remove('rosado');

        !body.classList.contains('rojo') ? '' : localStorage.setItem('color', 'rojo'); 
    })
    naranja.addEventListener('click', ()=>{
        body.classList.toggle('naranja');
        body.classList.remove('rojo');
        body.classList.remove('verde');
        body.classList.remove('azul');
        body.classList.remove('rosado');

        !body.classList.contains('naranja') ? '' : localStorage.setItem('color', 'naranja'); 
    })
    verde.addEventListener('click', ()=>{
        body.classList.toggle('verde');
        body.classList.remove('naranja');
        body.classList.remove('rojo');
        body.classList.remove('azul');
        body.classList.remove('rosado');

        !body.classList.contains('verde') ? '' : localStorage.setItem('color', 'verde'); 
    })
    azul.addEventListener('click', ()=>{
        body.classList.toggle('azul');
        body.classList.remove('naranja');
        body.classList.remove('verde');
        body.classList.remove('rojo');
        body.classList.remove('rosado');

        !body.classList.contains('azul') ? '' : localStorage.setItem('color', 'azul'); 
    })
    rosado.addEventListener('click', ()=>{
        body.classList.toggle('rosado');
        body.classList.remove('naranja');
        body.classList.remove('verde');
        body.classList.remove('azul');
        body.classList.remove('rojo');

        !body.classList.contains('rosado') ? '' : localStorage.setItem('color', 'rosado'); 
    })
    let getcolor = localStorage.getItem('color')
    if (getcolor === 'rojo') {
        body.classList.toggle('rojo');
    } else {
        body.classList.remove('rojo');
    }
    if (getcolor === 'naranja') {
        body.classList.toggle('naranja');
    } else {
        body.classList.remove('naranja');
    }
    if (getcolor === 'verde') {
        body.classList.toggle('verde');
    } else {
        body.classList.remove('verde');
    }
    if (getcolor === 'azul') {
        body.classList.toggle('azul');
    } else {
        body.classList.remove('azul');
    }
    if (getcolor === 'rosado') {
        body.classList.toggle('rosado');
    } else {
        body.classList.remove('rosado');
    }
}
temaToogle();

const cogToogle = () =>{
    cog.addEventListener('click', ()=>{
        temaColores.classList.toggle('active');
    })
}
cogToogle();