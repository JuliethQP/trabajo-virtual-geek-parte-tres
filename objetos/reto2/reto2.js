const geekGirl = {
    name: 'Lucía',
    edad:34,
    profesion: 'Periodista',
    
};
geekGirl.run = (phrase) => `Yo estoy: ${phrase}`;
geekGirl.runAMarathon = (numero) => ` un maraton de : ${numero}`;
console.log([geekGirl.run('corriendo')+ geekGirl.runAMarathon('50km')]);