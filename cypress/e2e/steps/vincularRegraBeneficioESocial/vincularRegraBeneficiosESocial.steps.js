import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import loginPages from '../../pages/Login/login.pages';
import sideBarPages from '../../pages/sideBar/sideBar.pages'
import vincularRegraBeneficioESocialPages from '../../pages/vincularRegraBeneficioESocial/vincularRegraBeneficioESocial.pages';


//Scenario 1
Given("O usuário estar autenticado no sistema", () => {
    loginPages.LoginComSelecaoDeOrigemDeDados()    
})

When("O usuário estar na tela de Vincular regra de benefício", () => {
    sideBarPages.navegarParaVincularRegraBeneficio()
})

Then("Averiguar os nomes dos botoes e colunas da tela", () => {
    vincularRegraBeneficioESocialPages.ValidandoCampos()
})

//Scenario 2
Then("Realizar a consulta por paridade e consulta das regras", () => {
    vincularRegraBeneficioESocialPages.SelecionaParidade('Não')
    vincularRegraBeneficioESocialPages.InserindoRegra()
    vincularRegraBeneficioESocialPages.AlterandoValorItensPorPagina()
    vincularRegraBeneficioESocialPages.ClickBotaoPesquisar()
    vincularRegraBeneficioESocialPages.AveriguandoQuantasVezesARegraAparece()
})

//Scenario 3

Then("Validar o formulario aberto ao clicar em editar", () => {
    vincularRegraBeneficioESocialPages.ConsultaRegraBeneficio('Não')
    vincularRegraBeneficioESocialPages.AveriguandoFormularioDeRegraEParidade()

})




