// let num = prompt ("Ingrese un número: ")
// if (num % 2 == 0) {
//   alert ("El número " + num + " es par")
// }
// else {
//   alert ("El número " + num + " es impar")
// }

const readline = require("readline");

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.question('Ingrese un número:  ',(num)=>{
    if (num % 2 == 0) {
      console.log("El número " + num + " es par")
    }
    else {
      console.log("El número " + num + " es impar")
    }
    
    readlineInterface.close();
})