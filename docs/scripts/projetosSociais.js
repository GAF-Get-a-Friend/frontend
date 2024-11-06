function displayData(data) {
  const contentDiv = document.getElementById("content");

  data.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "card";
    itemDiv.href = item.link;

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;
    img.className = "card-img";
    itemDiv.appendChild(img);

    const textDiv = document.createElement("div");
    textDiv.className = "card-content";

    const title = document.createElement("h2");
    title.textContent = item.title;
    title.className = "card-title";
    textDiv.appendChild(title);

    const description = document.createElement("p");
    description.textContent = item.descricao;
    description.className = "card-description";
    textDiv.appendChild(description);

    const link = document.createElement("a");
    link.href = item.link;
    link.textContent = "Saiba mais";
    link.className = "card-link";
    link.target = "_blank";
    textDiv.appendChild(link);

    itemDiv.appendChild(textDiv);

    contentDiv.appendChild(itemDiv);
  });
}

function loadData() {
  fetch("../data/projetosSociais.json")
    .then((response) => response.json())
    .then((data) => displayData(data))
    .catch((error) => console.error("Erro ao carregar dados:", error));
}

loadData();
