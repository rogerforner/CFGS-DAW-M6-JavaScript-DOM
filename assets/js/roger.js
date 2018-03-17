/*
1. ús del document.getElementById()
*****************************************************************************/
// Seleccionem l'element del nav amb ID "roger" i el subratllem aplicant un
// style="textDecoration:underline;"
document.getElementById("roger").style.textDecoration = "underline";

/*
2.ús del document.getElementsByTagName()
*****************************************************************************/
// Seleccionem el primer element del contingut <p> i justifiquem el text.
// getElementsByTagName() ens retorna un array.
document.getElementsByTagName("p")[0].style.textAlign = "justify";

/*
3. saber accedir a atributs HTML del DOM.
*****************************************************************************/
// Obtenir el primer atribut de la primera etiqueta <meta> del <head>, la qual
// es correspon a la codificació de caràcters del document UTF8.
// Desprès mostrem el resultat amb un Alert.
var attrMetaCharset = document.getElementsByTagName("meta")[0].attributes[0].value;
alert("La codificació de caràcters del document és "+attrMetaCharset);

/*
4. saber usar la propietat innerHTML.
*****************************************************************************/
// Dintre de <p> hi ha un <pan id="eshared"> en el que hi afegim el text següent.
document.getElementById("eshared").innerHTML = " eShared és un entorn virtual on es recullen apunts dels diferents àmbits educatius per tal de facilitar l’estudi dels/les estudiants i proporcionar una guia, o millor dit, una eina, sempre actualitzada, per als/les professionals d’un sector educatiu que es renova de forma constant"

/*
5. saber crear nous elements al DOM (<p>, <img>, etc.) = crear un node
*****************************************************************************/
// Els nostres paràgrafs estan en un <div id="punt5", en el qual hi afegirem el
// text següent.
// Primer creem un element <p>
var p5 = document.createElement("p");
// Desprès creem un contingut de tipus text per al nostre <p> creat anteriorment.
var node5 = document.createTextNode("Això és una activitat del CFGS de DAW, Institut Montsià (Amposta, Terres de l'Ebre).");
// Un cop creats els elements els unifiquem, afegint node5 dintre de p5.
p5.appendChild(node5);
// Ara que tenim l'element preparat l'hem d'afegir el lloc escollit.
// Agafaem el div que l'ha de contindre.
var afegirEn = document.getElementById("punt5");
// Inserim el nostre nou element en el div.
afegirEn.appendChild(p5);

/*
6. saber crear atributs per a un node.
*****************************************************************************/
// En el punt 5 hem creat un node <p> amb un text no justificat, per mantenir
// la armonia amb el primer paràgraf, crearem l'taribut class="" al nou element
// i li efegirem la classe de Bootstrap 4 "text-justify".
// Seleccionem el segon paràgraf.
var selP5 = document.getElementsByTagName("p")[1];
// Creem un atribut class="".
var attP5 = document.createAttribute("class");
// Afegim el valor "text-justify" a l'atribut creat.
attP5.value = "text-justify";
// Inserim l'atribut al paràgraf seleccionat.
selP5.setAttributeNode(attP5);

/*
7. saber crear taules HTML amb el DOM.
*****************************************************************************/
// La funció crearTaula és cridada al punt 10.
function crearTaula() {
  // Creem un element <table>
  var table = document.createElement("table");
  // Afegir l'atribut id="unaTaula" a l'element <table> creat.
  table.setAttribute("id", "unaTaula");
  // Seleccionem el segon paràgraf.
  var afegirTaulaEn = document.getElementsByTagName("p")[1];
  // Afegim l'element <table> al segon paràgraf.
  afegirTaulaEn.appendChild(table);

  // Creem un element <tr>
  var tr = document.createElement("tr");
  // Afegim l'atribut id="tr1" a l'element <tr>
  tr.setAttribute("id", "tr1");
  // Insertem l'element <tr> dintre de <table>
  document.getElementById("unaTaula").appendChild(tr);

  // Creem un element <td>
  var td = document.createElement("td");
  // Creem un text.
  var text = document.createTextNode("I això és una cel·la dintre d'una taula.");
  // Inserim el text a l'element <td>.
  td.appendChild(text);
  // Seleccionem l'elemnt <tr> creat en id = tr1 i l'inserim en el <td>
  document.getElementById("tr1").appendChild(td);

  // Apliquem un atribut class="" (mirar punt 6)
  var selTaula = document.getElementsByTagName("table")[0];
  var attTaula = document.createAttribute("class");
  attTaula.value = "table mt-2";
  selTaula.setAttributeNode(attTaula);
}

/*
8. clonar nodes, clonar estils de nodes, clonar taules.
*****************************************************************************/

/*
9. esborrar nodes.
*****************************************************************************/
function borrarTaules() {
  // Seleccionar el segon paràgraf perquè conté les taules.
  var conteTaules = document.getElementsByTagName("p")[1];
  // Seleccionem la primera taula, recordant que getElementsByTagName() retorna
  // un array.
  var taules = document.getElementsByTagName("table")[0];
  // Esborrem les taules de dintre del primer paràgraf.
  // Resulta que no només s'esborra la primera, es fa un esborrat recursiu.
  conteTaules.removeChild(taules);
}

/*
10. saber afegir i eliminar EventListener.
*****************************************************************************/
// Afegir
// Seleccionem l'elemnt amb id="punt10" (img) i quan passem per sobre cridem
// la funció del punt 7, amb la qual crearem taules. Es crearàn quan es passi
// el mouse per sobre de la imatge.
// L'EventListener es crea per a que es dugui a terme lo del moude i la funció.
document.getElementById("punt10").addEventListener("mousemove", crearTaula);

// Eliminar
// Seleccionem l'element id="punt10" tal qual fem en l'apartat anterior però
// eliminem l'EventListener.
// Aquest està dintre d'una funció pararCrearTaula() que es cruda quan es pitja
// el botó.
function pararCrearTaula() {
  document.getElementById("punt10").removeEventListener("mousemove", crearTaula);
}
