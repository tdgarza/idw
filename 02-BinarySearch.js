
function binario(a,b,c){
    let low = a;
    let high = b;
    let item = c;
    console.log("Valor del Array con el valor mas alto: " + arr[high]);
    console.log("Valor del Array con el valor mas bajo: " + arr[low]);
    while (low <= high) {
        console.log("Valor while: " + low);
        console.log("Valor while: " + high);
        let mid = Math.floor((low + high) / 2);
        console.log("Valor del primer mid: " + mid);
        console.log("Valor del arreglo: arr[mid] " + arr[mid]);
        let guess = arr[mid];
        console.log("valor del Guess: " + guess);
        console.log("Final: " + arr[mid]);
    if (guess == item) {
        arr[mid];
        console.log("Valor del 1er IF mid: " + mid);
        console.log("Valor del 1er IF: arr[mid] " + arr[mid]);
        return mid;
    }
    if (guess > item) {
        high = mid - 1;
        console.log("Valor del 2do IF: " + high);
        console.log("Valor del 2do IF: arr[mid] " + arr[mid]);
        }
        else {
        low = mid + 1;
        console.log("Valor del Else: " + low);
          }
          console.log("Valor del arreglo: arr[mid] " + arr[mid]);
        }}
    const bajo=0;
    const alto=10;
    const buscado=6;
    const arr = [1, 3, 5, 7, 9,11,13,15,17,19,21];
    var suma = binario(bajo,alto,buscado);
    let mid;
    
   