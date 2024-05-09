import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import loginPages from '../../pages/Login/login.pages';
import sideBarPages from '../../pages/sideBar/sideBar.pages'
import vincularRegraBeneficioESocialPages from '../../pages/vincularRegraBeneficioESocial/vincularRegraBeneficioESocial.pages';



Given("O usuário estar autenticado no sistema", () => {
    loginPages.LoginComSelecaoDeOrigemDeDados()    
})

When("O usuário estar na tela de Vincular regra de benefício", () => {
    sideBarPages.navegarParaVincularRegraBeneficio()
})

Then("Averiguar os nomes dos botoes e colunas da tela", () => {
    vincularRegraBeneficioESocialPages.ValidandoCampos()
})



