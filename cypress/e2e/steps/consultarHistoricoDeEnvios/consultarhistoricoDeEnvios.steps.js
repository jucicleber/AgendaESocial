
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import loginPages from '../../pages/Login/login.pages';
import consultarHistoricoDeEnviosPages from '../../pages/consultarHistoricoDeenvios/consultarHistoricoDeEnvios.pages';
import vincularRegraBeneficioESocialPages from '../../pages/vincularRegraBeneficioESocial/vincularRegraBeneficioESocial.pages';

Given("O usuário estar autenticado no sisitema", () => {
    loginPages.LoginComSelecaoDeOrigemDeDados();
    vincularRegraBeneficioESocialPages.ClickBotaoPesquisar();
})

Then("Deve verificar a presença de todos os elementos na tela de histórico", () => {
    consultarHistoricoDeEnviosPages.VerificarCampos();
})
