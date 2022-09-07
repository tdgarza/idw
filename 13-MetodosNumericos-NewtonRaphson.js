function myFunction(){
    let x = document.getElementById("x").value;
    let xrold=0;
    console.log("El valor inicial x: " +x);
    do{

    let e0=Math.exp(-x)-x;
    let e1=-(Math.exp(-x))-1;
    x=x-(e0/e1);
    console.log("El valor de siguiente xi: " +x);
    
    var error=Math.abs((x-xrold)/x)*100;
    console.log("El valor del error: " +error);
    xrold=x;
    
    }
    while(error>1);
    let text=xrold;
    
    document.getElementById("sumando").innerHTML = text;  
    }