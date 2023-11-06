// Attendi che il documento HTML sia completamente caricato prima di eseguire il codice.
document.addEventListener("DOMContentLoaded", function () {
    // Inizia un ciclo da 1 a 100.
    for (let x = 1; x <= 100; x++) {
        // Stampa il numero corrente sulla console.
        console.log(x);

        // Seleziona l'elemento HTML con classe "container".
        const container = document.querySelector('.container');

        // Verifica se il numero è divisibile per 3 e 5 contemporaneamente (FizzBuzz).
        if (x % 3 === 0 && x % 5 === 0) {
            console.log("FizzBuzz");

            // Crea un nuovo elemento paragrafo e assegna il testo "FizzBuzz".
            let paragraph = document.createElement("p");
            paragraph.innerHTML = "FizzBuzz";

            // Aggiungi il paragrafo al contenitore.
            container.appendChild(paragraph);
        }
        // Altrimenti, verifica se il numero è divisibile per 5 (Buzz).
        else if (x % 5 === 0) {
            console.log("Buzz");

            // Crea un nuovo elemento paragrafo e assegna il testo "Buzz".
            let paragraph = document.createElement("p");
            paragraph.innerHTML = "Buzz";

            // Aggiungi il paragrafo al contenitore.
            container.appendChild(paragraph);
        }
        // Altrimenti, verifica se il numero è divisibile per 3 (Fizz).
        else if (x % 3 === 0) {
            console.log("Fizz");

            // Crea un nuovo elemento paragrafo e assegna il testo "Fizz".
            let paragraph = document.createElement("p");
            paragraph.innerHTML = "Fizz";

            // Aggiungi il paragrafo al contenitore.
            container.appendChild(paragraph);
        }
        // Se il numero non è divisibile per 3 o 5, stampa il numero stesso.
        else {
            // Crea un nuovo elemento paragrafo con il numero corrente come testo.
            let paragraph = document.createElement("p");
            paragraph.innerHTML = x;

            // Aggiungi il paragrafo al contenitore.
            container.appendChild(paragraph);
        }
    }
});
