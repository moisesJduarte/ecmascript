const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}
//como voy a tranformar ester elemento a una matrix

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//object value

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    desing: 'Ana',
}

const values = Object.values(data);
console.log(values)
console.log(values.length)

//paddin

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12, ' -----'))
//trabajndio en el lado frontend mas que todo en ubna lista 
console.log('food'.padEnd(12, ' ----'))

const obj = {
    name: 'Moises',
} 

//Async Await
//promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('hello world'), 3000)
        : reject(new Error('Test Error'))
    })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anOtherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anOtherFunction();