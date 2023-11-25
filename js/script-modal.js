function abrirModal() 
{
    const modal = document.getElementById('modal-container');
    modal.classList.add('mostrar');

    modal.addEventListener('click', (e) => 
    {
        if (e.target.id == 'modal-container' || e.target.id == 'fechar') 
        {
            modal.classList.remove('mostrar');
            localStorage.setItem('modal-container', 'fechar');
        }
    });
}
//abrir modal (pop-up) ao carregar a index.html
window.onload = function() 
{
    //depois que aberto uma vez, não abre mais...para abrir, limpar cache navegador.
    var modalExibido = localStorage.getItem('modal-container');
    if (!modalExibido || modalExibido !== 'fechar') 
    {
        abrirModal();
    }
};

