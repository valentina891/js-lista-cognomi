// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// Passaggi intermedi:
//
// 1. creare array di cognomi:
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// 2. chiedi cognome:
var cognome = prompt("Inserisci il tuo cognome");

// 3. inserire cognome nell'array:
cognomi.push(cognome);

// 4. ordinare alfabeticamente l'array:
cognomi.sort();
console.log(cognomi);

// 5. stampare l'array;
document.getElementById('listaNomi').innerHTML = cognomi;

// 6. posizione "umana":
