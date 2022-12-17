MascaraCPF();
function MascaraCPF(){
    const input = document.getElementById('cpf');
    input.addEventListener('keypress', () => {
        let inputLength = input.value.length;
        if (inputLength == 3 || inputLength == 7) {
            input.value += '.';
        }else if (inputLength == 11) {
            input.value += '-';
        }
    });
}
function GerarCPF(){
    let input = document.getElementById('cpf-ger');

    let campo1 = Math.floor(Math.random() * (999-100) + 99)
    let campo2 = Math.floor(Math.random() * (999-100) + 99)
    let campo3 = Math.floor(Math.random() * (999-100) + 99)
    let cpfIni = campo1.toString()+campo2.toString()+campo3.toString();
    let cpfAr = cpfIni.split('');

    let d1 = 10;
    let res1 = 0;
    let dig1 = 0;
    for(var c = 0; c < 9; c++){ 
        res1 += (Number(cpfAr[c])*d1);    
        d1--;
    }
    let resto1 = (res1%11);
    if(resto1 >= 2){
        dig1 = (11 - resto1);
    }
    cpfAr[9] = dig1;
    let d2 = 11;
    let res2 = 0;
    let dig2 = 0;
    for(var c = 0; c < 10; c++){ 
        res2 += (Number(cpfAr[c])*d2);    
        d2--;
    }
    let resto2 = (res2%11);
    if(resto2 >= 2){
        dig2 = (11 - resto2);
    }
    let digito = dig1.toString()+dig2.toString();
    let cpf = cpfIni + digito;

    let cpfMask = cpf.substring(0, 3)+"."+cpf.substring(3,6)+"."+cpf.substring(6,9)+"-"+cpf.substring(9,11);
    input.value = cpfMask;

}
function CopiarTexto(){
    let text = document.getElementById('cpf-ger');
    let resSuc = document.getElementById('msg-sucess');
    let resFail = document.getElementById('msg-fail');
    if(text.value == ''){
        resFail.innerHTML = '<p>Campo vazio, nada copiado</p>';
    }else{
        text.select();
        text.setSelectionRange(0, 99999); 
        document.execCommand("copy");
        resFail.innerHTML = '';
        resSuc.innerHTML = '<p>Copiado com sucesso</p>';
    }
}
function ValidarCPF(){
    let cpfMask = document.getElementById('cpf').value;
    let resSuc = document.getElementById('msg-sucess');
    let resFail = document.getElementById('msg-fail');
    res.innerText = '';
    let cpfStr = cpfMask.replace('-', '');
    cpfStr = cpfStr.replaceAll('.', '');
    let cpfAr = cpfStr.split('');
    let digIni = cpfStr.substr(-2);

    let dig1 = DigitoUm(cpfAr);
    let dig2 = DigitoDois(cpfAr);
    let digito = dig1.toString()+dig2.toString();

    if(digIni == digito){
        resSuc.innerHTML = '<p>CPF válido</p>';
    }else{
        resFail.innerHTML = '<p>CPF inválido</p>';
    }
}
function DigitoUm(cpf){
    //Validação do primeiro digito
    let d = 10;
    let res = 0;
    let dig = 0;
    for(var c = 0; c < 9; c++){ 
        res += (Number(cpf[c])*d);    
        d--;
    }
    let resto = (res%11);
    if(resto >= 2){
        dig = (11 - resto);
    }
    return dig;
}
function DigitoDois(cpf){
    //Validação do segundo digito
    let d = 11;
    let res = 0;
    let dig = 0;
    for(var c = 0; c < 10; c++){ 
        res += (Number(cpf[c])*d);    
        d--;
    }
    let resto = (res%11);
    if(resto >= 2){
        dig = (11 - resto);
    }
    return dig;
}