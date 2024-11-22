function Limpar(){
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("uf").value = "";
    document.getElementById("ibge").value = "";
}

function meucallback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("rua").value = conteudo.logradouro;
        document.getElementById("bairro").value = conteudo.bairro;
        document.getElementById("cidade").value = conteudo.localidade;
        document.getElementById("uf").value = conteudo.uf;
        document.getElementById("ibge").value = conteudo.ibge;
    }
    else{
        Limpar();
        alert("Cep não encontrado!");
    }
    
}

function PesquisarCEP(valor){
    // Permite a digitação de apenas dígitos
    var cep = valor.replace(/\D/g,'');

    if(cep!= ""){
        // Expressão regular para aceitar apenas números de 0 a 9
        var validacep = /^[0-9]{8}$/;

        if(validacep.test(cep)){
            document.getElementById("rua").value = "...";
            document.getElementById("bairro").value = "...";
            document.getElementById("cidade").value = "...";
            document.getElementById("uf").value = "...";
            document.getElementById("ibge").value = "...";

            // Cria um elemento JavaScript
            var script = document.createElement("script");

            //Associa a function meucallbacl
            script.src = "https://viacep.com.br/ws/" + cep + "/json/?callback=meucallback";

            //Insere o script no documento e carrega o conteúdo nas inputs
            document.body.appendChild(script);
        }   
        else{
            Limpar();
            alert("Formato de CEP inválido!");
        }
    }
    else{
        Limpar();
        alert("Campo vazio!");
    }   
}         