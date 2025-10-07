/**
 * Função para alternar a visibilidade do menu de navegação
 * em dispositivos móveis.
 */
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    
    // Alterna a classe 'open' no elemento do menu.
    // O CSS define o que acontece quando a classe 'open' está presente.
    navMenu.classList.toggle('open'); 
}

// Opcional: Adicionar funcionalidade extra de fechar o menu ao clicar em um link
document.querySelectorAll('#nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
        const navMenu = document.getElementById('nav-menu');
        // Fecha o menu após o clique (útil em telas móveis)
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
        }
    });
});