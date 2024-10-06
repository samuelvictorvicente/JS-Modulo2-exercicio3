debugger;
let opcao;

let cadastro=[]

do{
    opcao=prompt("Total de Imoveis Cadastrados:\n"+cadastro.length + "\nDigite 1 para cadastrar um novo imovel:\n" + "Digite 2 para mostrar todos os imoveis:\n" +"Digite 3 para sair:");

    switch(opcao){
        case"1":
        const imovel={}

        imovel.proprietario=prompt("Digite o nome do proprietario:");
        imovel.qtdquarto=prompt("Digite a quantidade de quartos:");
        imovel.qtdbanheiro=prompt("Digite a quantidade de banheiros:");
        imovel.garagem=prompt("Digite sim ou nao se possuir garagem:");

        const confirmacao=confirm(
            "Salvar este imovel?\n"+
            "\nProprietario: " + imovel.proprietario + 
            "\nQuantidade de quartos: "+ imovel.qtdquarto +
            "\nQuantidade de banheiros: " + imovel.qtdbanheiro +
            "\nPossui garagem?:" + imovel.garagem
        
        );
            if(confirmacao){
                cadastro.push(imovel)
                alert("Imovel salvo com sucesso!");

            }else{
                
                alert("Voltando ao menu");
            }

        break;

        case "2":
            for(let i=0; i<cadastro.length; i++){
                alert(
                    "Imovel " + (i+1)+
                    "\nProprietario: " + cadastro[i].proprietario +
                    "\nQuartos: " + cadastro[i].qtdquarto+
                    "\nBanheiros: " + cadastro[i].qtdbanheiro+
                    "\nPossui garagem? " +cadastro[i].garagem
                );
            }
       
        break;

        case "3":
            alert("Encerrando...")
            break;

        default:
        alert("Opção inválida!");
        break;
      
    }



}while(opcao!=="3");
   

//LOGICA USADA PARA ENTENDER ESSE CODIGO

/*
1- cria variavel opcao
2-cria array cadastro
3- variavel opcao recebe o valor digitado atraves do prompt e ao mesmo tempo mostra o tamanho atual do array que é 0
4-variavel opcao é verificada e identifica que é 1
5- cria um objeto vazio com o nome imovel
6-objeto imovel vai armazenar proprietario,qtdquarto, qtdbanheiro e garagem / cada um vai receber o valor digitado pelo usuario atraves do prompt
7- cria uma variavel com o nome confirmacao
8- o confirm mostra na tela o que o usuario digitou buscando dentro do objeto imovel mostrando o valor de cada propriedade
9-o if verifica se a variavel confirmacao é verdadeira
10-se for verdadeira, o array cadastro recebe na posicao 0  o valor armazenado dentro do objeto imovel que é  garagem =sim/ proprietario = samuel/qtd banheiro 2/qtdquarto 5
11-pula pro while e identifica que a opcao digitada inicialmente é diferente de 3
12- repete o do novamente
--
13- variavel opcao recebe o valor digitado atraves do prompt e ao mesmo tempo mostra o tamanho atual do array que é 1
14-variavel opcao é verificada e identifica que é 1
15-cria um objeto vazio com o nome imovel
16-objeto imovel vai armazenar proprietario,qtdquarto, qtdbanheiro e garagem / cada um vai receber o valor digitado pelo usuario atraves do prompt
17-o confirm mostra na tela o que o usuario digitou buscando dentro do objeto imovel mostrando o valor de cada propriedade
18-o if verifica se a variavel confirmacao é verdadeira
19-se for verdadeira, o array cadastro recebe na posicao 1  o valor armazenado dentro do objeto imovel que é  garagem =sim/ proprietario = keren/qtd banheiro 2/qtdquarto 3
20-pula pro while e identifica que a opcao digitada inicialmente é diferente de 3
21-pete o do novamente
--
22- variavel opcao recebe o valor digitado atraves do prompt e ao mesmo tempo mostra o tamanho atual do array que é 2
23-variavel opcao é verificada e identifica que é 2
24- cria um for 
25- i tem o valor 0, 0 é menor que o tamanho do array que no caso é 2, entao o bloco é executado
26- cria um alert, "Imovel " concatena com a posicao atual de i que é 0 e soma com 1 que o resultado é 1.
27-o mesmo alert acima concatena com o texto "\nProprietario: " e concatena com o array cadastro na posicao i que no caso é 0 e mostra o valor da propriedade proprietario que no caso é samuel
28-o mesmo alert acima concatena com o texto "\nQuartos: "        e concatena com o array cadastro na posicao i que no caso é 0 e mostra o valor da propriedade qtdquarto que no caso é 5
29-o mesmo alert acima concatena com o texto  "\nBanheiros: "   e concatena com o array cadastro na posicao i que no caso é 0  e mostra o valor da propriedade qtdbanheiro que no caso é 2
30-o mesmo alert acima concatena com o texto "\nPossui garagem? " e concatena com o array cadastro na posicao i que no caso é 0 e mostra o valor da propriedadegaragem que no caso é sim
31- incrementa 1 ao i e agora ele vale 1
--
32-i tem o valor 1, 1 é menor que o tamanho do array que no caso é 2, entao o bloco é executado
33- cria um alert, "Imovel " concatena com a posicao atual de i que é 1 e soma com 1 que o resultado é 2.
34-o mesmo alert acima concatena com o texto "\nProprietario: " e concatena com o array cadastro na posicao i que no caso é 1 e mostra o valor da propriedade proprietario que no caso é keren
35-o mesmo alert acima concatena com o texto "\nQuartos: "        e concatena com o array cadastro na posicao i que no caso é 1 e mostra o valor da propriedade qtdquarto que no caso é 3
36-o mesmo alert acima concatena com o texto  "\nBanheiros: "   e concatena com o array cadastro na posicao i que no caso é 1  e mostra o valor da propriedade qtdbanheiro que no caso é 2
37-o mesmo alert acima concatena com o texto "\nPossui garagem? " e concatena com o array cadastro na posicao i que no caso é 1 e mostra o valor da propriedadegaragem que no caso é sim
38- incrementa 1 ao i e agora ele vale 2
---
39- i tem o valor 2, 2 nao é menor que o tamanho do array que no caso é 2, entao o bloco nao é executado
40-pula pro while e identifica que a opcao digitada inicialmente é diferente de 3
41- repete o do novamente
--
42- variavel opcao recebe o valor digitado atraves do prompt e ao mesmo tempo mostra o tamanho atual do array que é 2
43-variavel opcao é verificada e identifica que é 3
44- cria um alert "Encerrando..."
45- o while identifica que o valor da variavel opcao é igual a 3 e finaliza o programa

*/ 
