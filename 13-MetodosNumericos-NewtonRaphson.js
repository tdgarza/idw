function myFunction(){
    let x = document.getElementById("x").value;
    let xrold=0;
    console.log("El valor inicial x: " +x);
    do{
    let e0=Math.exp(-x)-x;
    let e1=-(Math.exp(-x))-1;
   
    console.log("El valor de la xoriginal: " +e0);
    console.log("El valor de la xderivada: " +e1);

    let xi=x-(e0/e1);
    console.log("El valor de siguiente: " +xi);
    
    console.log("El valor del Xrold: " +xrold);
    var error=Math.abs((xi-xrold)/xi)*100;
    console.log("El valor del error: " +error);
    xrold=x;
    }
    while(error>1);
    let text=xrold;
    console.log("Fin con el Text " +text);
    document.getElementById("sumando").innerHTML = text;  
    }