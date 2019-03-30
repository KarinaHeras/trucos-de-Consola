const dogs = [{name: 'Snickers', age:2},{name:'Juanes',age:16}];

function makeGreen(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    P.style.fontSize = '50px';
}
//Regular
console.log('Hello')

//Interpolado
console.log('Hello is am a %s string!', ':)')

// de estilo
//console.log('%c I am some great text', 'font-size:50px; background:#18DCB0; text-shadow: 10px 10px 0 #7CDCF0')

// Advertencia!
console.warn('OH NOOO')
// Error:/
console.error('Shit')

// inf
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'),'That is wrong!');

// Clearing
console.clear();

// Viendo elementos DOM
console.log (p);
console.dir(p);
console.clear();

// Grouping together (Agrupando) 

dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} year old`);
    console.log(`${dog.name} is ${dog.age *7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// Counting (Contando)

console.count('Wes');
console.count('Wes');
console.count('Juanes');
console.count('Juanes');
console.count('Wes');
console.count('Juanes');
console.count('Wes');
console.count('Wes');
console.count('Juanes');
console.count('Juanes');
console.count('Juanes');
console.count('Juanes');
console.count('Juanes');
