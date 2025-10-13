import { Product } from "./product.js";

const form = document.getElementById("product-form");
const message = document.getElementById("message");

jQuery(document).ready(function ($) {
  $(".money").mask("000.000.000.000.000,00", { reverse: true });
});

document.getElementById("registered").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "registered.html";
});

function getFormData(form) {
  const data = {};
  for (let el of form.elements) {
    if (el.name) data[el.name] = el.value.trim();
  }
  return data;
}

function validateData(data, form) {
  let isValid = true;

  Object.keys(data).forEach((key) => {
    const input = form.elements[key];
    if (!data[key]) {
      if (isValid) input.focus();
      isValid = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  return isValid;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.innerText = "";
  message.style.color = "green";

  const data = getFormData(form);
  if (!validateData(data, form)) {
    message.innerText = "Preencha todos os campos!";
    message.style.color = "red";
    return;
  }

  if (!/^\d{1,7}$/.test(data.coder)) {
    message.innerText = "Código deve ter no máximo 7 números!";
    message.style.color = "red";
    form.elements["coder"].focus();
    form.elements["coder"].classList.add("error");
    return;
  }

  const priceClean = data.price.replace(/\./g, "").replace(",", ".");
  if (isNaN(priceClean) || parseFloat(priceClean) <= 0) {
    message.innerText = "Insira um preço válido!";
    message.style.color = "red";
    form.elements["price"].focus();
    form.elements["price"].classList.add("error");
    return;
  }

  const product = new Product(data.name, data.category, data.coder, priceClean);

  // salvar no localStorage
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product.getData());
  localStorage.setItem("products", JSON.stringify(products));

  Product.clearForm(form);
  message.innerText = "Produto cadastrado com sucesso!";
});
