
// Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, 
// para organizar a retirada de livros de uma pilha. 
// O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:

// 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha 
// 0: O programa deve ser finalizado. 

// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, 
// o programa deverá informar que a pilha está vazia.

// * Para resolver este exercício, não se esqueça de criar a Classe Stack
// Veja os exemplos abaixo:

//          ENTRADA                         SAÍDA
//-------------------------             -----------------------------
// Digite uma opção: 3                        A Pilha está vazia!

// Digite uma opção: 1                        Pilha:
// Digite o nome: O Auto da Compadecida       O Auto da Compadecida
//
//                                            Livro adicionado!      

//-------------------------------------------------------------------
// Digite uma opção: 1                        Pilha:
// Digite o nome: O Alquimista                O Auto da Compadecida 
//                                            O Alquimista
//
//                                            Livro adicionado!

//-------------------------------------------------------------------
// Digite uma opção: 1                        Pilha:
// Digite o nome: Um Estudo em Vermelho       Um Estudo em Vermelho        
//                                            O Auto da Compadecida 
//                                            O Alquimista
//
//                                            Livro adicionado!

//-------------------------------------------------------------------
// Digite uma opção: 2                         Lista de Livros na Pilha:
//                                             O Auto da Compadecida 
//                                             O Alquimista 
//                                             Um Estudo em Vermelho

//-------------------------------------------------------------------
// Digite uma opção: 3                         Pilha: 
//                                             O Auto da Compadecida 
//                                             O Alquimista
//                                            
//                                             Um Livro foi retirado da pilha!

//-------------------------------------------------------------------
// Digite uma opção: 0                         Programa Finalizado!




// Importação das Bibliotecas
import { Stack } from "./Stack";
import read = require("readline-sync")

// Declarção de Variaveis e Constantes
const listaLivros: Stack<string> = new Stack<string>
let livro: string, opcao: number

// menu com Loop
do {
    console.log(`----------------------------------------------------
        🏦  Biblioteca Vistual Generation  🏦
----------------------------------------------------

         
[ 1 ] - Adicionar Livro na Pilha
[ 2 ] - Listar todos os Livros
[ 3 ] - Retirar Livro da Pilha
[ 0 ] - Sair 

----------------------------------------------------`)
    // Entrada de dados
    opcao = read.questionInt("Entre com a opção desejada: ")
    switch (opcao) {
        case 1:
            // cadastro de livros na Pilha
            livro = read.question("\nDigite o nome do livro a ser cadastrado: ")
            listaLivros.push(livro)
            if (listaLivros.contains(livro)) {
                console.log("\nPilha:")
                listaLivros.printStack()
                console.log(`\nLivro adicionado!`)
            }
            break
        case 2:
            // Lista todos os livros da Pilha
            if (listaLivros.isEmpty()) console.log("\nA Pilha esta vazia!")
            else {
                console.log("\nLista de livros na Pilha:")
                listaLivros.printStack()
            }

            break
        case 3:
            // Remove o Livro no topo da Pilha
            if (listaLivros.count() === 0) console.log("\nA Pilha esta vazia!")
            else {
                console.log("\n")
                listaLivros.pop()
                listaLivros.printStack()
            }
            break


    }
    // O Codigo fica rodando em Loop enquanto a Variavel "Opcao" for diferente de "0"
} while (opcao !== 0)