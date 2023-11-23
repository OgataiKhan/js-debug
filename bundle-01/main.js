/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
/*
for (let i = 0; i > 5; i++) {
    console.log(i);
}
*/
// 1- Lo scopo di questo codice una volta corretto sembra essere quello di stampare in console i numeri da 0 a 4.
// 2- No, l'errore presente è di natura logica.
// 3- Sì, al momento "i" parte da 0 e il ciclo continuerà fintantoché "i" sarà maggiore di 5, facendo fallire il ciclo immediatamente. Per correggere l'errore bisogna scrivere "i < 5".

// Codice corretto:
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ESERCIZIO 2
/*
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
*/
// 1- Questa funzione una volta corretta prenderà come argomento un numero. Se il numero è pari (i.e. divisibile per 2), la funzione ci restituirà il numero sommato a 5. Se il numero non è pari, invece, la funzione ci restituirà il numero stesso.
// 2- Sì. In Javascript, l'uguale da solo si utilizza per assegnare o riassegnare valori a variabili. Per controllare l'identità tra due valori si utilizzano tre segni di uguale ("==="). Altrimenti se ne possono usare due ("==") per controllare la semplice uguaglianza, che però non prende in considerazione eventuali differenze di tipo.
// 3- No, l'errore presente è di natura sintattica.

// Codice corretto:
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// ESERCIZIO 3
/*
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
*/
// 1- Lo scopo di questa funzione una volta corretta sembra essere quello di stampare in console i numeri da 0 a 4.  
// 2- Sì. La corretta sintassi di un ciclo "for" prevede l'utilizzo del punto e virgola per separare i suoi componenti, non della virgola.
// 3- No, l'errore presente è di natura sintattica.

// Codice corretto:
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
/*
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
*/
// 1- Lo scopo di questa funzione sembra essere, dato un array di numeri, quello di restituire un array contenente solamente i numeri pari presenti nell'array di partenza.
/* 2- Errori di sintassi:
    1. Il ciclo "for" vuole il punto e virgola solo per separare i suoi componenti, non lo vuole al termine dell'ultimo componente.
    2. Di nuovo, controllare l'identità vuole tre segni di uguale ("===") e non uno ("=").
    3. Potrebbe essere considerato come un errore di sintassi oppure logico a seconda del ragionamento del programmatore, ma il codice fornito pusha l'indice "i" stesso invece di pushare il valore presente nell'array in posizione "i".
    4. L'"if" non vuole il punto e virgola dopo la condizione.
*/
/* 3- Errori logici:
    1. Non propriamente un errore, ma per rendere utile la funzione l'array "numbers" andrebbe passato come argomento della funzione, non definito al suo interno. In questo modo la funzione sarà riutilizzabile su altri array.
    2. Non propriamente un errore ma una "bad practice". Le variabili presenti (esclusa la "i" nel ciclo for) non vengono riassegnate (anche nel caso in cui i contenuti dell'array rappresentato dalla variabile dovessero variare), quindi andrebbe usato const e non let.
    3. Al momento il ciclo "for" nella funzione non considera l'ultimo elemento dell'array per via del -1 nella condizione. A questo si può ovviare rimuovendo il -1 oppure mettendo "<=" invece di "<".
    4. Al momento l'"if" sta controllando se l'intero array è divisibile per 2 ad ogni iterazione. Dovrebbe invece confrontare il singolo valore dell'array. Sostituisco "numbers" con "numbers[i]".
    5. Il "return" va fuori dal ciclo "for", altrimenti la funzione si chiuderà alla prima iterazione.
*/

// Codice corretto:
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];

function displayEvenNumbers(numbers) {
    const evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

console.log(displayEvenNumbers(numbersArray));