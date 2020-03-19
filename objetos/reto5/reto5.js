const input=document.querySelector('.input');
const boton=document.querySelector('.buton');
console.dir(input);
console.log(input.value);
console.log(input.nodeName);//imprime el tipo de elemento de HTML 
console.log(input.required);//Imprime 'false'

function Anuncio(event){
    console.log(event.type);
}

boton.addEventListener('click',Anuncio)