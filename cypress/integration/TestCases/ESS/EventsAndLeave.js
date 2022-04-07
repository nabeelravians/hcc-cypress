/// <reference types="Cypress"/>

import Leaves from "../../PageObjects/ESS/Leaves";
import LoginPage from "../../PageObjects/ESS/LoginPage";
//const { expect } = require('chai');  // Using Expect style




describe('Events and Leaves',function()
{
    it('Verify that employee  should navigate to Public Holiday Calander',function()
    {
        const lp= new LoginPage()
        const el = new Leaves()
        lp.login("mnabeel@nisum.com","nisum123")
//el.clickHamburgMenu()
        el.clickEventAndLeave()
        el.clickPublicHolidaysCalendar()
        el.verifyPublicHolidaysCalendarTitle()
        el.verifyPublicHolidayCalendarURL()
    })
    it('Verify that employee  should navigate to Leave Calander',function()
    {
        const lp= new LoginPage()
        const el = new Leaves()
        lp.login("mnabeel@nisum.com","nisum123")
      //  el.clickHamburgMenu()
        el.clickEventAndLeave()
        el.clickLeavesCalendar()
        el.verifyLeavesCalendarTitle()
        el.verifyLeavesCalendarURL()
    })

    it('Verify that employee  should navigate to Other Leave Requests',function()
    {
        const lp= new LoginPage()
        const el = new Leaves()
        lp.login("mnabeel@nisum.com","nisum123")
       // el.clickHamburgMenu()
        el.clickEventAndLeave()
        el.clickOtherLeaveRequests()
        el.verifyOtherLeaveRequestsTitle()
        el.verifyOtherLeaveRequestsURL()
    })

    it('Verify that employee should navigate to My Leave Requests',function()
    {
        const lp= new LoginPage()
        const el = new Leaves()
        lp.login("mnabeel@nisum.com","nisum123")
       // el.clickHamburgMenu()
        el.clickEventAndLeave()
        el.clickMyLeaveRequests()
        el.verifyMyLeaveRequestsTitle()
        el.verifyMyLeaveRequestsURL()
    })

    
})