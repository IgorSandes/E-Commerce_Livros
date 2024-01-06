async function getLivros () {
  const response = await fetch('http://localhost:3000/livros')
  const profileData = await response.json()
  console.log(profileData)
  return profileData;
}

getLivros()
const carregarLivros = async () => {
  try {
    const arrayLivros = await getLivros();

    for (let i = 0; i < arrayLivros.length; i++) {
      const infoL = document.createElement('div');
      infoL.setAttribute('class', 'info-livros');
      infoL.innerHTML =
        `
            <a href="${arrayLivros[i].link}" target="_self" rel="next"><img src="${arrayLivros[i].imagem}" alt="${arrayLivros[i].titulo}" class="capa-livros"></a>
            <h2>${arrayLivros[i].titulo}</h2>
            <h3>R$ ${arrayLivros[i].preco}</h3>
            <h3>${arrayLivros[i].genero}</h3>
          `;

      const div = document.querySelector('.livros');
      div.appendChild(infoL);
    }
  } catch (err) {
    console.error('Erro ao carregar livros:', err);
  }
};

carregarLivros();