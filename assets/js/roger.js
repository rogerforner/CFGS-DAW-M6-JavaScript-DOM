$(function() {
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

  /*
  7. saber crear taules HTML amb el DOM.
  *****************************************************************************/

  /*
  8. clonar nodes, clonar estils de nodes, clonar taules.
  *****************************************************************************/

  /*
  9. esborrar nodes.
  *****************************************************************************/

  /*
  10. saber afegir i eliminar EventListener.
  *****************************************************************************/

});
