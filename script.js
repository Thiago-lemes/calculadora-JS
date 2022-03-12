 //os parametros foi passado dentro do HTML, em cada botão 
 function insert(num){
     //foi necessario a criação de var, para fazer a concatenação com o parametro nume
    var numero = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML= numero + num
 }

 function limpar(){
     document.getElementById('resultado').innerHTML = "";
     }

     function backsapace(){
         var resultado = document.getElementById('resultado').innerHTML;

        //criação do backspace, foi pego o resultado junto com o subtring, começando do 0,passando por toda a cadeia "length" e subtraindo 1 
         document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
     }

     function calc(){
        var resultado = document.getElementById('resultado').innerHTML;

        if(resultado){
            //eval é o que faz a magica acontecer, ele fica responsavel por fazer os calculos 
            var resultado = document.getElementById('resultado').innerHTML = eval(resultado)

        }else{
            var resultado = document.getElementById('resultado').innerHTML = 'ERRO'
        }

     }

 
