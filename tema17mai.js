//operatorul if-else
let time = 17;

if (time < 12) {
    greeting = "Buna dimineata";
} else if (time < 18) {
    greeting = "Buna ziua";
} else {
    greeting = "Buna seara";
}
console.log(greeting);
//alet exercitiu de la practica
let x = 0;

if (x > 1) {
    console.log(1);
} else if(x < 1) {
    console.log(1);
} else if (x = 1) {
    console.log(0);
}

// operatorul ternary
let result = (x > 1) ? 1 : (x < 1) ? 1 : 0;
console.log(result);

let age = 16;
console.log((age >=18) ? "Esti adult." : "Esti minor.")

//operatori logici &&(si) ||(sau) !(negare)
let a = 3; b = 5;
console.log(a > b && a === b);
console.log(true && 0 && 'a' < 'Z');
console.log(a > b || true || '2' == 2 || false == ''); //daca cel putin o conditie din sau e true, atunci avem true in consola
console.log( a < b && 0 == false);
console.log(!(2 == 2) || true && ''); // avem && urmat de un string gol, nu vom avea rezultat

//operatorul switch
let c = 3;

switch (c) {
    case 1:
        console.log('a');
        break;
    case 2:
        console.log('b');
        break;
    case 3:
        console.log('c');
        break;
    default:
        console.log('z');   
}

let animal = 'fish';
switch (animal) {
    case 'birds':
    case 'mammals':
        console.log('Warm-blooded animals');
        break;
    case 'insects':
    case 'reptiles':
    case 'mollusks':
    case 'fish':
        console.log('Ectotherm animals');
        break;
    default:
        console.log('Other ectotherm animals')
}

//cicluri
