const obj = {
    name: 'Moises',
    age: 23,
    country: 'Vz'
};
let {country, ...all} = obj; //encapsular un operador ...''
console.log(all);

//propagacion\
const obj = {
    name: 'moises',
    age: 23

}

const obj1 = {
    ...obj,
    country: 'Vz',
}
console.log(obj1);

//promise .finaly

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout( () => resolve('Hello World'), 3000) 
        : reject(new Error('Test Error'))
    })
}

helloWorld()
 .then(response => console.log(response))
 .catch(error => console.log(error))
 .finally(() => console.log('finalizo'))


 //regex

 const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
 const match = regexData.exec('2018-04-20');
 const year = match [1]
 const month = match [2]
 const day = match [3]

 console.log(year, month, day);
