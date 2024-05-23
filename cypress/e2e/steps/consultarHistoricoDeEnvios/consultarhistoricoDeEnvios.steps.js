
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import loginPages from '../../pages/Login/login.pages';
import consultarHistoricoDeEnviosPages from '../../pages/consultarHistoricoDeenvios/consultarHistoricoDeEnvios.pages';
import vincularRegraBeneficioESocialPages from '../../pages/vincularRegraBeneficioESocial/vincularRegraBeneficioESocial.pages';

const eventosExclusao = ['1000','1005'];
const eventosInclusao = ['2416','2405'];
const eventosAlteracao = ['1010','2200','2299']; 
const operacao = ['0','1','2']//0 = Inclusão, 1 = Alteração, 2 = Exclusão

Given("O usuário estar autenticado no sistema para acessar o histórico de envios", () => {
    loginPages.LoginComSelecaoDeOrigemDeDados();
    vincularRegraBeneficioESocialPages.ClickBotaoPesquisar();
})

//Scenario 1
Then("Deve verificar a presença de todos os elementos na tela de histórico", () => {
    consultarHistoricoDeEnviosPages.VerificarCampos();
})

//Scenario 
When("Realizar a consulta do evento com a operação de exclusão", () =>{
    consultarHistoricoDeEnviosPages.SelecionaEventoComOperacaoExclusao(eventosExclusao,operacao);
})

//Scenario 4 Alteração
When("Realizar a consulta do evento com a operação de alteração",() => {
    consultarHistoricoDeEnviosPages.SelecionaEventoComOperacaoAlteracao(eventosAlteracao,operacao)    
})  

//Scenario 
When("Realizar uma consulta que não encontre o evento", () => {
    consultarHistoricoDeEnviosPages.SelecionaEventoMasNaoEncontra()
   
})

addEventListener("", () =>{
    consultarHistoricoDeEnviosPages.LerTableHistorico()
})