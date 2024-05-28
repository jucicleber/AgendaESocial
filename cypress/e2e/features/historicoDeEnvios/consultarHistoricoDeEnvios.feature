
Feature: Consultar histórico de envios
    
    Averiguar os elementos e realizar consultas

    Background: Após autenticação o sistema acessa diretamente o histórico de envios

        Given O usuário estar autenticado no sistema
     Scenario:  Validar a presença de todos os elementos visíveis na tela

    #     When Deve verificar a presença de todos os elementos na tela de histórico
    # Scenario: Consultar evento passando a operação de Exclusão

    #     When Realizar a consulta do evento com a operação de exclusão

    # Scenario: Consultar evento passando a operação de inclusão
        
    #     When Realizar a consulta do evento com a operação de alteração
   
    Scenario: Realizar uma consulta que não encontre nenhum evento

        When Realizar uma consulta que não encontre o evento
   
