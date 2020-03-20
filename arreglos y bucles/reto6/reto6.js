const FirstMovie=document.getElementById('FirstMovie');
const SecondMovie=document.getElementById('SecondMovie');

const mensaje=document.querySelector('.mensaje');
const peliculas=[];
var contador;

const myFunction=(e)=>{

    e.preventDefault();
    peliculas[0]=FirstMovie.value;
    peliculas[1]=SecondMovie.value;
    for (const movie of peliculas) {

        mensaje.innerHTML+= (`"${movie}" ¡ A mí también me encantó `);
    } 
}
document.getElementById("myForm").addEventListener("submit", myFunction);