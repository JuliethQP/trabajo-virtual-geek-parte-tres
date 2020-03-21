var geekGirl = [
    {
      name: 'Maria',
      age: '29',
      profession: 'diseñadora'
    },
    {
        name: 'Lucia',
        age: '31',
        profession: 'ingeniera química'
    },
    {
      name: 'Susana',
      age: '34',
      profession: 'periodista'
    },
    {
        name: 'Inmaculada',
        age: '21',
        profession: 'diseñadora'
      }

  ];
function countDesigners(arr){
  
    var count=0;
    for(let i=0; i < arr.length;i++){
        if(arr[i].profession=='diseñadora'){
            count++;
        }
    }
    return 'las cantidad de diseñadoras son '+ count;
}
countDesigners(geekGirl);

function theYoungest(arr){
    var numero=0;
    const num=[];
    for(let i=0; i < arr.length;i++){
        numero = Math.min(parseInt(arr[i].age) );
    }
    return 'la mas joven tiene ' + numero;
}
theYoungest(geekGirl);
 
function averageAg (arr) {
    var acumulador=0;
    var count=0;
    for(let i=0; i < arr.length;i++){
        acumulador+= parseInt(arr[i].age);
        console.log('el acumulador es'+ acumulador);
        count++;
        console.log('el contador es: ' +count);
    }
    return('el promedio de las edades es: '+ (acumulador/count));
}
averageAg(geekGirl);

//numero de geeks en el listado
function countGeekGirls(arr){ 
    return arr.length;
}
countGeekGirls(geekGirl);

