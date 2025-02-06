class Notification {
    constructor(page) {
      this.page = page;
      this.successMessage = ".product_label"; 
      this.errorMessage = "h3[data-test='error']"; 
    }
  
    // Validação de sucesso no login
    async validateSuccessOnSignIn() {
      await this.page.waitForSelector(this.successMessage);
    }
  
    // Validação de mensagem de erro no login
    async validateInvalidCredentials() {
      const message = await this.page.textContent(this.errorMessage);
      if (!message.includes("Epic sadface: Username and password do not match")) {
        throw new Error(`Mensagem de erro esperada não encontrada. Recebido: ${message}`);
      }
    }
}

module.exports = Notification;