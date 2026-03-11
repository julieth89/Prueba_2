// let currentYear = new Date().getFullYear();
// let yearBirth = prompt("Ingresa tu año de nacimiento: ")

// let age = currentYear - yearBirth

// console.log ("Tu edad es: " + age + "años")

const readline = require("readline");

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readlineInterface.question('Ingresa tu año de nacimiento: ',(yearBirth)=>{
    let currentYear = new Date().getFullYear();
    let age = currentYear - yearBirth;
    console.log ("Tu edad es: " + age + " años");
    
    readlineInterface.close();
})