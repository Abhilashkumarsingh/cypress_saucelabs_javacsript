class LoginPageFunction{
    get usernameField (){
        return cy.get('input#user-name')
    }
    get passwordField(){
        return cy.get("input[name='password']")
    }
    get loginButton(){
        return cy.get("input[type='submit']")
    }
    get errorField(){
        return cy.get("h3[data-test='error']")
    }
    login(username,password){
        username==""? this.usernameField.clear():this.usernameField.type(username)
        password==""? this.passwordField.clear():this.passwordField.type(password)
        this.loginButton.click()
    }
    getDangerMessage(){
        return this.errorField.invoke('text')
    }
}
module.exports= new LoginPageFunction();