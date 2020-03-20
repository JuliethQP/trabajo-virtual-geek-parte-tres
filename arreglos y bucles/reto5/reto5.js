

function media(arr) { 
    let acumulador=0;
    let count=0;
    for (let i = 0; i < arr.length; i++) {
        acumulador =acumulador+ arr[i];
        count=count+1;
        
      }
      return (acumulador/count);
 }
 media([4, 2, 7, 8, 9]);


