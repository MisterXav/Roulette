function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let number
  let tableau = [11,22,33,44,55,66,77,88,99]
  let nombre_alétoire
  let h1 = document.querySelector('#numeros_aleatoire')
  let h2 = document.querySelector('#gagner')
  let button2 = document.querySelector("#generator")

  function clearH2(){
    let h2 = document.querySelector('#gagner')
    h2.innerText = ""
  }


  button2.addEventListener('click', event => {
    clearH2()
    if(!button_press)
    {
      button_press = true;
      document.querySelector('#numeros_aleatoire').textContent="";
      prependRandomNumbersTo(".very-slow")(5, 1000, 1200).then((n) => azeaze(n) );
    }
  });

console.log("test", this.n)

  // TESTING ZONE


  "use strict";

function createRandomSpan() {
  const newDigit = document.createElement("span");
  return newDigit;
}

function getRandom(nonZero) {
  return nonZero
    ? Math.floor(Math.random() * 9) + 1
    : Math.floor(Math.random() * 10);
}

function createRandomNumbersTo(parentNode) {
  if (!parentNode) {
    throw new Error("Must be a valid parent node");
  }
  return function (digits, nextDigitTimeGap, digitSettledTime) {
    let isValid = (number) => Number.isSafeInteger(+number) && +number > 0;

    if (
      !isValid(digits) ||
      !isValid(nextDigitTimeGap) ||
      !isValid(digitSettledTime)
    ) {
      throw new Error("Arguments must be positive integer");
    }

    if (digitSettledTime <= 10) {
      throw new Error("digitSettledTime must be greater than 10 milliseconds");
    }

    return new Promise((resolve, reject) => {
      function getFinalNumber() {
        parentNode.classList.add("random-resolved");
        let number = parentNode.innerText;
        parentNode.innerHTML = number;
        if (!Number.isSafeInteger(+number)) {
          resolve(BigInt(number));
          return;
        }
        resolve(+number);
      }

      function gerenateNumber(speed, endTime, nonZero = false) {
        let newDigit = createRandomSpan();
        parentNode.prepend(newDigit);
        let digitId = setInterval(() => {
          if (shouldStop()) {
            clearInterval(digitId);
            return;
          }
          endTime -= speed;
          let randomNumber = getRandom(nonZero);
          if (endTime > 0) {
            newDigit.textContent = randomNumber;
            return;
          }
          newDigit.classList.add("random-resolved");
          clearInterval(digitId);
        }, speed);
      }
      let digit = 1;
      let isLastDigit = () => digit === digits;

      function generateDigit() {
        if (shouldStop()) {
          clearInterval(genRandomNumberId);
          return;
        }
        if (isLastDigit()) {
          gerenateNumber(10, digitSettledTime, true);
          setTimeout(() => {
            getFinalNumber();
          }, digitSettledTime);
          clearInterval(genRandomNumberId);
          return;
        }
        gerenateNumber(10, digitSettledTime);
        digit++;
      }

      let genRandomNumberId = setInterval(generateDigit, nextDigitTimeGap);
      generateDigit(); //remove first interval delay
    });
  };
}

function prependRandomNumbersTo(selector) {
  if (typeof selector !== "string" || !selector.length) {
    throw new Error("Selector should be non-empty string");
  }
  const element = document.querySelector(selector);
  return createRandomNumbersTo(element);
}

function shouldStop() {
  return stop;
}
function resetAll() {
  stop = false;
  document.querySelector('#numeros_aleatoire').textContent="";
  let numbers = [...document.querySelectorAll(".number")];
  numbers.forEach((number) => {
    number.textContent = "";
    number.classList.remove("random-resolved");
  });
  setTimeout(() => {
    main();
  }, 1000);
}

function main() {
  stop = false;
  
}

function azeaze(number_alea)
{
  h2.innerText = ""
    number=number_alea;
    h1.innerText = number
    tableau.forEach(element => {
        if(element == number){
            console.log("gagné")
            h2.innerText = "Vous avez gagné"
        }
        else {
          h2.innerText = "Vous avez perdu"
        }
      });
      

      button_press = false;
}

let stop = false;
let button_press= false;
const button = document.querySelector(".button");
button.addEventListener("click", resetAll);

main();
