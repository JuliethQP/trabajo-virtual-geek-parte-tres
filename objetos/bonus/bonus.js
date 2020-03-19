'use strict';

const feliz=document.querySelector('.feliz');
const triste=document.querySelector('.triste');
const boton=document.querySelector('.boton');
const seleccion=document.querySelector('.select');
const texto=document.querySelector('.texto');

function ActualizarEstado(feliz,triste){
  
    console.log(seleccion.selectedIndex);
    if (seleccion.selectedIndex===0){
        texto.innerHTML=':)';
    }
    else if(seleccion.selectedIndex===1){
        texto.innerHTML=':(';
    }
    
   
}

boton.addEventListener('click',ActualizarEstado);