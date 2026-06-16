// Aguarda o carregamento total do DOM para garantir que os elementos existem na tela
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ROLAGEM SUAVE PARA OS LINKS DO MENU
    const linksMenu = document.querySelectorAll('nav a[href^="#"]');
    
    linksMenu.forEach(link => {
        link.addEventListener("click", function(evento) {
            evento.preventDefault(); // Evita o pulo brusco do link padrão
            
            const idAlvo = this.getAttribute("href");
            const secaoAlvo = document.querySelector(idAlvo);
            
            if (secaoAlvo) {
                secaoAlvo.scrollIntoView({
                    behavior: "smooth", // Faz o deslize suave
                    block: "start"
                });
            }
        });
    });

    // 2. ANIMAÇÃO AO ROLAR A PÁGINA (Efeito de Revelação/Fade-in)
    // Seleciona os cartões do campo e as seções para animar
    const elementosParaAnimar = document.querySelectorAll('.card, .grid-2, .lista-sustentavel li');

    // Configuração do observador de tela (Intersection Observer)
    const observadorOpcoes = {
        threshold: 0.15, // Ativa a animação quando 15% do elemento estiver visível
        rootMargin: "0px 0px -50px 0px"
    };
    const observadorJanela = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // Adiciona uma classe de visibilidade (que será estilizada no CSS)
                entrada.target.style.opacity = "1";
                entrada.target.style.transform = "translateY(0)";
                entrada.target.style.transition = "all 0.6s ease-out";
                
                // Uma vez animado, não precisa observar novamente
                observador.unobserve(entrada.target);
            }
        });
    }, observadorOpcoes);

    // Aplica o estado inicial escondido e começa a observar os elementos
    elementosParaAnimar.forEach(elemento => {
        elemento.style.opacity = "0";
        elemento.style.transform = "translateY(20px)";
        observadorJanela.observe(elemento);
    });

    // 3. EXTRA: MENSAGEM DE BOAS-VINDAS INTERATIVA NO CONSOLE
    // Apenas para dar um toque especial de programador ao projeto do Agrinho
    console.log("%c🌱 Projeto Agrinho: Semeando Saberes, Colhendo Futuro! 🌱", "color: green; font-size: 16px; font-weight: bold;");
    console.log("O bem do campo e a tecnologia trabalhando juntos.");
});
