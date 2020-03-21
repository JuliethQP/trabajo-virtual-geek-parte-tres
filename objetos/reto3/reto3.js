const geekGirl = {
    name: 'Lucía',
    edad:34,
    profesion: 'Periodista',
  
    
};

geekGirl.showBio = ()=>{

 return(`My name is ${geekGirl.name}, I am ${geekGirl.edad} years old and I\'m a ${geekGirl .profesion}`);
    //return 'mi nombre es'+ this.name+' tengo '+ this.edad + ' y soy '+ this.profesion;
  //}
}
console.log(geekGirl.showBio());
