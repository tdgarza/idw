<<<<<<< HEAD
function binario(bajo, alto, elemento){

console.log(arr);
let low = bajo;
let high = alto;
let item = elemento;
=======
function binary(bajo, alto, numero){
  let arr = [1, 3, 5, 7, 9,11,13,15,17,19,21];
console.log(arr);
let low = bajo;
let high = alto;
let item = numero;
>>>>>>> 34b9d78 (Probando)

console.log("Valor del Array con el valor mas alto: " + arr[high]);
console.log("Valor del Array con el valor mas bajo: " + arr[low]);

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  console.log("Valor del primer mid: " + mid);
  console.log("Valor del arreglo: arr[mid] " + arr[mid]);
  let guess = mid;
  console.log("valor del Guess: " + guess);
  
  if (guess == item) {
    arr[mid];
    console.log("primer if: arr[mid] " + arr[mid]);
  return mid
}
  //aqui se tiene que terminar
  if (guess > item) {
    high = mid - 1;
    console.log("Valor del segundo IF: " + high);
  } 
  if(guess<item) {
    low = mid + 1;
    console.log("Valor del Else: " + low);
  }
  console.log("Valor del arreglo: arr[mid] " + arr[mid]);
}
}
<<<<<<< HEAD
var arr = [1, 3, 5, 7, 9,11,13,15,17,19,21];
let bajo =3;
let high=10;
let elemento=5;
=======
console.log("primer if: arr[mid] " + arr[mid]);
let bajo=0;
let alto=10;
let numero=5;
>>>>>>> 34b9d78 (Probando)
