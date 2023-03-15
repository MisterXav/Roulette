function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let tableau = [42, 65, 37, 75]
  let nombre_alétoire
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  let h1 = document.querySelector('h1')
  console.log(h1)
  h1.innerText = getRandomInt(20)