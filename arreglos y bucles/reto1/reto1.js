const peliculas = [
    'Frozen', 
    'Blanca Nieves', 
    'Bella Durmiente', 
   
  ];

  
  function PeliculasMoficacion(){
    peliculas[3]='Lago de los cisnes';
    console.log(peliculas);
    peliculas[2]='Malefica';
    console.log(peliculas);
    peliculas[1]='spider Man';
  }
  PeliculasMoficacion();
  
  /*
  const lotteryNumberInput = document.querySelector('#lotteryNumber');
  
  function handleLotteryNumberChange (event) {
    const input = event.currentTarget;
    const selectedNumber = parseInt(input.value);
    const ind = selectedNumber - 1; // El índice empieza en 0
    const result = options[ind]; // Utilizamos una constante que contiene un número como valor
    console.log('Premio: ', result);
  }
  
  lotteryNumberInput.addEventListener('keyup', handleLotteryNumberChange);*/