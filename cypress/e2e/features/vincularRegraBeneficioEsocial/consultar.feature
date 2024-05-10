Feature: Consultar 
    Visualizar a presença de todos os elementos

    Background: Passos padrões

        Given O usuário estar autenticado no sistema
        When O usuário estar na tela de Vincular regra de benefício

    Scenario: Verifica se todos elementos estão sendo apresentados
          
        Then Averiguar os nomes dos botoes e colunas da tela
    
    Scenario: Realizar consulta por paridade e regra

        Then Realizar a consulta por paridade e consulta das regras
