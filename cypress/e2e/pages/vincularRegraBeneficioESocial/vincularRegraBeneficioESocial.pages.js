import { elements } from "./elements"

class VincularRegraBeneficioESocial{
   ValidandoCampos(){
    cy.get('h1').contains(elements.NomeDaTabela).should('be.visible')
    cy.get(elements.averiguandoParidade).should('be.visible')
    cy.contains(elements.consultaDeRegras).should('be.visible')
    cy.contains(elements.btnPesquisar).should('be.visible')
    cy.contains(elements.colunaPreencherEditar).should('be.visible')
    cy.contains(elements.colunaDescricaoRegra).should('be.visible')
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

   AlterandoValorItensPorPagina(){
      cy.get(elements.ItensPorPagina).click()
      cy.get(elements.ItensPorPagina100).click()
   }
   ClickBotaoPesquisar(){
      cy.contains(elements.btnPesquisar).click()
   }
  
   
   AveriguandoQuantasVezesARegraAparece(){    
      cy.get(elements.colunaContendoADescricaoDaRegra).then((itens) => {
         console.log('resultado dos itens: ', itens)
         for (var i = 2; i <= itens.length ; i++){ 
            var coluna = `:nth-child(${i}) > .cdk-column-Nome`
            cy.get(coluna).contains(elements.regraAposentadoriaVoluntaria)
         }
      })
   }
   AveriguandoFormulario(){
      var ind = parseInt(2,10)
      cy.get(elements.clickEditar).then((itens) => {
         cy.log('TESTEEEEEEEEEEEEEEEEEEEEEEE')
         cy.log('valor de itens', itens)
         cy.log('valor de itens comprimento', itens.length)
         for (var i = 2; i <= itens.length ; i++){
            cy.log('teste 1')
            var col = `:nth-child(${i}) > .cdk-column-editar > .mat-icon-button > .mat-button-wrapper > .mat-icon`
            cy.log('teste 2')
            cy.get(col).click()
            cy.get(elements.editarRegraBeneficio).contains(elements.regraAposentadoriaVoluntaria)
            cy.get(elements.editarParidade).contains(elements.selectParidadeSim)
         }
      })  
   }
}


export default new VincularRegraBeneficioESocial()