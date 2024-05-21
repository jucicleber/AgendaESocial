
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import loginPages from '../../pages/Login/login.pages';
import consultarHistoricoDeEnviosPages from '../../pages/consultarHistoricoDeenvios/consultarHistoricoDeEnvios.pages';
import vincularRegraBeneficioESocialPages from '../../pages/vincularRegraBeneficioESocial/vincularRegraBeneficioESocial.pages';
import inputs from "../../../fixtures/input.json"
const eventosExclusao = ['1000','1005','1020'];
const eventosInclusao = ['2416']

Given("O usuário estar autenticado no sistema para acessar o histórico de envios", () => {
    loginPages.LoginComSelecaoDeOrigemDeDados();
    vincularRegraBeneficioESocialPages.ClickBotaoPesquisar();
})

//Scenario 1
Then("Deve verificar a presença de todos os elementos na tela de histórico", () => {
    consultarHistoricoDeEnviosPages.VerificarCampos();
})

//Scenario 2
When("Realizar a consulta do evento com a operação de exclusão", () =>{
    consultarHistoricoDeEnviosPages.SelecionaEventoComOperacaoExclusao(eventosExclusao,inputs.operacao.exclusao);
})

//Scenario 3
When("Realizar a consulta do evento com a operação de inclusão",() => {
    consultarHistoricoDeEnviosPages.PesquisarHistoricoEnvio('2416',inputs.operacao.inclusao)
    //consultarHistoricoDeEnviosPages.SelecionaEventoComOperacaoInclusao(eventosInclusao,inputs.operacao.inclusao)
    consultarHistoricoDeEnviosPages.LerTableHistorico()
})
//Scenario 4
When("Realizar uma consulta que não encontre o evento", () => {
    //consultarHistoricoDeEnviosPages.SelecionaEventoMasNaoEncontra()
    consultarHistoricoDeEnviosPages.LerTableHistorico()
})