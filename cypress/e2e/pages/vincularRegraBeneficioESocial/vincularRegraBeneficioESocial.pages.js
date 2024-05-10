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

   SelecionaParidade(paridade){
      cy.get(elements.averiguandoParidade).should('be.visible').click()
      if(paridade === 'Sim'){
         cy.get(elements.selectParidadeSim).click()
      }else if (paridade === 'Não'){
         cy.get(elements.selectParidadeNao).click()
      }else{ 
         cy.log("deu erro")
      }
   
   }
   InserindoRegra(){
      cy.get(elements.ClickConsultaRegra).click().type(elements.regraAposentadoriaVoluntaria)
   }
   ClickBotaoPesquisar(){
      cy.contains(elements.btnPesquisar).click()
   }
}


export default new VincularRegraBeneficioESocial()