/// <reference types="Cypress"/>

import LoginPage from "../PageObjects/LoginPage";

describe('Login',function()
{
    it('Login with valid credentials',function()
    {
        const lp= new LoginPage()
        lp.visit()
        lp.enterCredentials('mnabeel@nisum.com','nisum123')
        lp.clickLogin() 
        lp.verifyWelcomeText()
    
       
    })

     it('Verify Invalid Notification Appear with Invalid Username and Password',function()
    {
        const lp= new LoginPage()
        lp.visit()
        lp.enterCredentials('mnabeel@nisum.com','nisum2123')
        lp.clickLogin() 
        lp.verifyInvalidLoginNotification()
       
    })
    it('Verify Disable or User Without any role should get Appropriate message',function()
    {
        const lp= new LoginPage()
        lp.visit()
        lp.enterCredentials('nabeelravians@gmail.com','nisum123')
        lp.clickLogin() 
        lp.verifyNoUserRoleNotification()
        
    })
    it('Verify User should logout succefully',function()
    {
        const lp= new LoginPage()
        lp.visit()
        lp.enterCredentials('mnabeel@nisum.com','nisum123')
        lp.clickLogin() 
        lp.clickDownArrow()
        lp.clickLogoutButton()
        lp.verifyLogout()
        
    })
})