Feature: Login
    Como usuário desejo autenticar no eSocial

    Scenario: Autenticação ESocial
    Given O usuário navegue até a tela de autenticação
    When Informar o usuário, senha e clicar em acessar
    And Seleciona origem de dados
    Then Logo o usuário está autenticado no eSocial
    
    
