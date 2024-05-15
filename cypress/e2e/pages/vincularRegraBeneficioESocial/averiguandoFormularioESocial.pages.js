import { elements } from "./elements"

class AveriguandoFormulario{
    AveriguandoFormularioDeRegraEParidade(){
        cy.get(elements.clickEditar).then((itens) => {
        cy.log('valor de itens', itens)
        cy.log('valor de itens comprimento', itens.length)

        cy.get(elements.averiguandoParidade).invoke('text').then((valorSelectparidade) => {
            cy.log('diga amigo',valorSelectparidade)
            for (var i = 2; i <= itens.length + 1; i++){
                var col = `:nth-child(${i}) > .cdk-column-editar > .mat-icon-button > .mat-button-wrapper > .mat-icon`
                cy.get(col).click()
                cy.get(elements.editarRegraBeneficio).invoke('val').should('contain', elements.regraAposentadoriaVoluntaria)
                cy.get(elements.editarParidade).invoke('val').should('contain', valorSelectparidade)               
                cy.contains(elements.editarBotaoFechar).click()
            }
        })        
        })  
    }
}

export default new AveriguandoFormulario()