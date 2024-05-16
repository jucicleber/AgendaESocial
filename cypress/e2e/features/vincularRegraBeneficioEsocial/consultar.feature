Feature: Consultar vinculo de regra beneficio eSocial
    Visualizar a presença de todos os elementos

    Background: Passos padrões

        Given O usuário estar autenticado no sistema
        When O usuário estar na tela de Vincular regra de benefício

    Scenario: Verifica a presença de todos os elementos da página
            
        Then Deve verificar a presença de todos os elementos na tela

    Scenario: Realizar consulta por paridade e regra
        
        When Informa a paridade como Sim, e a descrição da regra
        When Clicar no botão pesquisar para realizar a consulta
        Then Deve verificar os registros apresentados na tabela
        

    Scenario: Validar formulario
        
        When Informa a paridade como Sim, e a descrição da regra
        When Clicar no botão pesquisar para realizar a consulta 
        Then Deve verificar se a paridade e a descricao da regra informadas estão sendo apresentados no formulario
        
        

   
    
