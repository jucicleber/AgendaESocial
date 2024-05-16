import { elements } from "./elements"

class VincularRegraBeneficioESocial{
  

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
   ConsultandoRegra(){
      cy.get(elements.clickConsultaRegra).click().type(elements.inputRegraAposentadoriaVoluntaria)
   }

   AlteraValorItensPorPagina(){
      cy.get(elements.ItensPorPagina).click()
      cy.get(elements.ItensPorPagina100).click()
   }
   ClickBotaoPesquisar(){
      cy.contains(elements.btnPesquisar).click()
   }

  


   VerificaRegraAparece(){    
      cy.get(elements.colunaContendoADescricaoDaRegra).then((itens) => {
         console.log('resultado dos itens: ', itens)
         for (var i = 2; i <= itens.length ; i++){ 
            var coluna = `:nth-child(${i}) > .cdk-column-Nome`
            cy.get(coluna).contains(elements.inputRegraAposentadoriaVoluntaria)
         }
      })
   }


   ConsultaRegraBeneficio(selecionaParidade){
      this.SelecionaParidade(selecionaParidade)
      this.ConsultandoRegra()
      this.AlteraValorItensPorPagina()
      this.ClickBotaoPesquisar()
      this.VerificaRegraAparece()
   }

   AveriguandoFormularioDeRegraEParidade(){
      cy.get(elements.clickEditar).then((itens) => {
         cy.log('valor de itens', itens)
         cy.log('valor de itens comprimento', itens.length)
         cy.get(elements.averiguandoParidade).invoke('text').then((valorSelectparidade) => {
            cy.log('diga amigo',valorSelectparidade)
            for (var i = 2; i <= itens.length + 1; i++){
               var col = `:nth-child(${i}) > .cdk-column-editar > .mat-icon-button > .mat-button-wrapper > .mat-icon`
               cy.get(col).click()
               cy.get(elements.formularioRegraBeneficio).invoke('val').should('contain', elements.inputRegraAposentadoriaVoluntaria)
               cy.get(elements.formularioParidade).invoke('val').should('contain', valorSelectparidade)               
               cy.contains(elements.formularioBotaoFechar).click()
            }
         })        
      })  
   }

   VerificarCampos(){
   cy.get('h1').contains(elements.txtNomeDaTabela).should('be.visible')
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

}


export default new VincularRegraBeneficioESocial()