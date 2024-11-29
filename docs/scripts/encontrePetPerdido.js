const menuToggle = document.querySelector('.menu-toggle');
const filtros = document.querySelector('.Filtros');

menuToggle.addEventListener('click', function () {
    filtros.classList.toggle('active'); // Alterna a classe "active" para abrir/fechar o menu
});

document.addEventListener('click', function (event) {
    if (!filtros.contains(event.target) && !menuToggle.contains(event.target)) {
        filtros.classList.remove('active'); // Fecha o menu se clicar fora
    }
});

const apiUrl = "http://localhost:5000/endpoint"

const form = document.getElementById('content');

    // Adiciona um evento para quando o formulário for enviado
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Previne o envio padrão do formulário

      // Captura os dados do formulário
      const formData = {
        nomePet: form.nomePet.value,
        sexoPet: form.sexoPet.value,
        idadePet: form.idadePet.value,
        descricaoPet: form.descricaoPet.value
      };

      try {
        // Faz a requisição POST
        const response = await fetch(apiUrl, {
          method: 'POST', // Método HTTP
          headers: {
            'Content-Type': 'application/json' // Define o tipo de conteúdo
          },
          body: JSON.stringify(formData) // Converte os dados para JSON
        });

        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        }

      } catch (error) {
        console.error('Erro ao enviar os dados:', error);
        document.getElementById('mensagem').textContent = 'Erro ao realizar o cadastro.';
      }
    });