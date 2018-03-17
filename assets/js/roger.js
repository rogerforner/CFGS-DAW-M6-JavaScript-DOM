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
  5. saber crear nous elements al DOM (<p>, <img>, etc.)
  *****************************************************************************/

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
