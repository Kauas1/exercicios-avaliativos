/* 1)- Elaborar um programa para gerar uma tabela com os jogos de uma fase eliminatória de um campeonato. O programa deve conter três funções (a serem executadas no evento click de cada botão)para: 
1) validar o preenchimento, adicionar um clube ao vetor e listar os clubes; 2) listar os clubes (se houver); 3) montar a tabela de jogos, no formato primeiro x último, segundo x penúltimo e assim por diante. Exibir mensagem e não listar a tabela de jogos, caso o número de clubes informados seja ímpar.*/
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const btnEliminatorias = document.getElementById('btnEliminatorias')
const novoClube = document.querySelector('#inTimes')
const Times = []

btnAdicionar.addEventListener('click', () => {
    let clubes =  novoClube.value
    if(clubes === ""|| !isNaN(clubes)){
        alert('Insira os dados corretamente.')
        return
    }else{
        alert('Clube Adicionado as eliminatorias')
    
    
    Times.push({clubes})
    clubes.value = ''
}
})


btnListar.addEventListener('click', () => {
    if (Times.length === 0) {
        alert('Não tem clubes cadastradas.');
        return;
    }


    let lista = ` Clubes cadastrados:\n`;
    Times.forEach((Times, index) => {
        lista += `${index + 1}. Nome: ${Times.clubes}\n`;
    });

    outLista.textContent = lista;
});

btnEliminatorias.addEventListener('click', () => {
    const numerodeTimes = Times.length

    // Me perdi na logica quando fui fazer, até sabia fazer porém não sabia colocar em pratica, vou refazer em casa com mais calma

    let eliminatoria

    Times.forEach((Times, index) => {
        eliminatoria += `${index + 1}. Nome: ${Times.clubes}\n`;
    });

    outEliminatoria.textContent = eliminatoria

    Times.shift
    Times.pop()
})
