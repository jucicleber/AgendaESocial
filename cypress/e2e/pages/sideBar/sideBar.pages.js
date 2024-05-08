import  elements  from "./elements";

class sideBarPages{
    clicarMenuConfiguracoes(){
        cy.contains(elements.clicarConfiguracoes).click()
    }
    navegarParaVincularRegraBeneficio(){
        this.clicarMenuConfiguracoes()
        cy.contains(elements.navegarParaVincularRegraBeneficio).click()
    }
}
