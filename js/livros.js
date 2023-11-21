const arrayLivros = [
    {
        imagem: "imagens/analise-de-trafego-tcp.jpg",
        link: "sinopses-html/analise-de-trafego-tcp.html",
        titulo: "Análise TCP/IP",
        preco: "R$ 86,49",
        genero:"Gênero: Análise de Redes"
    },
    {
        imagem: "imagens/codigo-limpo.jpg",
        link: "sinopses-html/codigo-limpo.html",
        titulo: "Código Limpo",
        preco: "R$ 100,00",
        genero: "Gênero: Desenvolvimento"
    },
    {
        imagem: "imagens/guia-pratico-html-css.jpg",
        link: "sinopses-html/html-e-css-guia-pratico.html",
        titulo: "HTML e CSS: Guia Prático",
        preco: "R$ 113,57",
        genero: "Gênero: Desenvolvimento"
    },
    {
        imagem: "imagens/introducao-python.jpg",
        link: "sinopses-html/introducao-a-python.html",
        titulo: "Introdução a Python",
        preco: "R$ 66,75",
        genero: "Gênero: Desenvolvimento"
    },
    {
        imagem: "imagens/java-como-programar.jpg",
        link: "sinopses-html/java-como-programar.html",
        titulo: "Java: Como Programar",
        preco: "R$ 270,00",
        genero: "Gênero: Desenvolvimento"
    },
    {
        imagem: "imagens/redes-de-computadores.jpg",
        link: "sinopses-html/redes-de-computadores.html",
        titulo: "Redes de Computadores",
        preco: "R$ 205,00",
        genero: "Gênero: Redes"
    },
    {
        imagem: "imagens/sistemas-operacionais.jpg",
        link: "sinopses-html/sistemas-operacionais.html",
        titulo: "Sistemas Operacionais",
        preco: "R$ 280,00",
        genero: "Gênero: Sistemas Operacionais"
    },
    {
        imagem: "imagens/sql-para-leigos.jpg",
        link: "sinopses-html/sql-para-leigos.html",
        titulo: "SQL Para Leigos",
        preco: "R$ 92,40",
        genero: "Gênero: Banco de Dados"
    },
    {
        imagem: "imagens/tecnicas-de-invasao.jpg",
        link: "sinopses-html/tecnicas-de-invasao.html",
        titulo: "Técnicas de Invasão",
        preco: "R$ 49,73",
        genero: "Gênero: Hacking"
    },
    {
        imagem: "imagens/use-a-cabeca.jpg",
        link: "sinopses-html/use-a-cabeca.html",
        titulo: "Use a cabeça! PHP e MySQL",
        preco: "R$ 60,00",
        genero: "Gênero: Desenvolvimento e BD"
    },
  ]

  for(let i = 0; i < arrayLivros.length; i++) {
    const infoL = document.createElement('div');
    infoL.setAttribute('class','info-livros');
    infoL.innerHTML =
      `
        <a href = "${arrayLivros[i].link}" target="_self" rel="next"><img src="${arrayLivros[i].imagem}" alt="${arrayLivros[i].titulo}" class="capa-livros"></a>
        <h2>${arrayLivros[i].titulo}</h2>
        <h3>${arrayLivros[i].preco}</h3>
        <h3>${arrayLivros[i].genero}</h3>
      `
    const div = document.querySelector('.livros');
    div.appendChild(infoL);
}

