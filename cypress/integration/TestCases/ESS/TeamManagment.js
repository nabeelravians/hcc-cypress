import LoginPage from "../../PageObjects/ESS/TeamManagment";
import General from "../../PageObjects/ESS/general"

describe('Team Managment',function()
{
    it('Verify that user can navigate to Team Managment Section',function()
    {
        cy.visit('/')
        const gen= new General()
        const tm= new TeamManagment()
        lp.login("mnabeel@nisum.com","nisum123")


       
    })
})