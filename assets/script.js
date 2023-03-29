function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let number
  let tableau = [11,22,33,44,55,66,77,88,99]
  let nombre_alétoire
  let h1 = document.querySelector('#numeros_aleatoire')
  let h2 = document.querySelector('#gagner')
  let button = document.querySelector("#generator")


  button.addEventListener('click', event => {
    h2.innerText = ""
    number=getRandomInt(100)
    h1.innerText = number
    tableau.forEach(element => {
        if(element == number){
            console.log("gagné")
            h2.innerText = "Vous avez gagné"
        }
      });
  });

  