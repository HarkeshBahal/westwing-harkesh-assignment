import Page from './page';
import LoginAndRegisterPage from './login.register.page';

/*
    This class contains functions related to the header menu.
*/
class HeaderPage extends Page{
    /*
        Define Selectors using getter setter methods
    */
   get searchIcon() { return $('svg[data-testid="header-search-icon"]'); }
   get searchInputBox() { return $('input[data-testid="search-input"]'); }
   get wishListIcon() { return $('.icon-wishlist'); }
   get wishListIconCount() { return $('//span[@data-testid="wishlist-counter"]'); }
   
   /*
    This function is used to click on the search icon on the header
   */
   clickSearchIcon(){
       this.searchIcon.waitForDisplayed(1000);
       this.searchIcon.click();
   }

   /*
    This function is used to enter the product (item) in the search texr
   */
   enterTextInSearchBox(item){
        this.searchInputBox.clearValue();
        this.searchInputBox.setValue(item);
        browser.pause(2000);
        $('button#onetrust-accept-btn-handler').click();
        browser.pause(2000);
        LoginAndRegisterPage.dismissTheNewUserRegisterPopup();
        browser.pause(1000);
        
   }

   /*
    This function is used to click on the wishlist icon on the top header menu
   */
   clickWishListIcon(){
       this.wishListIcon.click();
   }

   /*
    This function is used to get the wishlist icon count
   */
    wishlistIconCount(){
       browser.pause(1000);
       return this.wishListIconCount.getText();
   }

   /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }

}

module.exports = new HeaderPage();