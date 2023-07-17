describe('Teste de acesso ao site submarino', () => {
 
    beforeEach(() => {
      cy.visit('https://cliente.submarino.com.br/minha-conta/cadastro?next=https://www.submarino.com.br/')
    
    })

    it('Validar a opção de cadastro de novo usuário', () => {
        cy.get('[data-cy="formField__name"]').type('Maria Joaquina')
        
    //Validar a seleção do radio button para o gênero "Feminino"
        cy.get('[data-cy="labelFor__F"] > span').should('exist')
        cy.get('[data-cy="labelFor__F"] > span').click()
    
    //Validar a seleção do radio button para o gênero "Masculino"
        cy.get('[data-cy="labelFor__M"] > span').should('exist')
        cy.get('[data-cy="labelFor__M"] > span').click()
    
    //Validar a seleção do radio button para o gênero "Não informar"'
        cy.get('[data-cy="labelFor__NI"] > span').should('exist')
        cy.get('[data-cy="labelFor__NI"] > span').click()

    //Preencer dados pessoais e de contato
        cy.get('[data-cy="formField__birthDate"]').type('22/05/1989')
        cy.get('[data-cy="formField__cpf"]').type('15709591025')
        cy.get('[data-cy="formField__phone"]').type('85988888888')
        cy.get('[data-cy="formField__email"]').type('edineteb.sousa@gmail.com')
        cy.get('[data-cy="formField__password"]').type('123456')
    
    //Validar e desmarcar a seleção do checkbox "Receber e-amails promocionais"
        cy.get('[data-cy="formField__promotionalEmails"]').click()  

    //Validar e desmarcar a seleção do checkbox "compartilhar meus dados (...)"
        cy.get(':nth-child(10) > .sc-fDkjNg > .sc-jOZkJh > #input-border > .sc-chEtYo > .sc-eYJDIX').click()
    
    //Validar o clique no botão de "Criar cadastro"
        cy.get('[data-cy="sign-submit"]').click()

    //Validar capcha
        cy.get('[style="margin: 0px auto; top: 0px; left: 0px; right: 0px; position: absolute; border: 1px solid rgb(204, 204, 204); z-index: 2000000000; background-color: rgb(255, 255, 255); overflow: hidden; width: 400px; height: 580px;"] > iframe').should('be.visible')
        
    })

})