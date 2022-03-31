class LoginPage
{
    visit()
    {
        cy.visit("https://qa-hcc.mynisum.com/",{retryOnNetworkFailure:true})
        return this
    }
    enterCredentials(email,pass)
    {
         const emailFieald = cy.get("[placeholder='User Name']")
         emailFieald.type(email)
         const passwordFieald = cy.get("[placeholder='Password']")
         passwordFieald.type(pass)
         
        // cy.get([type="submit"]).click()
        return this
    }

    clickLogin()
    {
        cy.get("[type='submit']").click()
       
       
       return this
    }

    verifyWelcomeText()
    {
        cy.get("[class='p-welcomeText']").contains('Welcome')
        
    }
    verifyInvalidLoginNotification()
    {
        //cy.get("[class='el-notification right']").should('be.visible')
        cy.get("[class='el-notification right']").contains("Invalid Username or Password!")
    //    cy.on("window:alert", (str) => 
    //    {
    //     //window:alert is the event which get fired on alert open
    //       expect(str).to.equal(" Invalid Username or Password!")
    //     })
      
    }

    verifyNoUserRoleNotification()
    {
        cy.get("[class='el-notification right']").as('notificationText')
        cy.get('@notificationText').should('have.text',"Oops!User is either disabled or do not have adequate permissions to log in.")
      //  cy.get("[class='el-notification right']").contains("User is either disabled or do not have adequate permissions to log ")
   
    }

    verifyViewPassword()
    {
        cy.get("[class='el-notification right']").should('be.visible')
     
        return this
    }

    clickDownArrow()
    {
        cy.get("[class='el-icon-arrow-down']").click()
        
               
    }

    clickLogoutButton()
    {
        cy.contains("Log Out").click()
    }

    //This will verify that AFTER LOGOUT IT SHOULD NAVIGATE TO LOGIN PAGE
    verifyLogout()
    {
        cy.url().should('include', 'login') // => true
        //cy.url().should('eq', 'https://qa-hcc.mynisum.com/login?redirect=%2Fdashboard')
    }


}
export default LoginPage