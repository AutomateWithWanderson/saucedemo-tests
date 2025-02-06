class HomePage {
    constructor(page) {
      this.page = page;     
    }

    async navigate() {
      await this.page.goto("https://www.saucedemo.com/v1/");
    }
  
    // Método que realiza o login com o usuário fornecido
    async SignIn(user) {
      if (!user || !user.username || !user.password) {
        throw new Error("Usuário ou senha não fornecidos corretamente.");
      }
  
      await this.page.fill("#user-name", user.username);
      await this.page.fill("#password", user.password);
      await this.page.click("#login-button");
    }
  }
  
  module.exports = HomePage;
  