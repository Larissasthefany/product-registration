const form = document.getElementById("product-form");
const message = document.getElementById("message");
const registeredProducts = document.getElementById("register");

class Product {
  constructor(name, category, coder, price) {
    Object.assign(this, { name, category, coder, price });
  }

  register() {
    const list = document.createElement("li");
    list.innerHTML = `Nome: ${this.name} | Categoria: ${this.category} | Código: ${this.coder} | Preço: R$${this.price}`;
    registeredProducts.appendChild(list);
  }

  static clearForm() {
    form.reset();
  }
}

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
    const input = form[key];

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
    message.innerText = "Por favor, preencha todos os campos.";
    message.style.color = "red";
    return;
  }

  if(!/^\d{1,7}$/.test(data.coder)){
    message.innerText = "O código deve ter no mínimo 7 caracteres.";
    message.style.color = "red";
    form.coder.focus();
    form.coder.classList.add("error");
    return;
  }else {
    form.coder.classList.remove("error");
  }

  if(isNaN(data.price) || parseFloat(data.price) <= 0){
    message.innerText = "Por favor, insira um preço válido.";
    message.style.color = "red";
    form.price.classList.add("error");
    form.price.focus();
    return;
  }else{
    form.price.classList.remove("error");
  }

  const product = new Product(
    data.name,
    data.category,
    data.coder,
    parseFloat(data.price).toFixed(2)
  );

  product.register();
  Product.clearForm();

  message.innerText = "Produto cadastrado com sucesso!";

  Object.keys(data).forEach((key) => form[key].classList.remove("error"));
});
