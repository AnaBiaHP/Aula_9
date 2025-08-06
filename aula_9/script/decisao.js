//estrutura de decisão
//if-condição { vai ser feito se for verdade}

let data_hora, hora;
data_hora = new Date();
hora = data_hora.getHours();

if (hora < 12){
    alert("Bom dia raio de sol");
}

// if/else
//somente o if tem condição
if(hora > 12){
    alert('Bom dia amiguinho, como vai?');
}
else{
    alert('Ai lascouuu!!!!');
}

//estrutura de decisão encadeada
let previsao = "nublado";
let tempMin= "5";
let tempMax= "22";

if(previsao == "chuvoso"){
    alert('Pegue guarda-chuva');
    if(tempMin < 10){
        alert("leve mais de um casaco");
    }
    else{
        alert("leve somente um casaco");
    }
}
else{
    if(previsao=='nublado'){
        if(tempMin > 15){
            alert("Passe protetor no rosto e pegue um casaco");
        }
        else{
            alert("Se agasalhe bem");
        }
    }
    else{
        alert('Aproveite o sol!!');
    }
}

//operador ternario
(tempMin<tempMax)?alert('temperaturas ok'):alert("Revise as temperaturas");
let dia= data_hora.getDay();
switch(dia){
    case 0:
        alert("Domingo uhuuu");
        break;
    case 1:
        alert("Segunda feira");
        break;
    case 2:
        alert('Terça');
        break;
    case 3:
        alert("Quarta feira");
        break;
    case 4:
        alert("quinta-feira");
        break;
    case 5:
        alert("Sextouuu");
        break;
    case 6:
        alert("Sábado!!!!");
        break;
    default:
        alert("Dia da semana invalido");
        break;
}