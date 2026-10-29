// Array de objetos com os relógios definidos no mural da atividade.
// Cada objeto possui produto, categoria, quantidade e preco.
const dadosPedro = [
    {
      produto: "Relógio Digital",
      categoria: "Digital",
      quantidade: 15,
      preco: 120
    },
    {
      produto: "Relógio Analógico",
      categoria: "Clássico",
      quantidade: 10,
      preco: 250
    },
    {
      produto: "Smartwatch",
      categoria: "Inteligente",
      quantidade: 8,
      preco: 550
    },
    {
      produto: "Relógio Esportivo",
      categoria: "Esportivo",
      quantidade: 12,
      preco: 320
    }
];

// Localiza o corpo da tabela pelo id definido no HTML.
const corpoTabela = document.getElementById("corpoTabela")

// Percorre cada objeto do array para criar uma linha na tabela.
for (let produto of dadosPedro){
    // Cria uma nova linha HTML (<tr>).
    const linha = document.createElement("tr")

    // Preenche a linha com as informações do relógio.
    // O toLocaleString formata o preço como moeda brasileira (R$).
    linha.innerHTML = `
        <td>${produto.produto}</td>
        <td>${produto.categoria}</td>
        <td>${produto.quantidade}</td>
        <td class="preco">${produto.preco.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })}</td>
    `

    // Adiciona a nova linha ao corpo da tabela, exibindo o relógio.
    corpoTabela.appendChild(linha)
}
