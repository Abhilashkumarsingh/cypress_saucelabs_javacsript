const loginTestData = {
    user: [
        { username: "standard_user", password: "secret_sauce", isValid: true, errorMessage: "" },
        { username: "jack_ryan", password: "secret_sauce", isValid: false, errorMessage: "Username and password do not match any user in this service" },
        { username: "standard_user", password: "dark_vader", isValid: false, errorMessage: "Username and password do not match any user in this service" },
        { username: "", password: "secret_sauce", isValid: false, errorMessage: "Username is required" },
        { username: "standard_user", password: "", isValid: false, errorMessage: "Password is required" },
    ]
}
module.exports = loginTestData