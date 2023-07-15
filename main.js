$(document).ready(function(){
    $('#carrosel-imagens').slick({
        autoplay: true
    });
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });
    $('#telefone').mask('(00) 00000-0000'); //'00/00/0000'// máscara para data de nascimento, podemos incluir o formato que queremos que seja inserido exemplo logo após a máscara (00) 00000-0000, { placeholder '__/__/____'}); exemplo para placa de carro 'SSS-0000', { placeholder 'ABC-0000'}); - S representa a letra.}
    $('form').validate({
        rules: {
            nome:{
                required: true
            },
            email:{
                required: true,
                email:true //o plugin jquery validator trabalha com nome e não ID, por isso devemos colocar nos campos a propriedade: name="email"// 
            },
            telefone: {
                required:true           
            },
            veiculoDeInteresse:{  //não podemos usar - nessa estrutura então devemos mudar para CameICase//
                required: true
            },
            mensagem:{
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira o seu nome!',
            email: 'Por favor, insira seu E-mail!',
            telefone: 'Por favor insira seu telefone!',
            veiculo: 'Digite o nome do veiculo que você tem interesse',
            mensagem: 'Digite sua mensagem'
        },
        submitHandler: function(form){ //form é o parâmetro da função//
            alert('Enviado com sucesso');   
        },
        invalidHandler:function(form, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos não preenchidos.`);
            }
        }
    });
});
$('.lista-veiculos button').click(function(){ //click é o evento//
const destino  = $('#contato');
const carro = $(this).parent().find('h3').text() //$(this) é o botão , acessando o pai através da função .parent() acessando o pai , procurar o elemento .find(h3).text. 
$('html').animate({ // efeito de rolar a página após o evento click ocorrer//
scrollTop:  destino.offset().top
}, 1000); // duração da animaçâo //
$('#veiculo-interesse').val(carro);// Val serve para recuperar o valor de um input como para setar esse valor//
});