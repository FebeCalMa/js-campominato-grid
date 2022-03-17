console.log("JS OK!");

//Stampare i numeri da 1 a 100
const blocksContainer = document.getElementById("blocks");

for (let i = 1; i <= 100; i++) {
  let message = i;

  console.log(message);

  const element = `<div class= "block ${message}">${message}</div>`;

  blocksContainer.innerHTML += element;
}
