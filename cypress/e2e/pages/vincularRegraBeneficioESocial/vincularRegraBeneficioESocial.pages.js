import { elements } from "./elements"

class VincularRegraBeneficioESocial{
   ValidandoCampos(){
    cy.get('h1').contains(elements.NomeDaTabela).should('be.visible')
    cy.get(elements.averiguandoParidade).should('be.visible')
    cy.contains(elements.consultaDeRegras).should('be.visible')
    cy.contains(elements.btnPesquisar).should('be.visible')
    cy.contains(elements.colunaPreencherEditar).should('be.visible')
    cy.contains(elements.colunDescriçãoRegra).should('be.visible')
    cy.contains(elements.colunFundamentacaoLegal).should('be.visible')
    cy.contains(elements.colunTipoBeneficio).should('be.visible')
    cy.contains(elements.colunCodSocial).should('be.visible')
    cy.contains(elements.colunDescricaoESocial).should('be.visible')
    cy.contains(elements.itensPorPagina).should('be.visible') 
    cy.get(elements.paginadorPrimeiraPagina).should('be.visible')
    cy.get(elements.paginadorPaginaAnterior).should('be.visible')
    cy.get(elements.paginadorProximaPagina).should('be.visible')
    cy.get(elements.paginadorUltimaPagina).should('be.visible')
   }
}

export default new VincularRegraBeneficioESocial()