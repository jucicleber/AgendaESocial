import { elements } from "../consultarHistoricoDeenvios/elements";
import loginPages from "../Login/login.pages";

class consultarHistoricoDeEnvios{
    realizarLogincomSelecaoDeorigemDeDados(){
        loginPages.LoginComSelecaoDeOrigemDeDados();
    }   
    VerificarCamposParte1(){
        cy.get('h1').contains(elements.txtNomeDaTela).should('be.visible')   
        cy.contains(elements.abaProcessamentoIndividual).should('be.visible')
        cy.contains(elements.abaProcessamentoEmLote).should('be.visible')
        cy.contains(elements.btnBaixarLogDeEnvio).should('be.visible')
        cy.get(elements.inputEvento).should('be.visible')
        cy.get(elements.inputOperacao).should('be.visible')
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
        cy.get(elements.ultimaPágina).should('be.visible')
        cy.contains(elements.txtItensPorPagina).should('be.visible')
        cy.get(elements.selectItensPorpagina).should('be.visible')
        cy.get(elements.txtLimitadorDePaginas).should('be.visible')
        cy.get(elements.primeiraPagina).should('be.visible')
        cy.get(elements.paginaAnterior).should('be.visible')
        cy.get(elements.proximaPagina).should('be.visible')
        cy.get(elements.ultimaPágina).should('be.visible')
    }
    ClickBotaoPesquisar(){
        cy.contains(elements.btnPesquisar).click()
     }
     
    SelecionaEventoComOperacaoExclusao(eventosExclusao,operacao){
    eventosExclusao.forEach(evento => {
        cy.log('vetor do evento',eventosExclusao)
        cy.log('número do evento',evento)
        this.PesquisarHistoricoEnvio(evento,operacao[2]);
        for(let i = 2;i <= eventosExclusao.length;i++){
            let colunaExclusao = `:nth-child(${i}) > .cdk-column-operacao`;
            cy.get(colunaExclusao).invoke('text').then(valorColuna => {
                cy.log('valor coluna',valorColuna.trim())
                cy.log('element:',elements.Exclusao)
                if (valorColuna === elements.Exclusao){
                    cy.log(`Evento encontrado na linha ${i - 1}`);
                }else{
                    cy.log(`Evento não encontrado na linha ${i - 1}`);
                }
            }
        )}
        }); 
    }



    //
    PesquisarHistoricoEnvio(evento, operacao) {
        // Acessa a grid passando evento e operação como parâmetro da função
        cy.get(elements.inputEvento).click().clear();
        cy.get(elements.inputEvento).click().type(evento);
        cy.get(elements.inputOperacao).click();
        cy.get(`#mat-option-${operacao}`).click(); // Na função, irá chamar a operação desejada
        cy.contains(elements.btnPesquisar).click();
    }
        
    SelecionaEventoComOperacaoAlteracao(eventosAlteracao, operacao) {
        eventosAlteracao.forEach((evento) => {
            this.PesquisarHistoricoEnvio(evento, operacao[1]);
            this.ValidandoResultadoColunas();
                            
        });
    }
        
    ValidandoResultadoColunas() {
        const indice = 1;
        cy.get('mat-row').then(rows => {
            const numLinhas = rows.length;
                cy.get(elements.inputEvento).invoke('val').then((valorDoEvento) => {                                               
                    cy.get(elements.inputOperacao).invoke('text').then((valor) => {
                        for (let i = 1; i <= numLinhas; i++) {
                            cy.get(`mat-row:nth-of-type(${i}) > mat-cell:nth-of-type(2)`).invoke('text').then((text) => {
                                expect(text.trim()).to.contain(valor);
                            });
                            cy.get(`mat-row:nth-of-type(${i}) > mat-cell:nth-of-type(1)`).invoke('text').then((eventoAtual) => {
                                const evento1Numerico = eventoAtual.trim().match(/\d+/)[0];
                                expect(evento1Numerico).to.equal(valorDoEvento);
                            });
                        }
                    });
                });
        });
    }
    SelecionaEventoComOperacaoInclusao(eventosInclusao, operacao) {
        eventosInclusao.forEach(evento => {
            cy.log('vetor do evento', eventosInclusao);
            cy.log('número do evento', evento);
            this.PesquisarHistoricoEnvio(evento, operacao[0]);                
            // Verifica a coluna resultante comparando com a pesquisa
            for (let i = 2; i <= eventosInclusao.length; i++) {
                let coluna = `:nth-child(${i}) > .cdk-column-operacao`;
                cy.get(coluna).invoke('text').then(textoColuna => {
                    cy.log('textoColuna', textoColuna.trim());
                    cy.log('element:', elements.Inclusao)
                    if (textoColuna.trim() === elements.Inclusao) {
                        cy.log(`Evento encontrado na linha ${i - 1}`);
                    } else {
                        cy.log(`Evento não encontrado na linha ${i - 1}`);
                    }
                })  
            }
            cy.get(elements.inputEvento).clear();
        });   
    }                    
                   
    SelecionaEventoMasNaoEncontra(){
        cy.get(elements.inputEvento).click().type(elements.eventoInexistente)
        cy.contains(elements.btnPesquisar).click()
        cy.contains(elements.mensagemDeEventoNaoEncontrado).should("be.visible")
    }

    LerTableHistorico() {
        cy.get('mat-table mat-row').each((row) => {
            // Dentro de cada linha, obtenha todas as células
            cy.wrap(row).find('mat-cell').each((cell, index) => {
                // Extraia o texto de cada célula
                cy.wrap(cell).invoke('text').then((text) => {
                // Faça algo com o texto, como imprimir no console
                console.log('Index : ', index , ' - ' ,text.trim());
                });
            });
            });

    }

    LerTableHistorico() {
        const valores = [];
        const eventosEsperados = ['2416']
        const operacoesEsperadas = ['Inclusão']
        
        // Selecionar as linhas da tabela
        cy.get('mat-table mat-row').each((row) => {
            // Dentro de cada linha, obtenha todas as células
            cy.wrap(row).find('mat-cell').each((cell, index) => {
            // Extraia o texto de cada célula
            cy.wrap(cell).invoke('text').then((text) => {
                const cellText = text.trim();
                // Armazenar os valores dos índices 0 e 1 em um array
                if (index === 0 || index === 1) {
                
                valores.push(this.removertraco(cellText));
                }
            });
            });
        }).then(() => {
        //   // Verificar se os textos são os esperados
            expect(valores[0]).to.equal(eventosEsperados[0]);
            expect(valores[1]).to.equal(operacoesEsperadas[0]);
            console.log('Index 0 e 1 : ',  valores)
        });
        }

        removertraco(texto){
        const textoLimpo = texto.replace(/\s+-/, '')
        return textoLimpo
        }
        
    
}  
    
          
   


export default new consultarHistoricoDeEnvios()