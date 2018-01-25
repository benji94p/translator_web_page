/* WORD SWITCHER */

let firstWord = document.querySelector("#first");
let secondWord = document.querySelector("#second");

firstWord.textContent = "French";
firstWord.style.fontFamily = "French";
secondWord.textContent ="English";

setInterval(function(){
    if(firstWord.textContent == "French") {
        firstWord.textContent = "English";
        secondWord.textContent ="French";
        firstWord.classList.add('slideInUp');

    }
    else {
        firstWord.textContent = "French";
        secondWord.textContent ="English";

    }
}, 3000);

