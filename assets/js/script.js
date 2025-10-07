const form = document.getElementById("product-form");
const message = document.getElementById("message");
const registeredProducts = document.getElementById("register");

class Product {
  constructor(name, category, coder, price) {
    Object.assign(this, { name, category, coder, price });
  }

  register() {
    const list = document.createElement("li");

    const priceFormatted = parseFloat(this.price).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    list.innerHTML = `Nome: ${this.name} | Categoria: ${this.category} | Código: ${this.coder} | Preço: ${priceFormatted}`;
    registeredProducts.appendChild(list);
  }

  static clearForm() {
    form.reset();
  }
}

jQuery(document).ready(function ($) {
  $(".money").mask("000.000.000.000.000,00", { reverse: true });
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
      if (input) input.classList.add("error");
    } else {
      if (input) input.classList.remove("error");
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
    message.innerText = "Por favor, preencha todos os campos.";
    message.style.color = "red";
    return;
  }

  if (!/^\d{1,7}$/.test(data.coder)) {
    message.innerText = "O código deve ter no máximo 7 números.";
    message.style.color = "red";
    const input = form.elements["coder"];
    input.focus();
    input.classList.add("error");
    return;
  } else {
    form.elements["coder"].classList.remove("error");
  }

  const priceClean = data.price.replace(/\./g, "").replace(",", ".");
  if (isNaN(priceClean) || parseFloat(priceClean) <= 0) {
    message.innerText = "Por favor, insira um preço válido.";
    message.style.color = "red";
    const input = form.elements["price"];
    input.focus();
    input.classList.add("error");
    return;
  } else {
    form.elements["price"].classList.remove("error");
  }

  const product = new Product(
    data.name,
    data.category,
    data.coder,
    priceClean
  );

  product.register();
  Product.clearForm();

  message.innerText = "Produto cadastrado com sucesso!";

  Object.keys(data).forEach((key) => {
    const input = form.elements[key];
    if (input) input.classList.remove("error");
  });
});
