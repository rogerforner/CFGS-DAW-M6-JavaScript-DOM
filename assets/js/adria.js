/*
1. ús del document.getElementById()
*****************************************************************************/
// Apliquem un style="textDecoration:underline;" a <a id="adria" href="">
document.getElementById("adria").style.textDecoration = "underline";

/*
2.ús del document.getElementsByTagName()
*****************************************************************************/
// Agafem totes les <a> de la pàgina i les comptem.
var numP = document.getElementsByTagName("a").length;


/*
3. saber accedir a atributs HTML del DOM.
*****************************************************************************/
// Agafem la primera imatge [0] i el quart atribut [2] (alt).
// Agafem el valor de alt=""
var attrAltImatge = document.getElementsByTagName("img")[0].attributes[2].value;

/*
4. saber usar la propietat innerHTML.
*****************************************************************************/
// Agafem el segon <p> i insertem un text que diu el total d'enllaços de la pàgina.
// numP és del punt 2.
document.getElementsByTagName("p")[1].innerHTML = "En aquesta pàgina hi ha "+numP+" enllaços.";

/*
5. saber crear nous elements al DOM (<p>, <img>, etc.) = crear un node
*****************************************************************************/
// Creem un <span> i un node de text.
var span = document.createElement("span");
var text = document.createTextNode("gspd.cat");

// Afegim el text al <span>
span.appendChild(text);

// Afegim el <span> al footer
var spanAl = document.getElementsByTagName("footer")[0];
spanAl.appendChild(span);

/*
6. saber crear atributs per a un node.
*****************************************************************************/
// Agafem el primer <span>
var seleccionaSpan = document.getElementsByTagName("span")[0];
// Creem un atribut class=""
var atributSpanCSS = document.createAttribute("class");
// Afegim una classe a class="ml-5"
atributSpanCSS.value = "ml-5";
// Afegim l'atribut al <span>
seleccionaSpan.setAttributeNode(atributSpanCSS);


/*
7. saber crear taules HTML amb el DOM.
*****************************************************************************/
// Creem un element <table>
var table = document.createElement("table");
// Afegim l'atribut id="taula-1" a l'element <table> creat.
table.setAttribute("id", "taula-1");
// Agafem l'element que té id="taula"
var afegirTaulaA = document.getElementById("taula");
// Afegim l'element <table> dins del element de la id="taula".
afegirTaulaA.appendChild(table);

// Creem una fila <tr>
var fila = document.createElement("tr");
// Afegim l'atribut id="fila-1" a la fila <tr>
fila.setAttribute("id", "fila-1");
// Insertem la fila <tr> dins de <table>
document.getElementById("taula-1").appendChild(fila);

// Creem una cel·la <td>
var td = document.createElement("td");
// Creem un text per al <td>.
var text = document.createTextNode("Taula HTML.");
// Insertem el text a la cel·la <td>.
td.appendChild(text);
// Agafem la fila <tr> que te la id="fila-1" i insertem la cel·la <td>
document.getElementById("fila-1").appendChild(td);

/*
8. clonar nodes, clonar estils de nodes, clonar taules.
*****************************************************************************/
// clonarNodes() s'executa quan apretem el segon <p>
// <p onclick="clonarNodes()">En aquesta pàgina hi ha 5 enllaços.</p>
function clonarNodes() {
  // Agafem el segon <p>
  var p2 = document.getElementsByTagName("p")[1];
  // Clonem el segon <p>
  var conlarP2 = p2.cloneNode(true);
  // Afegim el <p> clonat al element <div id="clons">
  var afegirClonP2A = document.getElementById("clons");
  afegirClonP2A.appendChild(conlarP2);
}

/*
9. esborrar nodes.
*****************************************************************************/
// borrarNodes() s'executa quan apretem el <footer onclick="borrarNodes()">
function borrarNodes() {
  // Agafem l'element <div id="clons"> que te totes les <p>.
  var teP = document.getElementById("clons");
  // Agafem l'element clonat <p id="borrar">
  var pBorrar = document.getElementById("borrar");
  // Esborrem les taules de dintre del primer paràgraf.
  // Resulta que no només s'esborra la primera, es fa un esborrat recursiu.
  teP.removeChild(pBorrar);
}

/*
10. saber afegir i eliminar EventListener.
*****************************************************************************/
// Afegir EventListener
// Si apretem la imatge s'executa colorFondo().
document.getElementsByTagName("img")[0].addEventListener("click", colorFondo);

// Eliminar EventListener
// S'executa quan apretes <nav onclick="eliminarEvent()">
function eliminarEvent() {
  document.getElementsByTagName("img")[0].removeEventListener("click", colorFondo);
}

// Fem servir JQuery només per a cambiar el fondo.
function colorFondo() {
  // toggleClass() cada cop que s'apreta posa i trau la classe fondo2.
  // Mirar <head> <style> per a veure els estils
  $("body").toggleClass("fondo2");
}
