const registerTableBody = document.querySelector("#register tbody");

// pega produtos do localStorage
const products = JSON.parse(localStorage.getItem("products")) || [];

function renderTable() {
  registerTableBody.innerHTML = ""; // limpa tabela antes de renderizar novamente

  products.forEach((p, index) => {
    const row = document.createElement("tr");
    const priceFormatted = parseFloat(p.price).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    row.innerHTML = `
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${p.coder}</td>
      <td>${priceFormatted}</td>
      <td><button class="delete-btn" data-index="${index}">🗑️</button></td>
    `;

    registerTableBody.appendChild(row);
  });
}

// evento de delete
registerTableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const index = e.target.getAttribute("data-index");
    products.splice(index, 1); // remove do array
    localStorage.setItem("products", JSON.stringify(products)); // atualiza localStorage
    renderTable(); // re-renderiza tabela
  }

  if (confirm("Tem certeza que deseja excluir este produto?")) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    renderTable();
  }
  
});

renderTable();
