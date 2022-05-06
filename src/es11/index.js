const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});

//big int 
const aBigNumber = 9007199254740991n;

const anOtherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anOtherBigNumber);

//promise all setAll
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
 .then(response => console.log(response));

 //global this

 console.log(globalThis);


 //operador nulo

 const food = 'jklhaj' ?? 'default string'; //no es nulo erl primer operador
 console.log(food);

 //obcional sheimi

 const user = {};

 console.log(user?.profile?.email);
 if (user?.profile?.email) {
     console.log('email')
 } else {
     console.log('fail');
 }















