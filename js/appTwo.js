$('document').ready(function () {
  // inicializador del dropdown
  $('dropdown-toggle').dropdown();
  // Para el ancord
  $('#before').on('click', function () {
    window.location.href = '../views/pageOne.html';
  });
  // funcionalidad del boton verificando la cantidad de caracteres
  $('#next').attr('disabled', true);
  // se inicializa deshabilidato porque no hay ningun caracter dentro del input
  $('.characterInput').keyup(function () {
    if ($(this).val().length === 10) {
      $('#next').attr('disabled', false);
    } else {
      $('#next').attr('disabled', true);
    }
  });
  // funcion que da la alerta con el codigo que generara al usuario
  $('#next').on('click', function (event) {
    event.preventDefault();
    //generamos un numero aleatorio
    var numRandom = Math.floor(Math.random() * 1000);
    //se concatena el resultado con el texto
    var userCode = 'LAB-' + numRandom;
    // luego se manda el alerta al usuario
    alert('Tu código es : ' + userCode);
    // luego redirecciona a la otra pagina
    window.location.href = 'pageThree.html';
  });
});