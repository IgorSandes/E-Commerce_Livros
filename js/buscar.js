function pesquisar(){

    const busca = document.getElementById("buscar").value
    let livro = [...document.getElementsByClassName('info-livros')]
    const main = document.querySelector("main")
    
    console.log(busca)
    for(i = 0; i < livro.length; i++){
        if(!livro[i].textContent.toLowerCase().includes(busca)){
            livro[i].style.display = "none";  
            main.style.height = "60rem";
        }
        else{
            // console.log(livro[i])
            livro[i].style.display = "block";
            main.style.height = "100%";
        }
    }
}