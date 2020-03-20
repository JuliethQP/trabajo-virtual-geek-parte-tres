'use strict';

const boton=document.querySelector('.boton');
const seleccion=document.querySelector('.select');
const texto=document.querySelector('.texto');
const body=document.querySelector('.body');
var numero=0;;
var max=100;
var min=0;
var numero1=0;
var bandera=0;

function ActualizarEstado(){
    if (seleccion.selectedIndex===0){
        texto.innerHTML=':)';
    }
    else if(seleccion.selectedIndex===1){
        texto.innerHTML=':(';
    }   
   
}


boton.addEventListener('click',ActualizarEstado);

function update(){
    if (Math.floor(Math.random()*100) % 2 == 0) {
        body.classList.add('back-yellow');
        body.classList.remove('back-naranja');
    }
    else {
        body.classList.add('back-naranja');
        body.classList.remove('back-yellow')
    }
}


boton.addEventListener('onClick', update);
boton.addEventListener('click',ActualizarEstado);

