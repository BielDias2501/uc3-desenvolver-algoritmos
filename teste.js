// // function dizerNome(){
// //    console.log("GABRIEL")
// // }
// // dizerNome()
// // function multiplicaPorDois(valor){
// //    return valor * 5
// // }
// // let resultado= multiplicaPorDois(5)
// // console.log(resultado)
// // let salário= 100
// // console.log (--salário)
// // let valorTeclado = 100
// // valorTeclado+=valorTeclado
// // console.log(valorTeclado)
// // console.log(1==1)
// // let pontos = 101
// // let tipo = pontos >100? "premium": "comum"
// // console.log(tipo)
// // let cursoSuperior = true
// // let cursoTecnico= false
// // let podeTrabalhar= cursoSuperior || cursoTecnico
// // console.log("pode trabalhar?", podeTrabalhar)
// // let candidatoRecusado= !podeTrabalhar
// // console.log("Candidato Recusado", candidatoRecusado)
// // let a = "vermelho"
// // let b = "azul"
// // let c = a
// // a = b
// // b = c
// // console.log(a)
// // console.log(b)
// // let x = 5 
// // let y = 10
// // x = 5 + 5
// // y = 10 - 5
// // console.log(x)
// // console.log(y)
// // let hora = 13
// // if(hora>6&&hora<12){
// //    console.log("bom dia")
// // }
// // else if (hora>12&&hora<18){
// //    console.log("boa tarde")
// // }
// // else{
// //    console.log("boa noite")
// // }

// // let valor = 55
// // if(valor>100){
// //    console.log("Desconto de 20%")
// // }
// // else if (valor>50){
// //    console.log("Desconto de 10%")
// // }
// // else{
// //    console.log("NÃO TEM DESCONTO")
// // }

// // let idade = 16
// // if (idade<12){
// //    console.log("Criança")
// // }
// // else if(idade>12&&idade<18){
// //    console.log("adolescente")
// // }
// // else{
// //    console.log("adulto")
// // }

// // let tempo = 17
// // if (tempo<15){
// //    console.log("Frio")
// // }
// // else if(tempo>15&&tempo<30){
// //    console.log("Agradável")
// // }
// // else{
// //    console.log("Quente")
// // }

// // let nota = 100
// // if (nota>90){
// //    console.log("A")
// // }
// // else if(nota>70&&nota<90){
// //    console.log("B")
// // }
// // else{
// //    console.log("C")
// // }

// // let velocidade = 50
// // if (velocidade>120){
// //    console.log("Muito rápido")
// // }
// // else if(velocidade>80&&velocidade<120){
// //    console.log("velocidade adequada")
// // }
// // else{
// //    console.log("Muito lento")
// // }

// // let estoque = 8
// // if(estoque<10){
// //    console.log("Estoque Baixo")
// // }
// // else if(estoque>10&&estoque<50){
// //    console.log("Estoque Médio")
// // }
// // else{
// //    console.log("Estoque alto")
// // }

// // let peso = 15
// // if (peso<1){
// //    console.log("Leve")
// // }
// // else if(peso>1&&peso<5){
// //    console.log("Médio")
// // }
// // else{
// //    console.log("Pesado")
// // }

// // let altura = 60
// // if (altura<50){
// //    console.log("Baixa")
// // }
// // else if(altura>50&&altura<150){
// //    console.log("Média")
// // }
// // else{
// //    console.log("alta")
// // }

// // let idadefilme = 5
// // if(idadefilme<10){
// //    console.log("Infantil")
// // }
// // else if (idadefilme>10&&idadefilme<50){
// //    console.log("Adolescente")
// // }
// // else{
// //    console.log("Adulto")
// // }

// //  let rendimento = 20
// //  if(rendimento<10){
// //    console.log("Baixo rendimento")
// //  }
// //  else if(rendimento>10&&rendimento<15){
// //    console.log("Rendimento médio")
// //  }
// //  else{
// //    console.log("Alto rendimento")
// //  }

// // let pontos = 101
// // let tipo = pontos > 100?"Premium" : "Comum"
// // console.log(tipo)

// //&&, ||, !
// // console.log ( true && false)
// // let maiorDeIdade = true
// // let possuiCNH = true
// // let podeTrabalhar = maiorDeIdade&&possuiCNH
// // console.log(podeTrabalhar)

// // //QUESTÃO 1
// // function avaliarDesempenho(vendas, pontualidade){
// // if (vendas>100000&&pontualidade>95){
// //    return "Desempenho Excelente"
// // }else if (vendas>=50000 && vendas<=100.000 &&  pontualidade>=85 && pontualidade<=95){
// //    return "Desempenho Bom"
// // }else if ( vendas < 50000 || pontualidade<85){
// //    return "Desempenho Regular"
// // }
// // }
// // console.log(avaliarDesempenho(120.000, 120))

// // //QUESTÃO 2
// // function avaliarBolsa(media, renda){
// // if (media>8.5 && renda<3000){
// //    return "Bolsa integral"
// // }else if (media>=7 && media<=8.5 && renda>=3000 && renda<=6000){
// //    return "Bolsa Parcial"
// // }else if (media<7 || renda>6000){
// //    return "Sem bolsa"
// // }
// // }
// // console.log(avaliarBolsa(10,10000))

// // //QUESTÃO 3 
// // function avaliarsaúde(imc,idade){
// // if (imc>30 && idade>60){
// //    return "Alto"
// // }else if (imc>=25 && imc<=30 && idade>=45 && idade<=60){ 
// //    return "Médio"
// // }else if (imc<25 || idade<45){
// //    return "Baixo"
// // }
// // }
// // console.log(avaliarsaúde(10,65))

// // //QUESTÃO 4
// // function avaliarCrédito(rendaano,pagamentos){
// // if (rendaano>100000 && pagamentos == "excelente"){
// //    return "Prime"
// // }else if (rendaano>=50000 && rendaano<=100000 && pagamentos == "Bom"){
// //    return "Padrão"
// // }else if (rendaano<50000 || pagamentos == "Ruim"){
// //    return "Restrito"
// // }   
// // } 
// // console.log(avaliarCrédito(1000000,"Ruim"))

// // //QUESTÃO 5
// // function avaliarProduto (preço,demanda){
// // if (preço>100 && demanda>500){
// //    return "Produto Premium"
// // }else if (preço>=50 && preço<=100 && demanda>=200 && demanda<=500){
// //    return "Produto Padrão"
// // }else if (preço<50 || demanda<200){
// //    return "Produto Econômico"
// // }
// // }
// // console.log(avaliarProduto(120,700))

// // //QUESTÃO 6
// // function avaliarCandidato (experiência,formação){
// // if (experiência>10 && formação=="Doutorado"){
// //    return "Posição Sênior"  
// // }else if (experiência>=5 && experiência<=10 && formação == "Mestrado"){
// //    return "Posição Plena"
// // }else if (experiência<5 || formação == "Graduação"){
// //    return "Posição Júnior"
// // }
// // }
// // console.log(avaliarCandidato(15,"Graduação"))

// // //Questão 7
// // function avaliarFornecedores (qualidade,entrega){
// // if (qualidade== "Excelente" && entrega<5){
// //    return "Fornecedor A"
// // }else if (qualidade == "Boa" && entrega>=5 && entrega<10){
// //    return "Fornecedor B"
// // }else if (qualidade == "Regular" && entrega>10){
// //    return "Fornecedor C"
// // }
// // }
// // console.log (avaliarFornecedores("Boa",7)) 

// // //Questão 8
// // function avaliarProjeto(orçamento,complexidade){
// // if (orçamento>1000000 && complexidade == "Alta"){
// //    return "Projeto Estratégico"
// // }else if (orçamento>=500000 && orçamento<=1000000 && complexidade == "Média"){
// //   return "Projeto Importante"
// // }else if (orçamento<500000 || complexidade == "Baixa"){
// //    return "Projeto Secundário"
// // }
// // }
// // console.log(avaliarProjeto(200000,"Médio"))  

// // //Questão 9
// // function avaliarCurso(avaliação,conclusão){
// // if (avaliação>4.5 && conclusão>90){
// //    return "Curso Excelente"
// // }else if (avaliação>=3.5 && avaliação<=4.5 && conclusão>=75 && conclusão<=90){
// //    return "Curso Bom"
// // }else if (avaliação <3.5 || conclusão < 75 ){
// //    return "Curso Regular"
// // }
// // }
// // console.log(avaliarCurso(5,100)) 

// // //Questão 10
// // function avaliarFilmes(usúarios,visualizações){
// // if (usúarios > 4.5 && visualizações > 1000000){
// //    return "Filme Blockbuster"
// // }else if (usúarios >=3.5 && usúarios <=4.5 && visualizações>=500000 && visualizações<=1000000){
// //    return "Filme Popular"
// // }else if (usúarios <3.5 || visualizações<500000){
// //    return "Filme Nicho"
// // }
// // }
// // console.log(avaliarFilmes(2.5,1500000))      


// // for (let i=1; i<=14;i++){
// //    if(i % 2 !==0){
// //    console.log("estou aprendendo", i)   
// //    }
// // }

// // let i = 1
// // while (i <=10){
// //    if( i % 2 ==0){
// //       console.log(i)
// //    }
// //    i++
// // }

// // function fizzbuzz(número){
// //    if(número % 3 ==0 && número % 5 ==0) {  
// //    return "Fizz Buzz"
// // }else if (número % 3 == 0){
// //    return "Fizz"
// // }else if (número % 5 == 0){
// //    return "Buzz"
// // }else{
// //    return número
// // }
// // }
// // console.log(fizzbuzz(21))

// // for (let i = 0; i < 10; i++){
// //    console.log(i)
// // }

// // let i = 0
// // while ( i < 5) {
// //    console.log(i)
// //    i++
// // }

// //1. Contar até 10 com for
// // Crie um loop for que conte de 1 até 10 e exiba cada número no console.
// for (let i = 1; i<=10; i++){
//   console.log(i)
// }

// // 2. Contar até 10 com while
// // Crie um loop while que conte de 1 até 10 e exiba cada número no console.
// let i = 1
// while (i <=10){
//   console.log(i)
//   i++;
// }

// // 3. Somar números de 1 a 5 com for
// // Crie um loop for que some os números de 1 a 5 e exiba a soma total.
// let g= 0;
// for (let i = 1; i <= 5; i++) {
//    g += i;
// }
// console.log(g);

// // 4. Somar números de 1 a 5 com while
// // Crie um loop while que some os números de 1 a 5 e exiba a soma total.
// let soma = 0
// let s = 1
// while(s <= 5){
//   soma += s
//   s++
// }
// console.log(soma)

// // 5. Multiplicar números de 1 a 4 com for
// let multiplicação = 1
// for (let c = 1; c < 5;c++){
//   multiplicação *= c
// }
// console.log(multiplicação)

// // 6. Multiplicar números de 1 a 4 com while
// // Crie um loop while que multiplique os números de 1 a 4 e exiba o resultado
// let multi = 1
// let j = 1
// while (j<=4){
//   multi *= j
//   j++
// }
// console.log(multi)

// // 7. Verificar paridade com for
// // Crie um loop for que percorre os números de 1 a 10 e exibe "Par" se o número for par e "Ímpar" se o número for ímpar.
// let divisão = 2
// for (let d = 1; d<=10;d++){
//   if(d % divisão == 0){
//      console.log(d,'par')
//   }else
//   console.log(d,"ímpar")
// }

// // 8. Verificar paridade com while
// // Crie um loop while que percorre os números de 1 a 10 e exibe "Par" se o número for par e "Ímpar" se o número for ímpar
// let div = 2
// let k = 1
// while (k<=10){
//   if(k % div ==0){
//      console.log(k,"par")   
//   }else
//   console.log(k,"ímpar")
//   k++
// }

// // 9. FizzBuzz com for
// // Crie um loop for que percorre os números de 1 a 20 e exibe:
// // ● "Fizz" se o número for múltiplo de 3,
// // ● "Buzz" se o número for múltiplo de 5,
// // ● "FizzBuzz" se o número for múltiplo de 3 e 5,
// // ● Caso contrário, exiba o número.
// for (let l=1; l<=20;l++){
//   if(l % 3 ===0 && l% 5 ===0){
//      console.log("fizz buzz")
//   }else if (l % 3 === 0){
//      console.log ("fizz")
//   }else if (l % 5 === 0){
//      console.log ("buzz")
//   }else{
//      console.log (l)
//   }
// }

// // 10. Escolher a operação com switch
// // Crie uma função que usa um switch para retornar uma mensagem baseada na operação
// // passada como argumento:
// // ● "soma" para adição,
// // ● "subtração" para subtração,
// // ● "multiplicação" para multiplicação,
// // ● "divisão" para divisão.
// function escolherOperação(operação){
//   switch(operação){
//   case "soma":
//      return "adição"
//   case "subtração " :
//      return "subtração"
//   case "multiplicação":
//      return "multiplicação"
//   case "divisão":
//      return "divisão"
//   default:
//      return "escolhe uma das opções"     
//   }
// }
// console.log(escolherOperação("soma"))

// //LISTA 4
// // 1.Crie uma função que, dada uma lista de idades, use um loop for para verificar se
// // todas as pessoas têm 18 anos ou mais. Se sim, retorne "Todos podem entrar". Se não, retorne
// // "Alguém não pode entrar".
// function verificarIdade(listaDeIdades){
//   for (let i = 0; i < listaDeIdades.length;i++) {
//       if (listaDeIdades[i] < 18) {
//           return "Alguém não pode entrar"
//       }
//       else{
//           return "Todos podem entrar"
//       }}}
// let idades = [20,25,24,53,22]
// console.log(verificarIdade(idades))

// // Crie uma função que use um loop while para contar quantos números pares
// // existem entre 1 e 50. Retorne esse número.
// function contarPares(){
//   let contador = 0
//   let numero = 1
//   while(numero <=50){
//      if (numero % 2 === 0){
//         contador++
//   }
//   numero++
// }
// return contador
// }
// console.log(contarPares())

// // QUESTÃO 3 Use switch case para classificar uma cor baseada em um número de 1 a 3. Se 1,
// // classifique como "Cor Clara". Se 2, "Cor Média". Se 3, "Cor Escura". Qualquer outro número
// // deve retornar "Cor Desconhecida".
// function avaliarCor(numero){
//   let resultado
// switch(numero){
//   case 1:
//      resultado = ("cor clara")
//      break
//      case 2:
//         resultado = "Cor Média";
//         break;
//     case 3:
//         resultado = "Cor Escura";
//         break;
//     default:
//         resultado = "Cor Desconhecida";
//         break;
// }

// return resultado;
// } 
// console.log(avaliarCor(1))
// console.log(avaliarCor(2))
// console.log(avaliarCor(3))
// console.log(avaliarCor(4))
// console.log(avaliarCor(0))

// // QUESTÃO 4 Crie uma função que use switch case para validar uma senha. Se a senha tiver
// // menos de 8 caracteres, retorne "Senha Fraca". Se tiver entre 8 e 12 caracteres, retorne "Senha
// // Média". Se tiver mais de 12, retorne "Senha Forte".
// function validarSenha(senha) {
//   let comprimento = senha.length;
//   let classificacao;
//   switch (true) {
//       case comprimento < 8:
//           classificacao = "Senha Fraca";
//           break;
//       case comprimento >= 8 && comprimento <= 12:
//           classificacao = "Senha Média";
//           break;
//       case comprimento > 12:
//           classificacao = "Senha Forte";
//           break;
//       default:
//           classificacao = "Senha Inválida"
//           break;
//   }
//   return classificacao
// }
// console.log(validarSenha("12345"))
// console.log(validarSenha("abcdefgh"))

// // Questão 5  Use switch case para classificar uma nota de 0 a 100. Se a nota for maior que 90,
// // classifique como "A". Se entre 80 e 89, "B". Se entre 70 e 79, "C". Se entre 60 e 69, "D". Se
// // menor que 60, "F".
// function classificarNota(nota) {
//   let classificacao;

//   switch (true) {
//       case nota > 90:
//           classificacao = "A";
//           break;
//       case nota >= 80 && nota <= 89:
//           classificacao = "B";
//           break;
//       case nota >= 70 && nota <= 79:
//           classificacao = "C";
//           break;
//       case nota >= 60 && nota <= 69:
//           classificacao = "D";
//           break;
//       case nota < 60:
//           classificacao = "F";
//           break;
//       default:
//           classificacao = "Nota Inválida"; // Caso de fallback para valores fora do intervalo esperado
//           break;
//   }

//   return classificacao;
// }

// console.log(classificarNota(95))
// console.log(classificarNota(85))
// console.log(classificarNota(75))
// console.log(classificarNota(65))
// console.log(classificarNota(55))
// console.log(classificarNota(-10))
// console.log(classificarNota(110))

// // QUESTÃO 6 Crie uma função que use um loop for para percorrer de 1 a 100. Se o número for
// // divisível por 2, 3 e 5, imprima "FizzBuzzBoom". Se for divisível por 2 e 3, imprima "FizzBuzz".
// // Se for divisível por 3 e 5, imprima "BuzzBoom". Se for divisível por 2 e 5, imprima "FizzBoom".
// // Se for divisível apenas por 2, 3, ou 5, imprima "Fizz", "Buzz", ou "Boom", respectivamente.
// // Caso contrário, imprima o número
// function fizzBuzzBoom() {
//   for (let i = 1; i <= 100; i++) {
//       if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
//           console.log("FizzBuzzBoom");
//       } else if (i % 2 === 0 && i % 3 === 0) {
//           console.log("FizzBuzz");
//       } else if (i % 3 === 0 && i % 5 === 0) {
//           console.log("BuzzBoom");
//       } else if (i % 2 === 0 && i % 5 === 0) {
//           console.log("FizzBoom");
//       } else if (i % 2 === 0) {
//           console.log("Fizz");
//       } else if (i % 3 === 0) {
//           console.log("Buzz");
//       } else if (i % 5 === 0) {
//           console.log("Boom");
//       } else {
//           console.log(i);
//       }
//   }
// }
// fizzBuzzBoom();

// function classificarNota(nota) {
//   let mensagem;

//   switch (nota) {
//       case "A":
//           mensagem = "Excelente";
//           break;
//       case "B":
//           mensagem = "Muito bem!";
//           break;
  
//       default:
//           mensagem = "Nota Inválida"; 
//   }
//   return mensagem;
// }

// console.log(classificarNota("A"))
// console.log(classificarNota("B"))

// // // // // function classificarNota() {
// // // // //     const nota = parseInt(prompt('Digite a nota do aluno (0 a 100):'));
// // // // //       let resultado;
// // // // //       if (nota >90) {
// // // // //         resultado = 'A. Excelente trabalho!';
// // // // //       } else if (nota >= 80) {
// // // // //         resultado = 'B. Bom trabalho!';
// // // // //       } else if (nota >= 70) {
// // // // //         resultado = 'C. Trabalho satisfatório.';
// // // // //       } else if (nota >= 60) {
// // // // //         resultado = 'D. Precisa melhorar.';
// // // // //       } else {
// // // // //         resultado = 'F. Insuficiente.';
// // // // //       }
// // // // //       alert(`Sua nota é  ${resultado}`);
// // // // //     }
// // // // // classificarNota()

// // // // // QUESTÃO 2 Um professor deseja ajustar os intervalos de classificação das notas para refletir
// // // // // critérios personalizados de avaliação. Questão: Modifique a função para que a classificação da
// // // // // nota seja baseada em intervalos personalizados que o usuário define. Solicite ao usuário os
// // // // // limites superiores para as notas 'A', 'B' e 'C'. A função deve usar esses limites para determinar
// // // // // a classificação da nota.

// // // // // function classifcaçãoNota() {
// // // // //     const nota = parseInt(prompt("Digite a nota do aluno (0 a 100"));
// // // // //     const intervaloA = parseInt(prompt("Digite o limite superior para nota 100"))
// // // // //     const intervaloB = parseInt(prompt("digite o limite superior para nota 90"))
// // // // //     const intervaloC = parseInt(prompt("digite o limite superior para nota 80"))
    
// // // // //     let resultado
// // // // //     if (nota > intervaloA){
// // // // //         resultado = "A"
// // // // //     }else if (nota > intervaloB){
// // // // //         resultado = "B"
// // // // //     }else if (nota > intervaloC){
// // // // //         resultado = "C"
// // // // //     }else if (nota>=60){
// // // // //         resultado = "D"
// // // // //     }else {
// // // // //         resultado = "F"
// // // // //     }
// // // // //     alert (`Sua nota é ${resultado}`)
// // // // // }
// // // // // classifcaçãoNota() 

// // // // // QUESTÃO 3 : É necessário garantir que as notas inseridas estejam dentro do intervalo válido
// // // // // antes de realizar a classificação. Questão: Atualize a função para incluir uma validação que
// // // // // verifique se a nota inserida está entre 0 e 100. Caso contrário, a função deve informar ao
// // // // // usuário que a nota é inválida e deve estar dentro do intervalo permitido.
// // // // // function classifcaçãoNotas() {
// // // // //     const nota = parseInt(prompt("Digite a nota do aluno (0 a 100"));
// // // // //     const intervaloA = parseInt(prompt("Digite o limite superior para nota 100"))
// // // // //     const intervaloB = parseInt(prompt("digite o limite superior para nota 90"))
// // // // //     const intervaloC = parseInt(prompt("digite o limite superior para nota 80"))
    
// // // // //     let resultado
// // // // //     if (nota > intervaloA){
// // // // //         resultado = "A"
// // // // //     }else if (nota > intervaloB){
// // // // //         resultado = "B"
// // // // //     }else if (nota > intervaloC){
// // // // //         resultado = "C"
// // // // //     }else if (nota>=60){
// // // // //         resultado = "D"
// // // // //     }else if (nota>=0){
// // // // //         resultado = "E"    
// // // // //     }else {
// // // // //         resultado = " F ,Nota inválida"
// // // // //     }
// // // // //     alert (`Sua nota é ${resultado}`)
// // // // // }
// // // // // classifcaçãoNotas()

// // // // // QUESTÃO 4 : Um professor quer fornecer um feedback adicional com base na proximidade da
// // // // // nota da mínima aprovação. Questão: Modifique a função para que o feedback sobre a nota
// // // // // inclua uma mensagem adicional caso a nota esteja próxima da nota mínima de aprovação (60).
// // // // // Por exemplo, se a nota for 55 ou mais, adicione a mensagem "Você está quase lá!" junto com a
// // // // // classificação.

// // // // // function avaliarFeedback() {
// // // // //     const nota = parseInt(prompt("Digite a nota 0 a 100"))
// // // // //     let resultado
// // // // //     if (nota >=0 && nota<55){
// // // // //         resultado = "Reprovado"
// // // // //     }else if (nota >=55 && nota <60){
// // // // //         resultado = "Você está quase lá"
// // // // //     }else if (nota>=60 && nota < 100){
// // // // //         resultado = "Aprovado"
// // // // //     }
// // // // //     alert (`Sua nota é ${resultado}`)
// // // // // }  
// // // // // avaliarFeedback()

// // // // // QUESTÃO 5 Questão: Atualize a função para
// // // // // adicionar sugestões de estudo personalizadas para cada faixa de nota. A sugestão deve ajudar
// // // // // o aluno a entender como pode melhorar com base na sua classificação

// // // // // function fornecerSugestao(nota) {
// // // // //     let sugestao;
    
// // // // //     if (nota >= 90) {
// // // // //         sugestao = "Ótimo trabalho! Continue revisando os tópicos avançados e explore materiais desafiadores.";
// // // // //     } else if (nota >= 80) {
// // // // //         sugestao = "Muito bom! Foque em revisar conceitos avançados e pratique questões mais complexas.";
// // // // //     } else if (nota >= 70) {
// // // // //         sugestao = "Bom trabalho, mas há espaço para melhorar e pratique mais exercícios.";
// // // // //     } else if (nota >= 60) {
// // // // //         sugestao = "Você está quase lá! Revise os conceitos"
// // // // //     } else {
// // // // //         sugestao = "Você precisa de mais prática. Estude os conceitos básicos novamente"
// // // // //     }
    
// // // // //     alert(sugestao);
// // // // // }
// // // // // const notaDoAluno = 85;
// // // // // fornecerSugestao(notaDoAluno);

// // // // // QUESTÃO 6 Modifique a função para permitir que o usuário insira um comentário personalizado
// // // // // sobre a nota classificada. O comentário deve ser exibido junto com a classificação final da nota.

// // // // // function fornecerSugestaoComComentario(nota) {
// // // // //     let sugestao;

// // // // //     if (nota >= 90) {
// // // // //         sugestao = "Ótimo trabalho! Continue revisando os tópicos avançados"
// // // // //     } else if (nota >= 80) {
// // // // //         sugestao = "Muito bom! Foque em revisar conceitos avançados e pratique questões mais complexas.";
// // // // //     } else if (nota >= 70) {
// // // // //         sugestao = "Bom trabalho, mas há espaço para melhorar. Revise os conceitos básicos e pratique mais exercícios.";
// // // // //     } else if (nota >= 60) {
// // // // //         sugestao = "Você está quase lá! Revise os conceitos fundamentais e procure ajuda em áreas que não entende bem.";
// // // // //     } else {
// // // // //         sugestao = "Você precisa de mais prática. Estude os conceitos básicos novamente e busque ajuda para entender melhor o material.";
// // // // //     }

// // // // //     const comentario = prompt("Digite um comentário sobre a sua nota:");
// // // // //     const mensagem = (`Sugestão para sua nota de ${nota}`)
    
// // // // //     alert(mensagem);
// // // // // }
// // // // // const notaDoAluno = parseFloat(prompt("Digite sua nota:"));
// // // // // fornecerSugestaoComComentario(notaDoAluno);

// // // // // QUESTÃO 7 Atualize a função para exibir a faixa de
// // // // // notas correspondente (por exemplo, "90-100", "80-89") com base na nota inserida. Isso deve
// // // // // ajudar a visualizar em que intervalo a nota se enquadra.


// // // // // const numeros = [1,2,3,4,5]
// // // // // numeros.splice(3,0,"valnei")
// // // // // console.log(numeros)

// // // // // const numeros = [1,2,3,4,5]
// // // // // numeros.push("valnei")
// // // // // console.log(numeros)

// // // // // const numeros = [1,2,3,4,5]
// // // // // numeros.unshift(77)
// // // // // console.log(numeros)

// // // // // const numeros = [1,2,3,4,5]
// // // // // console.log(numeros.indexOf(2))

// // // // // const numeros = ["valnei","mohamed","sergio","batista","valnei"]
// // // // // console.log(numeros.lastIndexOf("valnei"))

// // // // // const numeros = ["valnei","mohamed","sergio","batista","valnei"]
// // // // // console.log(numeros.includes("Lucas"))

// // // // // const numeros = ["valnei","mohamed","sergio","batista"]
// // // // // const ultimo = numeros.pop()
// // // // // const ultimos = numeros.pop()
// // // // // console.log(ultimo)
// // // // // console.log(ultimos)
// // // // // console.log(numeros)

// // // // // const numeros = ["valnei","mohamed","sergio","batista"]
// // // // // const primeiro = numeros.shift()
// // // // // console.log(primeiro)
// // // // // console.log(numeros)

// // // // // const numeros = ["valnei","mohamed","sergio","batista"]
// // // // // const meio = numeros.splice(2,2)
// // // // // console.log(meio)
// // // // // console.log(numeros)

// // // // // let numeros = ["valnei","mohamed","sergio","batista"]
// // // // // numeros.length = 1
// // // // // console.log(numeros)

// // // // //LISTA 08 JS
// // // // // QUESTÃO 1 
// // // // // const frutas = ['maçã','banana','laranja']
// // // // // const ultimo = frutas.pop()
// // // // // const primeiro = frutas.shift()
// // // // // frutas.unshift("abacaxi")
// // // // // frutas.push("manga")
// // // // // console.log(frutas)

// // // // //QUESTÃO 2
// // // // // const numeros = [10,20,30,40,50]
// // // // // numeros.splice(2,0,25)
// // // // // numeros.splice(4,1)
// // // // // console.log(numeros)

// // // // // QUESTÃO 3
// // // // // const cores = ["vermelho",'azul','verde','amarelo','azul']
// // // // // console.log(cores.indexOf("azul"))
// // // // // console.log(cores.lastIndexOf("azul"))
// // // // // console.log(cores.includes("roxo"))

// // // // // QUESTÃO 4
// // // // const alunos = ['joao','ana','carlos','bia']
// // // // alunos.splice(2,1)
// // // // alunos.unshift("Pedro")
// // // // alunos.push("Maria")
// // // // console.log(alunos)

// // // // QUESTÃO 5
// // // const animais = ['gato','cachorro','pássaro','peixe','gato']
// // // const primeiro = animais.shift()
// // // animais.push("hamster")
// // // animais.splice(1,1)
// // // console.log(animais)
// // // console.log(animais.includes("gato"))

// // // QUESTÃO 6
// // const livros = ['o senhor dos anéis','1984','o pequeno príncipe','harry potter']
// // livros.splice(2,1)
// // console.log(livros.indexOf("1984"))
// // console.log(livros)

// // QUESTÃO 7
// // const cidades = ['São Paulo','Rio de Janeiro','Salvador','Brasília']
// // cidades.unshift("Curitiba")
// // console.log(cidades.includes("Salvador"))
// // console.log(cidades)

// // QUESTÃO 8
// // const jogos = ['Fifa','Minecraft','fortnite','Among us']
// // const primeiro = jogos.shift()
// // jogos.splice(0,1,"The Sims")
// // console.log(jogos)
// // console.log(primeiro)

// // QUESTÃO 9
// // const esportes = ['futebol','basquete','vôlei','tênis']
// // const primeiro = esportes.shift()
// // console.log(esportes.includes("vôlei"))
// // esportes.splice(1,1)
// // console.log(esportes)


// // QUESTÃO 10
// // const tecnologias = ['Html','CSS','JavaScript','React']
// // const ultimo = tecnologias.pop()
// // tecnologias.unshift('Node.js')
// // console.log(ultimo)
// // console.log(tecnologias)
// // console.log(tecnologias.indexOf('JavaScript'))

// // QUESTÃO 11
// // const filmes = ['Matrix','Inception','Avatar']
// // const ultimo = filmes.pop()
// // filmes.unshift('Interstellar')
// // filmes.push('The Godfather')
// // console.log(ultimo)
// // console.log(filmes)

// // QUESTÃO 12
// // const cores = ['vermelho','azul','verde','amarelo']
// // const meio = cores.splice(2,1)
// // const meios = cores.splice(2,0,'roxo')
// // console.log(meio)
// // console.log(meios)
// // console.log(cores)

// // QUESTÃO 13
// // const times = ['Flamengo','Corinthians','Palmeiras']
// // console.log(times.includes('São Paulo'))
// // times.push('São Paulo')
// // console.log(times)

// // QUESTÃO 14
// // const comidas = ['pizza','hamburguer','sushi','lasanha']
// // console.log(comidas.indexOf('sushi'))
// // const meio = comidas.splice(2,1)
// // console.log(meio)
// // console.log(comidas)

// // QUESTÃO 15
// // const numeros = ['5','10','15','20']
// // numeros.push('25')
// // const meio = numeros.splice(2,1)
// // numeros.unshift('7')
// // console.log(meio)
// // console.log(numeros)

// // QUESTÃO 16
// // const planetas = ['Terra','Marte','Júpiter','Saturno']
// // const meio = planetas.splice(0,1)
// // planetas.unshift('Vênus')
// // console.log(meio)
// // console.log(planetas)

// // QUESTÃO 17
// // const cursos = ['Matemática','Física','Química','Biologia']
// // console.log(cursos.includes('Física'))
// // const meio = cursos.splice(1,1)
// // console.log(meio)
// // console.log(cursos)

// // QUESTÃO 18
// // const carros = ['Ferrari','Lamborghini','Porsche','Bugatti']
// // const meio = carros.splice(1,0,'McLaren')
// // const ultimo = carros.pop()
// // console.log(meio)
// // console.log(ultimo)
// // console.log(carros

// // QUESTÃO 19
// // const idiomas = ['Inglês','Espanhol','Francês','Alemão']
// // const meio = idiomas.splice(0,1)
// // idiomas.push('Italiano')
// // console.log(idiomas.indexOf('Francês'))
// // console.log(meio)
// // console.log(idiomas)

// // QUESTÃO 20
// // const frutas = ['maçã','banana','laranja','uva']
// // const meio = frutas.splice(0,0,'Morango')
// // console.log(frutas.includes('laranja'))
// // console.log(meio)
// // console.log(frutas)

// LISTA 6
// QUESTÃO 1
let frutas = ["maçã", "banana", "laranja"]
frutas.push("uva")
frutas.shift()
function verificarFruta(fruta) {
  if (frutas.includes(fruta)) {
    return "Fruta encontrada"
  } else {
    return "Fruta não encontrada"
  }
}
console.log(verificarFruta("banana"))