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

for (let i = 1; i<=9; i++) {
    console.log(i ** 2);
}

let e = 0, f = 0;
    console.log('e = ', e++); //mai intii afiseaza valoare curenta 0, apoi aduna
    console.log('f = ', ++f); //afiseaza rezultatul deja adunat cu 1

//while

let m = 0;
while (m <= 9) {
    console.log(m ** 2);
    m++;
}

// do...while mai intii executa conditia apoi verifica
// let m = 0;
// do {
//     console.log(m ** 2);
//     m++;
// } while (m <= 9);

//break inside for
for (let g = 0; g < 10; g++) {
    if (g === 3) { break; }
    console.log(g);
    }
//continue (se verifica pina la j valoarea 3, 3 se ignora, apoi se face skip si continua verificarea)
for (let j = 0; j < 10; j++) {
    if (j === 3) { continue; }
    console.log(j);
    }

//functii
function showName () {
    console.log('Vasile Brinza');
}
showName(); //chemam functia ori de cate ori o scriem

//vizibilitatea (aceasta este locala, daca o sa o chemam prin console.log(name), nu va aparea)
function showNume () {
    let name = 'Vasile Brinza';
    console.log(name);
}
showNume();

//variabila globala (aceasta poate fi citita de o variabila locala si afisata in consola, avem ani de 2 ori)
let ani = 31;
function showNome () {
    let name = 'Vasile Brinza';
    console.log(name);
    console.log(ani);
}
console.log(ani);
showNome();
console.log(ani);

//parametrii functiei (unei functii ii putem atribui un parametru)
function showBug (bug, nr, end =' Moldova') {
        console.log(bug, nr + end);
}
showBug('Buburuza', 20,);

//return
function fructeBune () {
    console.log('mere');
    return 'dulci'
    //orice e scris dupa return nu se executa
}
let fructe = fructeBune();
console.log(fructe);