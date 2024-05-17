
Feature: Consultar histórico de envios
    
    Averiguar os elementos e realizar consultas

    Background: Após autenticação o sistema acessa diretamente o histórico de envios

        Given O usuário estar autenticado no sistema
        
    Scenario:  Validar a presença de todos os elementos visíveis na tela

        Then Deve verificar a presença de todos os elementos na tela de histórico