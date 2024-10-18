const cypress = require("cypress")
const inventoryPageFunction = require("../../pagefunctions/inventoryPageFunction")
const LoginPageFunction = require("../../pagefunctions/LoginPageFunction")

describe("Validate inventory page",()=>{
    before("Login into application",()=>{
        cy.visit("/index.html")
        LoginPageFunction.login("standard_user","secret_sauce")
        cy.url().then(url=>{
            expect(url).to.include("inventory.html")
        })
    })
    it("Validate add item to cart",()=>{
        inventoryPageFunction.addItemToCart("Sauce Labs Backpack")
            .addItemToCart("Sauce Labs Fleece Jacket")
        inventoryPageFunction.isAddedToCart("Sauce Labs Onesie").then(result=>{
            expect(result).to.eq(true)
            
        })
    })
    it("Validate add item to cart",()=>{
        cy.getAllCookies()
            .then(cookies=>{
                expect(cookies[0]).to.have.property("name","user_session")
                cy.setCookie()
            })
    })
})