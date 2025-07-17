const botao = document.getElementById('vermais');
const containerGaleria = document.getElementById('container-galeria');
let vermais = false;

botao.addEventListener('click', function() {
        if (vermais) {
            // Reduzir o tamanho da galeria
            containerGaleria.style.height = '600px';
            botao.innerHTML = 'Ver mais';
            vermais = false; // Atualiza o estado
        } else {
            // Aumentar o tamanho da galeria
            containerGaleria.style.height = '1100px';
            botao.innerHTML = 'Ver menos';
            vermais = true; // Atualiza o estado
        }
    });

document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão do link
            const targetId = this.getAttribute('href').substring(1); // Pega o ID do destino
            const targetSection = document.getElementById(targetId);
    
            // Rola até a seção
            targetSection.scrollIntoView({
                behavior: 'smooth', // Rolagem suave
                block: 'start' // Alinha ao início da seção
            });
        });
    });



