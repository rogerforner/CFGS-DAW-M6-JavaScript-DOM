(function ($) {
  'use strict';

  var clearClass = 'rating-clear',
    clearSelector = '.' + clearClass,
    hiddenClass = 'hidden',
    DEFAULTS = {
      'min': 1,
      'max': 5,
      'empty-value': 0,
      'iconLib': 'glyphicon',
      'activeIcon': 'glyphicon-star',
      'inactiveIcon': 'glyphicon-star-empty',
      'clearable': false,
      'clearableIcon': 'glyphicon-remove',
      'clearableRemain': false,
      'inline': false,
      'readonly': false
    };

  function starSelector(value) {
    return '[data-value' + (value ? ('=' + value) : '') + ']';
  }

  function toggleActive($el, active, options) {
    var activeClass = options.activeIcon,
      inactiveClass = options.inactiveIcon;
    $el.removeClass(active ? inactiveClass : activeClass).addClass(active ? activeClass : inactiveClass);
  }

  function parseOptions($input, options) {
    var data = $.extend({}, DEFAULTS, $input.data(), options);
    data.inline = data.inline === '' || data.inline;
    data.readonly = data.readonly === '' || data.readonly;
    if (data.clearable === false) {
      data.clearableLabel = '';
    } else {
      data.clearableLabel = data.clearable;
    }
    data.clearable = data.clearable === '' || data.clearable;
    return data;
  }

  function createRatingEl($input, options) {
    // Inline option
    if (options.inline) {
      var $ratingEl = $('<span class="rating-input"></span>');
    } else {
      var $ratingEl = $('<div class="rating-input"></div>');
    }

    // Copy original classes but the rating class
    $ratingEl.addClass($input.attr('class'));
    $ratingEl.removeClass('rating');

    // Render rating icons
    for (var i = options.min; i <= options.max; i++) {
      $ratingEl.append('<i class="' + options.iconLib + '" data-value="' + i + '"></i>');
    }

    // Render clear link
    if (options.clearable && !options.readonly) {
      $ratingEl.append('&nbsp;').append(
        '<a class="' + clearClass + '">' +
          '<i class="' + options.iconLib + ' ' + options.clearableIcon + '"/>' +
          options.clearableLabel +
        '</a>'
      );
    }
    return $ratingEl;
  }

  var Rating = function(input, options) {
    var $input = this.$input = input;
    this.options = parseOptions($input, options);
    var $ratingEl = this.$el = createRatingEl($input, this.options);
    $input.addClass(hiddenClass).before($ratingEl);
    $input.attr('type', 'hidden');
    this.highlight($input.val());
  };

  Rating.VERSION = '0.4.0';

  Rating.DEFAULTS = DEFAULTS;

  Rating.prototype = {

    clear: function() {
      this.setValue(this.options['empty-value']);
    },

    setValue: function(value) {
      this.highlight(value);
      this.updateInput(value);
    },

    highlight: function(value, skipClearable) {
      var options = this.options;
      var $el = this.$el;
      if (value >= this.options.min && value <= this.options.max) {
        var $selected = $el.find(starSelector(value));
        toggleActive($selected.prevAll('i').addBack(), true, options);
        toggleActive($selected.nextAll('i'), false, options);
      } else {
        toggleActive($el.find(starSelector()), false, options);
      }
      if (!skipClearable) {
        if (this.options.clearableRemain) {
          $el.find(clearSelector).removeClass(hiddenClass);
        } else {
          if (!value || value == this.options['empty-value']) {
            $el.find(clearSelector).addClass(hiddenClass);
          } else {
            $el.find(clearSelector).removeClass(hiddenClass);
          }
        }
      }
    },

    updateInput: function(value) {
      var $input = this.$input;
      if ($input.val() != value) {
        $input.val(value).change();
      }
    }

  };

  var Plugin = $.fn.rating = function(options) {
    return this.filter('input[type=number]').each(function() {
      var $input = $(this);
      var optionsObject = typeof options === 'object' && options || {};
      var rating = new Rating($input, optionsObject);
      if (!rating.options.readonly) {
        rating.$el
          .on('mouseenter', starSelector(), function() {
            rating.highlight($(this).data('value'), true);
          })
          .on('mouseleave', starSelector(), function() {
            rating.highlight($input.val(), true);
          })
          .on('click', starSelector(), function() {
            rating.setValue($(this).data('value'));
          })
          .on('click', clearSelector, function() {
            rating.clear();
          });
      }
    });
  };

  Plugin.Constructor = Rating;

  $(function() {
    $('input.rating[type=number]').each(function() {
      $(this).rating();
    });
  });

}(jQuery));


/*
1. ús del document.getElementById()
*****************************************************************************/
function killText() {
    document.getElementById('text').remove();
}
/*
2.ús del document.getElementsByTagName()
*****************************************************************************/
function killStar() {
    var x= document.getElementsByTagName("LABEL");
    var u=document.getElementsByTagName("INPUT");
    for (var i = 0; i < x.length; i++) {
      x[i].style.visibility = "hidden";
      u[i].style.visibility = "hidden";
    }
}
/*
3. saber accedir a atributs HTML del DOM.
*****************************************************************************/
function attr() {
  var punts = document.getElementsByName("star");

  for (var i = 0; i < punts.length; i++) {
    if (punts[i].checked==true) {
      alert("La puntuació es "+punts[i].value);
    }else {

    }

  }

}
/*
4. saber usar la propietat innerHTML.
*****************************************************************************/
function noStar(){
  var x= document.getElementsByTagName("LABEL");
  var u=document.getElementsByTagName("INPUT");
  var bit = document.getElementById('bit').innerHTML;

  for (var i = 0; i < x.length; i++) {
    x[i].innerHTML=bit;
  }
}
/*
5. saber crear nous elements al DOM (<p>, <img>, etc.)
*****************************************************************************/ https://source.unsplash.com/featured/?shop
function addTextNode(){
var img = document.createElement("img");
img.src="https://source.unsplash.com/featured"
var afegir = document.getElementById("text1");
afegir.appendChild(img);
}
/*
6. saber crear atributs per a un node.
*****************************************************************************/
function tallarText(){
var afegir1 = document.getElementById("text");
var att = document.createAttribute("class");
// Afegim el valor "text-justify" a l'atribut creat.
att.value = "text-truncate";
// Inserim l'atribut al paràgraf seleccionat.
afegir1.setAttributeNode(att);
}
/*
7. saber crear taules HTML amb el DOM.
*****************************************************************************/
function crearTaula() {
  // Creem un element <table>
  var table = document.createElement("table");
  // Afegir l'atribut id="unaTaula" a l'element <table> creat.
  table.setAttribute("id", "Taula");
  // Seleccionem el segon paràgraf.
  var afegirATaula = document.getElementById("text");
  // Afegim l'element <table> al segon paràgraf.
  afegirATaula.appendChild(table);

  // Creem un element <tr>
  var tr = document.createElement("tr");
  // Afegim l'atribut id="tr1" a l'element <tr>
  tr.setAttribute("id", "tr1");
  // Insertem l'element <tr> dintre de <table>
  document.getElementById("Taula").appendChild(tr);

  // Creem un element <td>
  var td = document.createElement("td");
  // Creem un text.
  var text = document.createTextNode("Hi soc un sujeto");
  // Inserim el text a l'element <td>.
  td.appendChild(text);
  // Seleccionem l'elemnt <tr> creat en id = tr1 i l'inserim en el <td>
  document.getElementById("tr1").appendChild(td);


  var selTaula = document.getElementsByTagName("table")[0];
  var attTaula = document.createAttribute("class");
  attTaula.value = "table mt-2";
  selTaula.setAttributeNode(attTaula);
}
/*
8. clonar nodes, clonar estils de nodes, clonar taules.
*****************************************************************************/
function Clon() {

  var text = document.getElementById("text");
  // Clonem l'element escollit.
  var clon = text.cloneNode(true);
  // Seleccionem el contenidor que contindrà els clons id="punt8contenedor".
  var clonarA = document.getElementById("text1");
  // Inserim el clon en el lloc desitjat.
  clonarA.appendChild(clon);
}
/*
9. esborrar nodes.
*****************************************************************************/
function borrarTaules() {
  var contenedor = document.getElementById("text");
  var taules = document.getElementsByTagName("table")[0];
  contenedor.removeChild(taules);

}
/*
10. saber afegir i eliminar EventListener.
*****************************************************************************/
