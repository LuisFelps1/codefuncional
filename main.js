$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2000
    });

    $('#phone').mask('(00) 00000-0000');

    $('#myForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 14 // 
            }
        },
        messages: {
            name: {
                required: "Por favor, insira seu nome",
                minlength: "Seu nome deve ter pelo menos 2 caracteres"
            },
            phone: {
                required: "Por favor, insira seu telefone",
                minlength: "Por favor, insira um telefone válido"
            }
        },
        submitHandler: function(form) {
            alert("Formulário enviado com sucesso!");
            form.submit();
        }
    });
});
