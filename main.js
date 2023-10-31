document.addEventListener("DOMContentLoaded", function () {
    for (let x = 1; x <= 100; x++) {
        console.log(x);
        const container = document.querySelector('.container');

        if (x % 3 === 0 && x % 5 === 0) {
            console.log("FizzBuzz");
            let paragraph = document.createElement("p");
            paragraph.innerHTML = "FizzBuzz";
            container.appendChild(paragraph);
        } else if (x % 5 === 0) {
            console.log("Buzz");
            let paragraph = document.createElement("p");
            paragraph.innerHTML = "Buzz";
            container.appendChild(paragraph);
        } else if (x % 3 === 0) {
            console.log("Fizz");
            let paragraph = document.createElement("p");
            paragraph.innerHTML = "Fizz";
            container.appendChild(paragraph);
        } else {
            let paragraph = document.createElement("p");
            paragraph.innerHTML = x;
            container.appendChild(paragraph);
        }
    }
});