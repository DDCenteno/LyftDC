$('document').ready(function () {
  // inicializador del dropdown
  $('dropdown-toggle').dropdown();
  // Para el ancord
  $('#before').on('click', function () {
    window.location.href = '../views/pageOne.html';
  });
  // funcionalidad del boton vereficando la cantidad de caracteres
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
  $('#next').on('click', function () {
    var code = Math.floor(Math.random() * 1001);
  });
});