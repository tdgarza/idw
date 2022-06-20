function binario(a,b,c){
    let low = a;
    let high = b;
    let item = c;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = mid;
        
        console.log("Final: " + arr[mid]);
            
        if (guess == item) {
        arr[mid];
        return arr[mid];
    }
    if (guess > item) {
        high = mid - 1;
    }
    else {
        low = mid + 1;
     }
         
         
        }
       return arr[mid];
       console.log("Final: " + arr[mid]);
    }
    const bajo=0;
    const alto=10;
    const buscado=3;
    const arr = [10,11,22,32,43,52,63,73,84,95,103];
    var valor = binario(bajo,alto,buscado);
    let mid;
    console.log("Final: " + arr[mid]);