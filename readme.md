# 🛒 Product Register  

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5)
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?logo=javascript)

> Um projeto simples e intuitivo para cadastrar, visualizar e excluir produtos — tudo direto no navegador, usando **JavaScript puro** e **localStorage**.

---

## 🌟 **Visão Geral**

O **Product Register** é um projeto desenvolvido para praticar e consolidar conhecimentos em **HTML**, **CSS** e **JavaScript**.  
Ele permite que o usuário registre produtos informando **nome**, **categoria**, **código** e **preço**, e visualize tudo de forma organizada em uma tabela.  
Os dados são salvos localmente no navegador, garantindo que as informações não se percam ao recarregar a página.

---

## 🖼️ **Exemplo da Interface**

<div align="center">
  <img src="assets/demo.gif" alt="Demonstração do Product Register" width="80%">
  <br>
  <em>Cadastro e exclusão de produtos em ação!</em>
</div>

---

## ⚙️ **Funcionalidades**

✅ **Cadastro de produtos com validação inteligente**  
- O **nome** aceita apenas letras e espaços  
- O **código** precisa ter **exatamente 7 números**  
- O **preço** deve ser **positivo e válido**  

✅ **Armazenamento local com localStorage**  
- Todos os produtos ficam salvos no navegador, sem necessidade de servidor  

✅ **Listagem organizada em tabela**  
- Exibe nome, categoria, código e preço formatado em **Real (R$)**  

✅ **Exclusão de produtos**  
- Cada linha possui um botão 🗑️ para remover produtos individualmente  
- Possibilidade de adicionar **confirmação antes de deletar** para evitar exclusões acidentais  

✅ **Feedback visual ao usuário**  
- Mensagens de sucesso e erro ajudam a entender o que está acontecendo  

---

## 🧠 **Motivação do Projeto**

Este projeto foi criado com o objetivo de praticar:
- **Manipulação do DOM** com JavaScript puro  
- **Validação de formulários** com regex  
- **Uso de localStorage** para persistência de dados  
- **Boas práticas de estrutura e feedback ao usuário**

---

## 🧩 **Tecnologias Utilizadas**

| Tecnologia | Descrição |
|-------------|------------|
| **HTML5** | Estrutura e semântica das páginas |
| **CSS3** | Estilização, layout e responsividade |
| **JavaScript (ES6)** | Lógica de cadastro, validação e armazenamento |
| **jQuery Mask Plugin** | Máscara de entrada para o campo de preço |
| **localStorage API** | Armazenamento local dos produtos |

---

## 📂 **Estrutura do Projeto**

📁 product-register
│
├── index.html # Página principal (formulário de cadastro)
├── registered.html # Página com a tabela de produtos
├── assets/
│ ├── css/
│ │ ├── global.css # Estilos globais
│ │ └── styles.css # Estilos da interface
│ ├── js/
│ │ ├── product.js # Classe Product (estrutura e métodos)
│ │ ├── script.js # Lógica de cadastro e validação
│ │ └── registered.js # Listagem e exclusão de produtos
│ └── demo.gif # GIF de demonstração da interface
└── README.md # Documentação


---

## 🖥️ **Como Executar o Projeto**

1. **Clone este repositório**
   ```bash
   git clone https://github.com/seu-usuario/product-register.git

   cd product-register


Abra o arquivo index.html

Clique duas vezes ou abra com seu navegador preferido.

Cadastre produtos e veja a mágica acontecer ✨

---

🎨 Design e Usabilidade

O projeto foi desenvolvido pensando na simplicidade e clareza:

Layout centralizado e responsivo

Botões com cores distintas e efeitos de hover

Tabela com contraste para leitura fácil

Mensagens dinâmicas para orientar o usuário

---


💡 Próximas Melhorias

🚀 Ideias para evoluir o projeto:

 Adicionar função de editar produto

 Implementar busca e filtro por nome ou categoria

 Adicionar confirmação antes de excluir

 Conectar com backend (ex: Node.js ou Firebase)

 Criar tema escuro (dark mode)

 ---

🙌 Aprendizados

Durante o desenvolvimento deste projeto, foi possível:

Aprender sobre validação de entradas com regex

Usar localStorage como alternativa de banco local

Praticar JavaScript moderno (ES6)

Reforçar a importância de uma UX clara e responsiva


