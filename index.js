var array = []

botao.onclick = function () {
    var nomeF = nome.value
    var nota1F = Number(nota1.value)
    var nota2F = Number(nota2.value)
    var nota3F = Number(nota3.value)
    var aluno = {
        nomeA: nomeF,
        nota1A: nota1F,
        nota2A: nota2F,
        nota3A: nota3F,
        mediaA: calculaMedia (nota1F, nota2F, nota3F),
        
        situacaoA: situacao (nota1F, nota2F, nota3F),
    }
    adicionaAluno(aluno)
    nome.value = ""
    nota1.value = ""
    nota2.value = ""
    nota3.value = ""
    geraTabela()
}

function calculaMedia (n1, n2, n3) {
    return ((n1 + n2 + n3)/3).toFixed(2)
}

function situacao (n1, n2, n3) {
    var media = calculaMedia (n1, n2, n3)
    if (media >= 7){return "Aprovado"}
    else if (media < 4){return "Reprovado"}
    else {return "Prova Final"} 
}

function adicionaAluno (aluno) {
    array.push(aluno)
}

function geraTabela () {
    var linha = ""
    for (var k = 0; k < array.length; k++) {
        linha += `<tr>
        <td>${array[k].nomeA}</td>
        <td>${array[k].nota1A}</td>
        <td>${array[k].nota2A}</td>
        <td>${array[k].nota3A}</td>
        <td>${array[k].mediaA}</td>
        <td>${array[k].situacaoA}</td>
        </tr>`
        
    }
    tabela.innerHTML = linha
}