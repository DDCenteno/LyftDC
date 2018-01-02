$('document').ready(function () {
    var inputInsert = $('.inputInsert');
    var sendNext = $('#sendNext');

// codigo para regenerar el codigo
    $('#regenerate').on('click', function (event) {
        event.preventDefault();
    //generamos un numero aleatorio
        var numRandom = Math.floor(Math.random() * 1000);
    //se concatena el resultado con el texto
        var userCode = 'LAB-' + numRandom;
    // luego se manda el alerta al usuario
        alert('Tu código es : ' + userCode);
    // luego redirecciona a la otra pagina
    });
    // verificación
    inputInsert.on('keyup', function () {
        var actualValue =  $(this).val();

        if (actualValue === localStorage.inputInsert) {
            sendNext.attr('disabled', false);
        }
    });
    sendNext.on('click', function () {
        window.location.href = 'pageFour.html';
    });
});