class General
{
    login(email,pass)
    {
        cy.visit('/')
        // const emailFieald = cy.get("[placeholder='User Name']")
        // emailFieald.type(email)
        cy.get("[placeholder='User Name']").type(email)
        // const passwordFieald = cy.get("[placeholder='Password']")
        // passwordFieald.type(pass)
        cy.get("[placeholder='Password']").type(pass)
        cy.get("[type='submit']").click()
    }
}

export default General