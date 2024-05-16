import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import loginPages from '../../pages/Login/login.pages';
import sideBarPages from '../../pages/sideBar/sideBar.pages'
import vincularRegraBeneficioESocialPages from '../../pages/vincularRegraBeneficioESocial/vincularRegraBeneficioESocial.pages';



Given("O usuário estar autenticado no sistema", () => {
    loginPages.LoginComSelecaoDeOrigemDeDados()    
})

When("O usuário estar na tela de Vincular regra de benefício", () => {
    sideBarPages.NavegarParaVincularRegraBeneficio()
})

//Scenario 1

Then("Deve verificar a presença de todos os elementos na tela", () => {
    vincularRegraBeneficioESocialPages.VerificarCampos()
})

//Scenario 2

When("Informa a paridade como Sim, e a descrição da regra",() => {
    vincularRegraBeneficioESocialPages.SelecionaParidade('Não')
    vincularRegraBeneficioESocialPages.ConsultandoRegra()    
})


When("Clicar no botão pesquisar para realizar a consulta",() =>{    
    vincularRegraBeneficioESocialPages.ClickBotaoPesquisar()
})

Then("Deve verificar os registros apresentados na tabela", () => {   
    vincularRegraBeneficioESocialPages.AlteraValorItensPorPagina()   
    vincularRegraBeneficioESocialPages.VerificaRegraAparece()
})

//Scenario 3

Then("Deve verificar se a paridade e a descricao da regra informadas estão sendo apresentados no formulario", () => {
    vincularRegraBeneficioESocialPages.AlteraValorItensPorPagina()  
    vincularRegraBeneficioESocialPages.AveriguandoFormularioDeRegraEParidade()
})




