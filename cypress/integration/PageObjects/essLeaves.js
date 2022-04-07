class essLeaves
{
    clickHamburgMenu()
    {
        cy.get('.hamburger').click({force: true})
    }
    clickEventAndLeave()
    {
        cy.contains('Events/Leaves Management').click()
    }


    clickPublicHolidaysCalendar()
    {
        cy.contains("Public Holidays Calendar").click()
    }
    verifyPublicHolidaysCalendarTitle()
    {
        cy.get("[class='page-header']").invoke('text').        
        should('equal',"Public Holiday Calendar") 
    }
    verifyPublicHolidayCalendarURL()
    {
        cy.url().should('equal', 'https://qa-hcc.mynisum.com/emp-events-and-leave-management/public-holiday') // => true
       
    }

    //_________________Leaves Calendar___________________________

    clickLeavesCalendar()
    {
        cy.contains("Leaves Calendar").click()
    }
    verifyLeavesCalendarTitle()
    {
        cy.get("[class='page-header']").invoke('text').        
        should('equal',"Leaves Calendar") 
    }
    verifyLeavesCalendarURL()
    {
        cy.url().should('equal', 'https://qa-hcc.mynisum.com/emp-events-and-leave-management/leaves-calendar') // => true
       
    }

     //_________________Other Leaves Requests___________________________
    clickOtherLeaveRequests()
    {
        cy.contains("Other Leave Request").click()
    }
    verifyOtherLeaveRequestsTitle()
    {
        cy.get("[class='page-header']").invoke('text').        
        should('equal',"Other Leave Requests") 
    }
    verifyOtherLeaveRequestsURL()
    {
        cy.url().should('equal', 'https://qa-hcc.mynisum.com/emp-events-and-leave-management/other-leave-requests') // => true
       
    }

    //_________________My Leaves Requests___________________________

    clickMyLeaveRequests()
    {
        cy.contains("My Leaves Requests").click()
    }
    verifyMyLeaveRequestsTitle()
    {
        cy.get("[class='page-header']").invoke('text').        
        should('equal',"My Leave Requests") 
    }
    verifyMyLeaveRequestsURL()
    {
        cy.url().should('equal', 'https://qa-hcc.mynisum.com/emp-events-and-leave-management/view-leave-requests') // => true
       
    }

    
    


}
export default essLeaves