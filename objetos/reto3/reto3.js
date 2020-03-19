const geekGirl = {
    name: 'Lucía',
    edad:34,
    profesion: 'Periodista',
  
    
};

geekGirl.showBio = function (){
    return 'mi nombre es'+ this.name+' tengo '+ this.edad + ' y soy '+ this.profesion;
  }

console.log(geekGirl.showBio());