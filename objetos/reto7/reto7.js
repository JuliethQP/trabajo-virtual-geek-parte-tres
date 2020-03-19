const job='developer';
const almacenar={

}
almacenar.aumentarEdad = function (){
    this.age=this.age + 1;
    return this.age;
}

almacenar.firstname='Juli';
almacenar.lastname='Quinchia';
almacenar.age=24;
almacenar.job=job;


console.log(almacenar.firstname);
console.log(almacenar.lastname);
console.log(almacenar.age);
console.log(almacenar.job);
almacenar.firstname='Aleja';
console.log(almacenar.firstname);



console.log(almacenar.aumentarEdad());


