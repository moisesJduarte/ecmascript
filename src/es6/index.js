function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

// es6
function newFunction2(name = 'Oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '23', 'CO');
//epiply
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase); 
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem = "QUI consequartur. coomodi. Imsum vel duis yet minina \n"
+ "ota frase epica que necesitamos."

//es6
let lorem2 =`otra frase epic que necesitamos
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name' : 'Oscar',
    'age' : 23,
    'country' : 'Vz'
}

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age, country);

//propagacion

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['VAleria', 'Yesica', 'Camila'];
let education = ['David', ...team1,...team2];//uniendo elementos
console.log(education);
//let: es una forma de ttrabajr elementos para guardar en memoria
//solo esta disponible en el code en el bloque asignado

{
    var globalVar = "Global Var";

}
{
    let globalLet = 'Global let'
    console.log(globalLet);
}
console.log(globalVar);

//const

const a = 'b';
a = 'a';
console.log(a);

// propiedad de objecto 

let name = 'moises';
let age = 23;

//es5
obj = {name: name, age: age };
//es6
obj2 = { name, age };
console.log(obj2);

//arrow function
const name = [
{ name: "Moises" , age: 23}

{ name: "Jesus", age: 27}]


let listOfName = name.map(function (item) 
    console.log(item.name))

let listOfName2 = name.map(item => console.log(item.name));

const listOfName3 = (name, age, country) => {
    ...
}

const listOfName4 = name => {
    ...
}

const square = num => num * num;

//promesas para trabajar sincronismo
 //js no es sincronico han incorporado las promesa para los colbats, 
 //no eran escalanles un poco complicado...promesas como lo dice es algo que va a pasar


 const helloPromise = () => {
     return new Promise((resolve, reject) => {
         if (false) {
             resolve('Hey!');
         } else {
             reject('Ups!');
         }
     });
 }

 helloPromise()
 .then(response => console.log(response))
 .catch(error => console.log(error));

 //Clases manejar una sintaxis mas clara en la herencia de Js 

 class calculator {
     constructor() {
         this.valueA = 0;
         this.valueB = 0;
     }
     sum(valueA, valueB) {
         this.valueA = valueA;
         this.valueB = valueB;
         return this.valueA + valueB;
     }
 }

 const calc = new calculator();
 console.log(calc.sum(467, 562));
 
 //trabajr con modulos esport e import trabajndo en logica

 import { hello } from './modulo';

 hello();

 function* helloWorld() {
     if(true) {
         yield 'Hello'
     }
     if (true) {
          yield 'World';
     }
 };

 const generatorHello = helloWorld();
 console.log(generatorHello.next().value); 
 console.log(generatorHello.next().value); 
 console.log(generatorHello.next().value); 
