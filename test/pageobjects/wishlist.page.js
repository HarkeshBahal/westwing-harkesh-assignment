import Page from './page'

class WIshListPage extends Page{

    get productItemDeleteIcon(){ return $$('//li/button[contains(@class,"delete")]'); }
    get productList() { return $$('ul[class="listProducts"]');}
    get productsInList() { return $$('li.blockListProduct')}

    // Click on the Close icon on the latest added item in the wishlist
    clickOnLatestItemDeleteBtn(){
        browser.pause(1000);
        this.productItemDeleteIcon[0].click();
        return true;
    }

    /*
        Return wether First product is shown on the Product list page
    */
    firstProductFromTheList(){
        this.productList.waitForDisplayed(1000);
        browser.pause(1000);
        return this.productList[0].$(productsInList).isDisplayed()
    }
    /* overwrite specifc options to adapt it to page object
    */
   open () {
       browser.pause(2000);
       return super.open('customer/wishlist/index/');
   }

}
module.exports = new WIshListPage();