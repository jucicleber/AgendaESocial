Feature: Consultar vinculo de regra de beneficio ao eSocial
    Averiguar as consultas e os elementos da tela de vinculo de regra beneficio ao eSocial

    Background: Autenticação e acesso a tela de vinculação de regra de benefício

        Given O usuário estar autenticado no sistema para acessar a regra de beneficio
        When O usuário estar na tela de Vincular regra de benefício
    
    Scenario: Validar formulario
        
        When Informa a paridade como Sim, e a descrição da regra
        When Clicar no botão pesquisar para realizar a consulta 
        Then Deve verificar se a paridade e a descricao da regra informadas estão sendo apresentados no formulario

    Scenario: Verifica a presença de todos os elementos da página
            
        Then Deve verificar a presença de todos os elementos na tela

    Scenario: Realizar consulta por paridade e regra
        
        When Informa a paridade como Sim, e a descrição da regra
        When Clicar no botão pesquisar para realizar a consulta
        Then Deve verificar os registros apresentados na tabela
        

   
        
        

   
    
