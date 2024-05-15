import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import loginPages from '../../pages/Login/login.pages';
import sideBarPages from '../../pages/sideBar/sideBar.pages'
import vincularRegraBeneficioESocialPages from '../../pages/vincularRegraBeneficioESocial/vincularRegraBeneficioESocial.pages';



Then("Validar o formulario aberto ao clicar em editar")
vincularRegraBeneficioESocialPages.JuntandoAsFuncoesCenario1E2()
AveriguandoFormulario.AveriguandoFormulario()