//DESATIVAR TECLA ENTER

function disableEnterKey(e) {
    var key;
    if(window.event){
        key = window.event.keyCode;
    }
    else{
        key = e.wich;
    }

    if(key == 13){
        return false
    }
    else{
        return true
    }
}

//


var cep;
const home = document.querySelector('.home');
const done = document.querySelector('.done');
const goBtn = document.querySelector('#procurar')
const goBack = document.querySelector('#goBack')

goBtn.addEventListener('click', function getCep() {
    
    
    cep = document.querySelector('#searchBar');
    cep = cep.value;

    if(cep.length == 8){
        info();
        home.style.display = "none";
        done.style.display = "flex";
    }
    else{
        info()
    }

    //hide and show
    

})

goBack.addEventListener('click', function backTo(){
    home.style.display = "flex";
    done.style.display = "none";
    cep = ' ';
})



function info() {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((Response) => {
        return Response.json();
    })
    .then((data) => {
        
        data.uf;
        data.logradouro;
        data.complemento;
        data.bairro;
        data.localidade;

        let ruaH = document.querySelector('#rua_html');
        let complementoH = document.querySelector('#complemento_html');
        let bairroH = document.querySelector('#bairro_html');
        let cidadeH = document.querySelector('#cidade_html');
        let estadoH = document.querySelector('#estado_html');

        //CEP
        document.querySelector('#cep_html').innerHTML = cep;

        //RUA
        if(data.logradouro.length < 1){
            ruaH.innerHTML = 'Sem rua'
        }
        else{
            ruaH.innerHTML = data.logradouro;
        }

        //BAIRRO
        if(data.bairro.length < 1){
            bairroH.innerHTML = 'Sem bairro'
        }
        else{
            bairroH.innerHTML = data.bairro;
        }

        //COMPLEMENTO
        if(data.complemento.length < 1){
            complementoH.innerHTML = 'Sem complemento'
        }
        else{
            complementoH.innerHTML = data.complemento;
        }

        //CIDADE
        cidadeH.innerHTML = data.localidade;

        //ESTADO
        estadoH.innerHTML = data.uf;
    })
    .catch((error) => {
        alert('Erro: Verifique se o CEP está escrito corretamente (8 dígitos, sem caractéres especiais.');
    })
    
}