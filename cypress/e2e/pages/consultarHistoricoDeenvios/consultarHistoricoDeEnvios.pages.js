import { elements } from "../consultarHistoricoDeenvios/elements";
import loginPages from "../Login/login.pages";



class consultarHistoricoDeenvios{

    realizarLogincomSelecaoDeorigemDeDados(){
        loginPages.LoginComSelecaoDeOrigemDeDados();

    }
    

    VerificarCampos(){
        cy.get('h1').contains(elements.txtNomeDaTela).should('be.visible')   
        cy.contains(elements.abaProcessamentoIndividual).should('be.visible')
        cy.contains(elements.abaProcessamentoEmLote).should('be.visible')
        cy.contains(elements.btnBaixarLogDeEnvio).should('be.visible')
        cy.get(elements.inputEvento).should('be.visible')
        cy.contains(elements.inputOperacao).should('be.visible')
        cy.get(elements.inputDataEnvio).should('be.visible')
        cy.get(elements.inputStatus).should('be.visible')
        cy.get(elements.colunaEvento).should('be.visible')
        cy.get(elements.colunaOperacao).should('be.visible')
        cy.get(elements.colunaDataEnvio).should('be.visible')
        cy.get(elements.colunaStatus).should('be.visible')
        cy.get(elements.colunaStatusRetornoEnvio).should('be.visible')
        cy.get(elements.colunaStatusRetornoProcessamento).should('be.visible')
        cy.get(elements.colunaUsuario).should('be.visible')
        cy.get(elements.colunaOpcoes).should('be.visible')
        cy.contains(elements.txtItensPorPagina).should('be.visible')
        cy.get(elements.selectItensPorpagina).should('be.visible')
        cy.get(elements.txtLimitadorDePaginas).should('be.visible')
        cy.get(elements.primeiraPagina).should('be.visible')
        cy.get(elements.paginaAnterior).should('be.visible')
        cy.get(elements.proximaPagina).should('be.visible')
        cy.get(elements.ultimaPágina).should('be.visible')
       }
    
 
       SelecionaEventoComOperacaoExclusao(eventosExclusao,operacao){
        eventosExclusao.forEach(evento => {
            cy.log('vetor do evento',eventosExclusao)
            cy.log('número do evento',evento)
            cy.get(elements.inputEvento).click().type(evento)
            cy.get(elements.inputOperacao).click()
            cy.get(operacao).click()
            cy.contains(elements.btnPesquisar).click()
            cy.get(elements.inputEvento).clear()
            });
            
            }
        SelecionaEventoComOperacaoInclusao(eventosInclusao,operacao){
        eventosInclusao.forEach(evento => {
            cy.log('vetor do evento',eventosInclusao)
            cy.log('número do evento',evento)
            cy.get(elements.inputEvento).click().type(evento)
            cy.get(elements.inputOperacao).click()
            cy.get(operacao).click()
            cy.contains(elements.btnPesquisar).click()
            cy.get(elements.inputEvento).clear()
          })  
        }
            
        }  
    
          
   


export default new consultarHistoricoDeenvios()