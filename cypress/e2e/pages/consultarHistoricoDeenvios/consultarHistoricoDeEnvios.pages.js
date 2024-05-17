import { elements } from "../consultarHistoricoDeenvios/elements";
import loginPages from "../Login/login.pages";


class consultarHistoricoDeenvios{

    realizarLogincomSelecaoDeorigemDeDados(){
        loginPages.LoginComSelecaoDeOrigemDeDados();

    }
    

    VerificarCampos(){
        cy.get('h1').contains(elements.txtNomeDaTela).should('be.visible')   
        cy.contains(elements.abaProcessamentoIndividual).should('be.visible')
        cy.contains(elements.abaProcessamentoEmLote).should('be.visible')
        cy.contains(elements.btnBaixarLogDeEnvio).should('be.visible')
        cy.get(elements.inputEvento).should('be.visible')
        cy.contains(elements.inputOperacao).should('be.visible')
        cy.get(elements.inputDataEnvio).should('be.visible')
        cy.get(elements.inputStatus).should('be.visible')
        cy.get(elements.colunaEvento).should('be.visible')
        cy.get(elements.colunaOperacao).should('be.visible')
        cy.get(elements.colunaDataEnvio).should('be.visible')
        cy.get(elements.colunaStatus).should('be.visible')
        cy.get(elements.colunaStatusRetornoEnvio).should('be.visible')
        cy.get(elements.colunaStatusRetornoProcessamento).should('be.visible')
        cy.get(elements.colunaUsuario).should('be.visible')
        cy.get(elements.colunaOpcoes).should('be.visible')
        cy.contains(elements.txtItensPorPagina).should('be.visible')
        cy.get(elements.selectItensPorpagina).should('be.visible')
        cy.get(elements.txtLimitadorDePaginas).should('be.visible')
        cy.get(elements.primeiraPagina).should('be.visible')
        cy.get(elements.paginaAnterior).should('be.visible')
        cy.get(elements.proximaPagina).should('be.visible')
        cy.get(elements.ultimaPágina).should('be.visible')
       }
}

export default new consultarHistoricoDeenvios()