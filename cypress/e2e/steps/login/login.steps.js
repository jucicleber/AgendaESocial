import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import loginPages from '../../pages/Login/login.pages'


Given("O usuário navegue até a tela de autenticação", () => {
    loginPages.acessarHost()
})

When("Informar o usuário e senha após clicar em acessar", () => {
    loginPages.logarESocial()
})

When("Seleciona origem de dados", () => {
    loginPages.selecionarOrigemDados()
})

Then("Logo o usuário está autenticado no eSocial", () => {    
    loginPages.verificarUsuarioLogado()
})
