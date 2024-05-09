import { elements } from "./elements";
const eSocial = require('../../../../ESocial.json')  

class LoginPage{
    acessarHost(){
        cy.visit('https://proxima.sisprevweb.com.br/esocial_testeaut/')
    }

    logarESocial(){
        
        cy.get(elements.inputLogin).type(eSocial.autentication.login)
        cy.get(elements.inputSenha).type(eSocial.autentication.senha)
        cy.contains(elements.btnAcessar).click()
    }

    selecionarOrigemDados(){
        cy.get(elements.validaLogin).should('be.visible').click()
        cy.get(elements.selectItemTESTEAUT).click()
        cy.get('button').contains(elements.btnConfirmar).click()
    }
    verificarUsuarioLogado(){
        cy.contains(eSocial.autentication.login).should('be.visible')
    }
    LoginComSelecaoDeOrigemDeDados(){
        this.acessarHost()
        this.logarESocial()
        this.selecionarOrigemDados()
        this.verificarUsuarioLogado()
    }
}

export default new LoginPage()