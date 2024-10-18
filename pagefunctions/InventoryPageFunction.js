class InventoryPageFunction{
    get logoutButton(){
        return cy.get('a').contains('Logout')
    }
    get sideNavBarUncollapseButton(){
        return cy.get('button').contains('Open Menu')
    }
    cartCtaViaItemName(itemName){
        return cy.contains("div",itemName).parents('div.inventory_item_label')
            .siblings('div.pricebar').find('button')

    }
    opensideNav(){
        this.sideNavBarUncollapseButton.click()
        return this
    }
    clickOnLogout(){
        this.logoutButton.click()
    }
    addItemToCart(itemName){
        this.cartCtaViaItemName(itemName).click()
        return this
    }
    isAddedToCart(itemName){
        return this.cartCtaViaItemName(itemName).invoke('text').then(text=>{
            if(text=='REMOVE') return true
            else return false
        })
    }

}
module.exports= new InventoryPageFunction();