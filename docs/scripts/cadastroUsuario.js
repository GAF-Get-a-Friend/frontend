const apiUrl = "http://localhost:5000/endpoint"

const form = document.getElementById('content');

    // Adiciona um evento para quando o formulário for enviado
    form.addEventListener('submit', async (event) => {
      event.preventDefault(); // Previne o envio padrão do formulário

      // Captura os dados do formulário
      const formData = {
        nome: form.nome.value,
        sobrenome: form.sobrenome.value,
        email: form.email.value,
        senha: form.senha.value,
        telefone: form.telefone.value,
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