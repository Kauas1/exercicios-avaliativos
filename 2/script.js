// Elaborar um programa que adicione números a um vetor. O programa deve impedir a inclusão de números repetidos. Exibir a lista de números a cada inclusão. Ao clicar no botão Verificar Ordem, o programa deve analisar o conteúdo do vetor e informar se os números estão ou não em ordem Crescente (Demorei para pegar porque dei f5 na page do notion)

const btnAdicionar = document.querySelector('#btnAdicionar')
const btnListar = document.querySelector('#btnAdicionar')
const inNumero = document.querySelector('#inNumero')
let numeros = []


btnAdicionar.addEventListener('click', () => {
    let num = inNumero.value
    if(!isNaN(num)){
        alert('Insira os dados corretamente, não pode haver repetição de números.')
    }

    // Não consegui tranformar o valor em number, depois vou tentar em casa(Atualização: eu só esqueci de alterar de declarar numero no inNumero...)
    numeros.push({num})
    num.value = Number
    let out = `Lista de números: \n`

    numeros.forEach((numeros, index) => {
        numeros += `${index + 1}. Nome: ${numeros.num}`;
    });

    outNum.textContent = out;
    
console.log(num)
})