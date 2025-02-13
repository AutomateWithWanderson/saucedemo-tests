
# 📌 Automação de Testes com Playwright:

## 🛠 Sobre o Projeto

Este projeto contém testes automatizados para a página de login e o fluxo de compras no site SauceDemo, utilizando **Playwright** com **JavaScript**. Os testes validam cenários de sucesso e falha, garantindo a confiabilidade das funcionalidades essenciais da aplicação.

## 🛠 Ferramentas utilizadas:

- **Playwright** → Framework de testes end-to-end.
- **JavaScript** → Linguagem usada nos testes.
- **Page Object Patern** → Organização do código para facilitar manutenção.

---

## 🛠 Fluxo de Login - SauceDemo

Valida diferentes cenários de login no site SauceDemo, garantindo que apenas usuários com credenciais corretas consigam acessar a plataforma.

### 🛠 Cenário: Login bem-sucedido

1️⃣ **Acesso à página de login**  
Acessar o site SauceDemo.

2️⃣ **Inserção de credenciais válidas**  
Preencher os campos:  
- **Usuário**: `standard_user`  
- **Senha**: `secret_sauce`  
Clicar no botão **Login**.

3️⃣ **Validação do login**  
Confirmar que o usuário foi redirecionado para a página de produtos.  
Validar que a lista de produtos está visível.

---

### 🛠 Cenário: Login mal-sucedido

1️⃣ **Acesso à página de login**  
Acessar o site SauceDemo.

2️⃣ **Inserção de credenciais inválidas**  
Preencher os campos:  
- **Usuário**: `wrong-username`  
- **Senha**: `wrong-password`  
Clicar no botão **Login**.

3️⃣ **Validação da mensagem de erro**  
Confirmar que o acesso foi negado.  
Validar a exibição da mensagem de erro:  
_"Epic sadface: Username and password do not match"_

---

## 🛠 Fluxo de Compra - SauceDemo

Valida o fluxo completo de compra no site, garantindo que o usuário consiga selecionar um produto, finalizar a compra e visualizar a mensagem de sucesso.

### 🛠 Cenário: Compra bem-sucedida de um produto

1️⃣ **Login**  
Acessar o site SauceDemo.  
Inserir credenciais válidas:  
- **Usuário**: `standard_user`  
- **Senha**: `secret_sauce`  
Clicar no botão **Login**.

2️⃣ **Adição de produto ao carrinho**  
Escolher um produto e clicar em **Add to cart**.  
Acessar o carrinho e validar que o produto foi adicionado corretamente.

3️⃣ **Processo de Checkout**  
Clicar no botão **Checkout**.  
Preencher os dados obrigatórios:  
- Nome  
- Sobrenome  
- Código Postal (CEP)  
Avançar para a próxima etapa.

4️⃣ **Finalização da Compra**  
Validar o resumo da compra.  
Clicar no botão **Finish**.  
Confirmar que a mensagem de sucesso:  
_"THANK YOU FOR YOUR ORDER"_ é exibida.

---

### 🛠 Cenário: Compra mal-sucedida de um produto

1️⃣ **Login**  
Acessar o site SauceDemo.  
Inserir credenciais válidas:  
- **Usuário**: `standard_user`  
- **Senha**: `secret_sauce`  
Clicar no botão **Login**.

2️⃣ **Adição de produto ao carrinho**  
Escolher um produto e clicar em **Add to cart**.  
Acessar o carrinho e validar que o produto foi adicionado corretamente.

3️⃣ **Processo de Checkout**  
Clicar no botão **Checkout**.  
Não preencher os dados obrigatórios:  
- Nome  
- Sobrenome  
- Código Postal (CEP)  
Avançar para a próxima etapa.  
Confirmar a exibição da mensagem de erro:  
_"First Name is required"_
