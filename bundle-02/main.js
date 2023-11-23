/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
/*
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();
*/
// 1- Lo scopo di questa funzione una volta corretta sembra essere quello di riassegnare alla variabile "message" una certa stringa, che si presume venga mostrata all'utente più avanti, dipendentemente dall'età dell'utente: una stringa per gli utenti maggiorenni e una per quelli minorenni.  
// 2- Considero le variabili dichiarate nel posto sbagliato come errori logici, quindi no: niente errori sintattici.
// 3- Sì. Nella funzione viene risassegnata una variabile "const", cosa che produrrà un errore. È necessario inizializzare la variabile "message" con "let". Inoltre, così come è scritta la funzione non è riutilizzabile. Per utiizzarla con altre età è necessario tirare myAge fuori dalla funzione e passarla come argomento. Infine, la variabile "message" è dichiarata all'interno della funzione, quindi non è utilizzabile fuori da essa. Assumendo che la funzione voglia solo riassegnare il valore della variabile, senza quindi un "return", sarà necessario dichiarare anche "message" fuori dalla funzione.

// Codice corretto:
const myAge = 32;
let message = '';
function checkAge(age) {
    if (age < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge(myAge);
console.log(message);

// ESERCIZIO 2
/*
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();
*/
// 1- La funzione sembra voler stampare la lunghezza di un array di colori in console come parte di un messaggio.
// 2- Sì, è "length", non "lenght".
// 3- Sì, se vogliamo che la funzione sia riutilizzabile con altri array dobbiamo come al solito tirare fuori l'array dalla funzione e passarlo come argomento.

// Codice corretto:
const colorsArray = ['blue', 'red', 'yellow', 'green', 'black'];
function printColorsNumber(colors) {
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber(colorsArray);


// ESERCIZIO 3
/*
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
*/
// 1- La funzione sembra voler sommare 12 a un numero inserito dall'utente per poi stampare il risultato in console.
// 2- No, l'errore presente è di natura logica.
// 3- L'input avviene tramite prompt, e sarà quindi una stringa. Va convertito in numero. Inoltre, come in altri esercizi, non vengono gestiti gli errori.

// Codice corretto:
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = Number(userNumber) + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();


// ESERCIZIO 4
/*
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
*/
// 1- La funzione sembra voler controllare se un'email inserita dall'utente è presente in una lista di indirizzi email preesistente. Un messaggio risultante viene poi stampato in console.
// 2- Sì, "true" viene prima riassegnato come stringa e poi comparato come booleano. Risolvo trasformando sia "false" che "true" in booleani per consistenza.
// 3- No, l'errore presente è di natura sintattica.

// Codice corretto:
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
/*
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    
    checkAccessImproved();
*/

// 1- Il codice ha lo stesso scopo di quello dell'esercizio precedente ma usa un for loop invece del metodo includes() per effettuare il check.
// 2- Sì, c'è nuovamente confusione tra booleani e stringhe: "if (grantAccess)" funziona solo se parliamo di booleani.
// 3- Il console log è dentro il "for" loop e viene pertanto ripetuto più volte del necessario. Va portato fuori. Idem per il check della lunghezza dell'email dell'utente, non serve ripeterlo più volte.

// Codice corretto:
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (userEmail.length > 5) {
        for (let i = 0; i < addresses.length; i++) {
            const email = addresses[i];
            if (email === userEmail) {
                grantAccess = true;
            }
        }
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}

checkAccessImproved();