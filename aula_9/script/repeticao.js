//laço de repetição FOR
let x;
for(x=0; x<10;x++){
    console.log(`valor atual de ${x}`);
}

//while
//condicional
/*posso trabalhar com ele como se fosse contado, mas a atualização da variável de
 controle manualmente não esquecer de inicializar a variavel de controle fora do laço.
verficar se a condição é alcansável.*/
//enquanto condição for verdadeira faça
let cont=0;
while(cont <10){
    console.log(`${cont} * 3= ${(cont*3)}`);
    cont=cont+2;
    //cont+=2
}
//se a condição não for verdadeira da primeira
//verificação não vai executar nenhuma vez

//exemplo de laço condicional
//não sei quantas vezes vai ser executado
let letra='b';
while(letra!= 'b'){
    letra=prompt("Vamos adivinhar a letra\n"
                 + "Digite uma letra entre a-z")
}

//do while
//executa a instrução pelo menos uma vez,
//independente se for verdade ou não
//pq a chacagem da condição é no final
//sempre crie a variavel controle fora do laço
//sempre inicialaize a variavel de controle fora do laço
//não esqueça de atualizar a variavel de controle dentro do laço

let fruta='manga';

do{
    alert(`A fruta é ${fruta}`)
    fruta=prompt(`Digite outra fruta: `);
}while(fruta != 'abacaxi')

//while true
while(true){
    console.log(`${y}^2=${(y**2)}`);
    y+=1;
    if(y==10){
        break;
    }
}

//Array
let feira=[]//defini um array em branco
feira.push('laranja');
feira.push("Ameixa");
feira.push('Maça');
console.log(feira[0]);
console.log(feira[1]);
console.log(feira[2]);
console.log("Qauntidade de elementos "+feira.length);

feira.pop();//remove o ultimo elemento do array
console.log("Qauntidade de elementos "+feira.length);

//feira.splice(0,1)

//for normal
let i=0;

for(i; i<feira.length;i++){
    console.log(feira[i]);
}

//for of= a variavel de controle copia o valor do elemento
const numb=[1,2,3,4,5,6];
for(const n of numb){
    console.log(n);
}

//for in = a variavel de contole copia o valor do indice
for (const j in feira) {
    console.log(feira[j]);
}
