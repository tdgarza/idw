function myFunction(){
    let x = document.getElementById("x").value;
    let xrold=0;
    console.log("El valor inicial x: " +x);
    do{
    let e0=Math.exp(-x);
    x=e0;
    console.log("El valor de la xi: " +x);
    var error=Math.abs((x-xrold)/x)*100;
    console.log("El valor del error: " +error);
    
    xrold=x;
    console.log("El valor del Xrold: " +xrold);
    }
    while(error>1);
    let text=xrold;
    console.log("Fin con el Text " +text);
    document.getElementById("sumando").innerHTML = text;  
    }