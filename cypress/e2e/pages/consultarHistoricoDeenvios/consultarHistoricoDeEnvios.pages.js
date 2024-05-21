import { elements } from "../consultarHistoricoDeenvios/elements";
import loginPages from "../Login/login.pages";
import input from "../../../fixtures/input.json"




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
        SelecionaEventoComOperacaoInclusao(eventosInclusao, operacao) {
            eventosInclusao.forEach(evento => {
                cy.log('vetor do evento', eventosInclusao);
                cy.log('número do evento', evento);
                this.PesquisarHistoricoEnvio(evento,operacao)
                // Verifica a coluna resultante comparando com a pesquisa
                for (let i = 2; i <= eventosInclusao.length + 1; i++) {
                    let coluna = `mat-row:nth-of-type(${i}) > mat-cell:nth-of-type(2)`;
                    cy.get(coluna).invoke('text').then(textoColuna => {
                        if (textoColuna.trim() === operacao ) { 
                            cy.log(`Evento encontrado na linha ${i - 1}`);
                        } else {
                            cy.log(`Evento não encontrado na linha ${i - 1}`);
                        }
                    });
                }
        
                cy.get(elements.inputEvento).clear();
            });
        }
            
        PesquisarHistoricoEnvio(evento,operacao){
            // Acessa a grid passando evento e operação como parâmetro de função
            cy.get(elements.inputEvento).click().type(evento);
            cy.get(elements.inputOperacao).click();
            cy.get(operacao).click();
            cy.contains(elements.btnPesquisar).click();
        }


        SelecionaEventoMasNaoEncontra(){
            cy.get(elements.inputEvento).click().type(elements.eventoInexistente)
            cy.contains(elements.btnPesquisar).click()
            cy.contains(elements.mensagemDeEventoNaoEncontrado).should("be.visible")
        }

        LerTableHistorico(linha = 1) {
            cy.get('mat-table').find('mat-row').each((row) => {
            cy.get('mat-row').contains('2416')
            cy.get('mat-row').contains('Inclusão')
            })

        }
        
    
}  
    
          
   


export default new consultarHistoricoDeenvios()