Feature: Login
    Como usuário desejo autenticar no eSocial

    Scenario: Autenticar no eSocial

    Given O usuário navegue até a tela de autenticação
    When Informar o usuário e senha após clicar em acessar
    And Seleciona origem de dados
    Then Logo o usuário está autenticado no eSocial
    
    
