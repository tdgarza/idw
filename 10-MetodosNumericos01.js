function falsa(a,b){
        
    let x = document.getElementById("x").value;
    console.log(x);


    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var thead = document.createElement("thead");
    var tblBody = document.createElement("tbody");
    var hilera = document.createElement("tr");
    var titols = ["1","2","3","4"];
    
    for(let i=0;i<10;i++){
        
        let xi=Math.exp(-x);
        console.log(xi);
        let ea=Math.abs((xi-x)/xi);

        
        var hilera = document.createElement("tr");


for (var j = 0; j < 1; j++) {
var celda = document.createElement("td");
var textoCelda = document.createTextNode("i: "+i);
celda.appendChild(textoCelda);
hilera.appendChild(celda);

for (var k = 0; k < 1; k++) {
var celda = document.createElement("td");
var textoCelda = document.createTextNode("Xi: "+xi);
celda.appendChild(textoCelda);
hilera.appendChild(celda);

for (var l = 0; l < 1; l++) {
var celda = document.createElement("td");
var textoCelda = document.createTextNode("Ea%: "+ea);
celda.appendChild(textoCelda);
hilera.appendChild(celda);

for (var k = 0; k < 1; k++) {
var celda = document.createElement("td");
var textoCelda = document.createTextNode("Et%: "+ea);
celda.appendChild(textoCelda);
hilera.appendChild(celda);

}
}
}
tblBody.appendChild(hilera);
}
let text=xi;
document.getElementById("sumando").innerHTML = text;
}

tabla.appendChild(tblBody);
body.appendChild(tabla);
tabla.setAttribute("border", "1");
}