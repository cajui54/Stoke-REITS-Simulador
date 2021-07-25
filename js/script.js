class Stoke{
    constructor(){}

     lerDados(){
       try{
            var $dadosStoke = new Object();
            // input dados
            $dadosStoke.valorDolarHoje = parseFloat(document.getElementById('txtValorDolarHoje').value);
            $dadosStoke.valorStoke = parseFloat(document.getElementById('txtValorStoke').value);
            $dadosStoke.valorCorretagem  = parseFloat(document.getElementById('txtValorCorretagem').value) || 0;
            return $dadosStoke; 
       }
       catch(erroException){
            window.alert("Ocorreu um erro inesperado!\n"+erroException);
       }
    }
    validarDados(){
        var getStoke = this.lerDados();
        if(this.validarCampos(getStoke)){
            this.calcularTotal(getStoke);
            

            document.getElementById('txtValorDolarHoje').value = "";
            document.getElementById('txtValorStoke').value = "";
            document.getElementById('txtValorCorretagem').value = ""
        }else{
            alert("Ocorreu um error inesperado!");
        }
    }
    calcularTotal(getStoke){
        var totalEmDolar = getStoke.valorStoke + getStoke.valorCorretagem;
        var totalEmReais = getStoke.valorDolarHoje * totalEmDolar;

        this.mostrarTotal(totalEmDolar, totalEmReais);
    }
    mostrarTotal(totalEmDolar, totalEmReais){
        document.getElementById('p-total-dolar').innerText = formatoMoedaUD.format(totalEmDolar);
        document.getElementById('p-total-real').innerText = formatoMoedaBr.format(totalEmReais);
    }

    validarCampos(getStoke){
        var msg = "";

        if(getStoke.valorDolarHoje === ''){
            msg += "Por favor! Preencha campo valor dolar hoje!\n";
            document.getElementById('txtValorDolarHoje').focus();
        }
        if(getStoke.valorStoke === ''){
            msg += "Por favor! Preencha campo valor do REITs ou Stoke!\n";
            document.getElementById('txtValorStoke').focus();
        }
        if(getStoke.valorCorretagem === ''){
            msg += "Por favor! Preencha campo valor da corretagem!\n";
            document.getElementById('txtValorCorretagem').focus();
        }
        if(msg!=''){
            alert(msg);
            return false;
        }
          return true;  
    }
    cancelar(){
        //input
        document.getElementById('txtValorDolarHoje').value = "";
        document.getElementById('txtValorStoke').value = "";
        document.getElementById('txtValorCorretagem').value = ""
        //output
        document.getElementById('p-total-dolar').innerText = "US$:0.00";
        document.getElementById('p-total-real').innerText = "R$:0.00"
    }
    
}
//formato de moeda br
var formatoMoedaBr = new Intl.NumberFormat("pr-br",{
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits:2
})
//formato de moeda usa
var formatoMoedaUD = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    currencyDisplay: 'narrowSymbol'
});

//instância da classe
var stoke = new Stoke();

// btn Confirmar
var $btnConfirmar = document.getElementById('btnConfirmar');
//event click btn click
$btnConfirmar.addEventListener('click', function(){
    stoke.validarDados();
})


var $btnCancelar = document.getElementById('btnCancelar');
$btnCancelar.addEventListener('click', function(){
    stoke.cancelar();
})