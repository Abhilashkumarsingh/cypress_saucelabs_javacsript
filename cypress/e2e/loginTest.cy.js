const LoginPageFunction = require("../../pagefunctions/LoginPageFunction")
const inventoryPageFunction = require("../../pagefunctions/InventoryPageFunction")
const loginTestData= require("../../testData/loginTestData")


describe("should validate login functions",()=>{
    loginTestData.user.forEach(user=>{
        it(`validate login for username as ${user.username} and password as ${user.password}`,()=>{
            cy.visit("/index.html")
            LoginPageFunction.login(user.username,user.password)
            cy.url().then(url=>{
                if(user.isValid){
                    expect(url).to.include('inventory.html')
                    LoginPageFunction.errorField.should('not.exist')
                }else{
                    LoginPageFunction.getDangerMessage().then(text=>{
                        expect(text).to.include(user.errorMessage)
                    })
                    LoginPageFunction.errorField.should('be.visible')
                    expect(url).to.include('index.html')
                }
                
            })
        })
    })
})