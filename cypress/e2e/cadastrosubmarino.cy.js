describe('Teste de acesso ao site submarino', () => {
    beforeEach(() => {
      cy.visit('https://cliente.submarino.com.br/minha-conta/cadastro?next=https://www.submarino.com.br/')
   
    })
      it('Validar campos de cadastro de novo usuário', () => {
      // Elementos do formulário
      const nameField = '[data-cy="formField__name"]';
      const femaleGender = '[data-cy="labelFor__F"] > span';
      const maleGender = '[data-cy="labelFor__M"] > span';
      const notInformedGender = '[data-cy="labelFor__NI"] > span';
      const birthDateField = '[data-cy="formField__birthDate"]';
      const cpfField = '[data-cy="formField__cpf"]';
      const phoneField = '[data-cy="formField__phone"]';
      const emailField = '[data-cy="formField__email"]';
      const passwordField = '[data-cy="formField__password"]';
      const promotionalEmailsCheckbox = '[data-cy="formField__promotionalEmails"]';
      const shareDataCheckbox = '[data-cy="formField__dataSharingThirdParty"]';
      const createAccountButton = '[data-cy="sign-submit"]';
     
      // Preencher o nome
      cy.get(nameField).type('Maria Joaquina');
  
      // Validar e selecionar gênero "Feminino"
      cy.get(femaleGender).should('exist').click();
  
      // Validar e selecionar gênero "Masculino"
      cy.get(maleGender).should('exist').click();
  
      // Validar e selecionar gênero "Não informar"
      cy.get(notInformedGender).should('exist').click();
  
      // Preencher dados pessoais e de contato
      cy.get(birthDateField).type('22/05/1989');
      cy.get(cpfField).type('15709591025');
      cy.get(phoneField).type('85988888888');
      cy.get(emailField).type('edineteb.sousa@gmail.com');
      cy.get(passwordField).type('123456');
  
      // Validar e desmarcar a seleção do checkbox "Receber e-mails promocionais"
      cy.get(promotionalEmailsCheckbox).uncheck();
  
      // Validar e desmarcar a seleção do checkbox "Compartilhar meus dados..."
      cy.get(shareDataCheckbox).uncheck();
  
      // Validar o clique no botão "Criar cadastro"
      cy.get(createAccountButton).click();
  
      // Validar captcha
      Cypress.Commands.add("clickRecaptcha", () => {
      cy.window().then(win => {
      win.document
        .querySelector("iframe[src*='recaptcha']")
        .contentDocument.getElementById("recaptcha-token").click();

        });
      });
    });
  });