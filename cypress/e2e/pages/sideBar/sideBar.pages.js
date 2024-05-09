const elements = require('./elements').elements

class sideBarPages{
    clicarMenuConfiguracoes(){
        cy.contains(elements.selectMenuConfiguracoes).click()
    }
    navegarParaVincularRegraBeneficio(){
        this.clicarMenuConfiguracoes()
        cy.contains(elements.itemMenuVincularRegraBeneficio).click()
    }
}

export default new sideBarPages()