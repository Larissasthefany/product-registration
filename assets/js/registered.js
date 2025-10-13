const registerTableBody = document.querySelector("#register tbody");

// pega produtos do localStorage
const products = JSON.parse(localStorage.getItem("products")) || [];

products.forEach((p) => {
  const row = document.createElement("tr");
  const priceFormatted = parseFloat(p.price).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  row.innerHTML = `
    <td>${p.name}</td>-
    <td>${p.category}</td>
    <td>${p.coder}</td>
    <td>${priceFormatted}</td>
  `;
  registerTableBody.appendChild(row);
});
