'use strict';
let num=0,cont=1,str=' ',triang='▲';
num=prompt('¿De qué altura quieres el arbolito?');
let estrella='★'
let tronco='|';
console.log(str.repeat(num)+estrella);
for (let i = num; i >=0; i--) {    
    console.log(str.repeat(i)+triang.repeat(cont));
    cont+=2;
}
console.log(str.repeat(num)+tronco);