async function fetchAndDisplayPets(race) {
  try {
    // Monta a URL com o query param 'race'
    const url = `http://localhost:3000/pets?race=${encodeURIComponent(race)}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Resposta da API
    const pets = data.pets; // Extraindo o array `pets` do objeto

    if (!Array.isArray(pets)) {
      throw new Error('A propriedade "pets" não é um array.');
    }

    const container = document.getElementById("petsContainer");
    container.innerHTML = "";

    pets.forEach((pet) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${pet.photoLink}" alt="${pet.name}">
        <h3>${pet.name}</h3>
        <p><strong>Sexo:</strong> ${pet.sexo}</p>
        <p><strong>Idade:</strong> ${pet.idade} anos</p>
        <p><strong>Raça:</strong> ${pet.race}</p>
        <p>${pet.desc}</p>
        <p><small>Criado em: ${new Date(
          pet.createdAt
        ).toLocaleDateString()}</small></p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}

// Evento para detectar mudanças no select
const raceSelect = document.getElementById("raceSelect");
raceSelect.addEventListener("change", () => {
  const selectedRace = raceSelect.value; // Obtém o valor selecionado
  fetchAndDisplayPets(selectedRace); // Chama a função com o parâmetro
});

// Carrega inicialmente com o primeiro valor selecionado
fetchAndDisplayPets(raceSelect.value);
