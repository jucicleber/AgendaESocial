const elements = require('./elements').elements

class sideBarPages{
    clicarMenuConfiguracoes(){
        cy.contains(elements.selectMenuConfiguracoes).click()
    }
    NavegarParaVincularRegraBeneficio(){
        this.clicarMenuConfiguracoes()
        cy.contains(elements.itemMenuVincularRegraBeneficio).click()
    }
}

export default new sideBarPages()