$('document').ready(function () {
    var firstName = $('#username');
    var lastName = $('#lastname');
    var email = $('#email');
    var terms = $('#accept');
    var btn = $('#done');
    var back = $('#back');
    
    var validateName = false;
    var validateLastname = false;
    var validateChecked = false;
    var validateEmail = false;

    email.on('keyup', function (event) {
        var REGEXEMAIL =  /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
        console.log(REGEXEMAIL.test($(this).val()));
        if (REGEXEMAIL.test($(this).val())){
            validateEmail = true;
            activeButton();
        } else {
            desactiveBtn();
        }
    });
    firstName.on('keyup', function() {
        console.log($(this).val());
        if($(this).val()) {
            validateName = true;
            activeButton();
        } else {
            desactiveBtn();
        }
    });
    lastName.on('keyup', function() {
        if($(this).val()) {
            validateLastname = true;
            activeButton();
        } else {
            desactiveBtn();
        }
    });
    terms.on('click', function(event) {
        if (event.target.checked) {
            validateChecked = true;
            activeButton();
        } else {
            desactiveBtn();
        }
    });

    function activeButton() {
        if(validateName && validateLastname && validateEmail && validateChecked) {
           btn.attr('disabled', false);
        }
    }
    function desactiveBtn() {
        btn.attr('disabled', 'disabled');
    }
    btn.on('click', function() {
        window.location.href = 'pageFive.html';
    });
    back.on('click', function () {
        window.location.href = 'pageThree.html';
    });
});