function pesquisar(){

    const busca = document.getElementById("buscar").value.toLowerCase()
    let livro = [...document.getElementsByClassName('info-livros')]
    console.log(busca)
    for(i = 0; i < livro.length; i++){
        if(!livro[i].textContent.toLowerCase().includes(busca)){
            livro[i].style.display = "none";       
        }
        else{
            // console.log(livro[i])
            livro[i].style.display = "block";
        }
    }
}