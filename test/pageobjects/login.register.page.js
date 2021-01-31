const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginAndRegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get registerOrLoginOverlay () { return $('//form[contains(@class,"RegistrationForm")]')};
    get login_link () { return $('//button[@data-testid="login-button"]')};
    get registerOrLogin_Overlay () { return $('//div[contains(@class,"LoginAndRegisterPopUp")]')};
    get registrationOverlay () { return $('div[data-testid="reg__mode"]')};
    get loginOverlay () { return $('button[data-testid="login_reg_switch_btn"]')}
    get inputUsername () { return $('input[name = "email"]') }
    get inputPassword () { return $('input[name = "password"]') }
    get btnSubmit () { return $('button[data-testid="login_reg_submit_btn"]') }
    get switchToLogin_Reg_OverlayLnk () { return $('button[data-testid="login_reg_switch_btn"]')};
    get termAndConditionCheckBx (){ return $('input[name="isTermsAccepted"]')};
    get closeButtonPopup () { return $('//button[contains(@class,"Dismiss")]')};

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (username, password) {
        this.inputUsername.clearValue();
        browser.pause(2000);
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }

    /*
        The register the user with given email and password
    */
    register (username, password) {
        this.inputUsername.clearValue();
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.termAndConditionCheckBx.click();
        this.btnSubmit.click(); 
    }

    clickSwitchTOLoginOverlay(){
        browser.pause(2000);
        this.loginOverlay.click();
    }

    clickSwitchToLoginOrRegisterOverlay(overlay){
       
        if (overlay.equal('login')){
            this.switchToLogin_Reg_OverlayLnk.waitForDisplayed(1000);
            this.switchToLogin_Reg_OverlayLnk.click();
        }
       
    }

    isRegistrationOverlay(){
        this.registrationOverlay.waitForDisplayed(1000);
        browser.pause(2000);
        return this.registrationOverlay.isDisplayed();
    }


    isLoginOverlay(){
        this.registrationOverlay.waitForDisplayed(1000);
        return this.registrationOverlay.isDisplayed();
    }

    isRegisterOrLoginOverlay(){
        this.registerOrLogin_Overlay.waitForDisplayed(1000);
        return this.registerOrLogin_Overlay.isDisplayed();
    }

    dismissTheNewUserRegisterPopup(){
        this.login_link.click();
        this.closeButtonPopup.click();

    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

module.exports = new LoginAndRegisterPage();
