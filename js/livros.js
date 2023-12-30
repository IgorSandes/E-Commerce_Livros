// const arrayLivros = [
//     {
//         imagem: "imagens/analise-de-trafego-tcp.jpg",
//         link: "sinopses-html/analise-de-trafego-tcp.html",
//         titulo: "Análise TCP/IP",
//         preco: "R$ 86,49",
//         genero:"Gênero: Análise de Redes"
//     },
//     {
//         imagem: "imagens/codigo-limpo.jpg",
//         link: "sinopses-html/codigo-limpo.html",
//         titulo: "Código Limpo",
//         preco: "R$ 100,00",
//         genero: "Gênero: Desenvolvimento"
//     },
//     {
//         imagem: "imagens/guia-pratico-html-css.jpg",
//         link: "sinopses-html/html-e-css-guia-pratico.html",
//         titulo: "HTML e CSS: Guia Prático",
//         preco: "R$ 113,57",
//         genero: "Gênero: Desenvolvimento"
//     },
//     {
//         imagem: "imagens/introducao-python.jpg",
//         link: "sinopses-html/introducao-a-python.html",
//         titulo: "Introdução a Python",
//         preco: "R$ 66,75",
//         genero: "Gênero: Desenvolvimento"
//     },
//     {
//         imagem: "imagens/java-como-programar.jpg",
//         link: "sinopses-html/java-como-programar.html",
//         titulo: "Java: Como Programar",
//         preco: "R$ 270,00",
//         genero: "Gênero: Desenvolvimento"
//     },
//     {
//         imagem: "imagens/redes-de-computadores.jpg",
//         link: "sinopses-html/redes-de-computadores.html",
//         titulo: "Redes de Computadores",
//         preco: "R$ 205,00",
//         genero: "Gênero: Redes"
//     },
//     {
//         imagem: "imagens/sistemas-operacionais.jpg",
//         link: "sinopses-html/sistemas-operacionais.html",
//         titulo: "Sistemas Operacionais",
//         preco: "R$ 280,00",
//         genero: "Gênero: Sistemas Operacionais"
//     },
//     {
//         imagem: "imagens/sql-para-leigos.jpg",
//         link: "sinopses-html/sql-para-leigos.html",
//         titulo: "SQL Para Leigos",
//         preco: "R$ 92,40",
//         genero: "Gênero: Banco de Dados"
//     },
//     {
//         imagem: "imagens/tecnicas-de-invasao.jpg",
//         link: "sinopses-html/tecnicas-de-invasao.html",
//         titulo: "Técnicas de Invasão",
//         preco: "R$ 49,73",
//         genero: "Gênero: Hacking"
//     },
//     {
//         imagem: "imagens/use-a-cabeca.jpg",
//         link: "sinopses-html/use-a-cabeca.html",
//         titulo: "Use a cabeça! PHP e MySQL",
//         preco: "R$ 60,00",
//         genero: "Gênero: Desenvolvimento e BD"
//     },

//     {
//         imagem: "imagens/1984.jpg",
//         link: "sinopses-html/1984.html",
//         titulo: "1984",
//         preco: "R$ 79,00",
//         genero: "Literatura"
//     },

//     {
//         imagem: "imagens/a-culpa-e-das-estrelas.jpg",
//         link: "sinopses-html/a-culpa-e-das-estrelas.html",
//         titulo: "A Culpa é das Estrelas",
//         preco: "R$ 32,40",
//         genero: "Literatura"
//     },

//     {
//         imagem: "imagens/a-revolucao-dos-bichos.jpg",
//         link: "sinopses-html/a-revolucao-dos-bichos.html",
//         titulo: "A Revolução dos Bichos",
//         preco: "R$ 60,00",
//         genero: "Literatura"
//     },

//     {
//         imagem: "imagens/cem-anos-de-solidao.jpg",
//         link: "sinopses-html/cem-anos-de-solidao.html",
//         titulo: "Cem Anos de Solidão",
//         preco: "R$ 66,75",
//         genero: "Literatura"
//     },

//     {
//         imagem: "imagens/dom-quixote.jpg",
//         link: "sinopses-html/dom-quixote.html",
//         titulo: "Dom Quixote",
//         preco: "R$ 46,49",
//         genero: "Literatura"
//     },

//     {
//         imagem: "imagens/harry-potter-e-a-pedra-filosofal.jpg",
//         link: "sinopses-html/harry-potter-e-a-pedra-filosofal.html",
//         titulo: "Harry Potter e a Pedra Filosofal",
//         preco: "R$ 87,00",
//         genero: "Literatura"
//     },

//     {
//         imagem: "imagens/o-apanhador-no-campo.jpg",
//         link: "sinopses-html/o-apanhador-no-campo.html",
//         titulo: "O Apanhador no Campo de Centeio",
//         preco: "R$ 65,00",
//         genero: "Literatura"
//     },

//     {
//         imagem: "imagens/o-grande-gatsby.jpg",
//         link: "sinopses-html/o-grande-gatsby.html",
//         titulo: "O Grande Gatsby",
//         preco: "R$ 53,57",
//         genero: "Literatura"
//     },

//     {
//         imagem: "imagens/o-pequeno-principe.jpg",
//         link: "sinopses-html/o-pequeno-principe.html",
//         titulo: "O Pequeno Príncipe",
//         preco: "R$ 49,73",
//         genero: "Literatura"
//     },

//     {
//         imagem: "imagens/o-senhor-dos-aneis.jpg",
//         link: "sinopses-html/o-senhor-dos-aneis.html",
//         titulo: "O Senhor dos Anéis: A Sociedade do Anel",
//         preco: "R$ 180,00",
//         genero: "Literatura"
//     },

//      ]
// import LivroController from "../node.js/API-Livros/src/controllers/livrosController.js";
// import axios from 'axios';
// const axios = require('axios');
// const getLivros = async () => {
//   try{
//     const livros = await fetch('http://localhost:3000/livros', { 
//       method: "GET",
//       mode: "no-cors",
//     })
//     console.log(livros, 'livros do get')
//     return livros
//   }catch(err){
//     console.log(err)
//   }

// }
// const arrayLivros = getLivros()
//   for(let i = 0; i < arrayLivros.length; i++) {
//     const infoL = document.createElement('div');
//     infoL.setAttribute('class','info-livros');
//     infoL.innerHTML =
//       `
//         <a href = "${arrayLivros[i].link}" target="_self" rel="next"><img src="${arrayLivros[i].imagem}" alt="${arrayLivros[i].titulo}" class="capa-livros"></a>
//         <h2>${arrayLivros[i].titulo}</h2>
//         <h3>${arrayLivros[i].preco}</h3>
//         <h3>${arrayLivros[i].genero}</h3>
//       `
//     const div = document.querySelector('.livros');
//     div.appendChild(infoL);
// }

const getLivros = async () => {
    try {
      const response = await fetch('http://localhost:3000/livros', {
        method: "GET",
        mode: 'no-cors'
      });
  
      if (!response.ok) {
        console.log(response)
        throw new Error(`Erro ao obter livros: ${response.status}`);
      }
  
      const livros = await response.json();
      console.log(livros, 'livros do get');
      return livros;
    } catch (err) {
      console.error(err);
      throw err; // Propague o erro para que quem chama saiba que algo deu errado.
    }
  };
  getLivros()
   /* const carregarLivros = async () => {
    try {
      const arrayLivros = await getLivros();
  
      for (let i = 0; i < arrayLivros.length; i++) {
        const infoL = document.createElement('div');
        infoL.setAttribute('class', 'info-livros');
        infoL.innerHTML =
          `
            <a href="${arrayLivros[i].link}" target="_self" rel="next"><img src="${arrayLivros[i].imagem}" alt="${arrayLivros[i].titulo}" class="capa-livros"></a>
            <h2>${arrayLivros[i].titulo}</h2>
            <h3>${arrayLivros[i].preco}</h3>
            <h3>${arrayLivros[i].genero}</h3>
          `;
  
        const div = document.querySelector('.livros');
        div.appendChild(infoL);
      }
    } catch (err) {
      console.error('Erro ao carregar livros:', err);
    }
  };
  
  carregarLivros(); */
/*  const arrayLivros = async() => {
    const livros = await getLivros()
    return livros
  }

  for (let i = 0; i < arrayLivros.length; i++) {
    const infoL = document.createElement('div');
    infoL.setAttribute('class', 'info-livros');
    infoL.innerHTML =
      `
        <a href="${arrayLivros[i].link}" target="_self" rel="next"><img src="${arrayLivros[i].imagem}" alt="${arrayLivros[i].titulo}" class="capa-livros"></a>
        <h2>${arrayLivros[i].titulo}</h2>
        <h3>${arrayLivros[i].preco}</h3>
        <h3>${arrayLivros[i].genero}</h3>
      `;

    const div = document.querySelector('.livros');
    div.appendChild(infoL);
  } */
  