import Page from './page';


class ProductList extends Page{

    //get productName() { return $('//h1[text()="${prductName}"]')}
    get productListLinks() { return $$('//div[@data-testid = "generic-product"]'); }
    get addToWishlistIcon() { return $('//div[@data-testid = "wishlist-icon"]//*[name()="svg"]'); }
    /*
        This function is used to verify the searched Product name is shown on product list page
    */
    productNameIsDisplayed(item){
        var element = `//h1[text()="${item}"]`;
        browser.pause(2000);
        return $(element).isDisplayed();
    }

    /*
        This function is used to click on the first product on the searched product list
    */
    clickWIshlistIconOnFirstProduct(){
       const elm = this.addToWishlistIcon;
       this.productListLinks[0].$(elm).click();
    }

    /*
        This function is used get the status of the latest added item in the wishlist page
    */
    wishListIconStatus(){
        this.addToWishlistIcon.waitForDisplayed(1000);
        browser.pause(1000);
        const elm = this.addToWishlistIcon;
        return this.productListLinks[0].$(elm).getAttribute('data-is-selected');

    }

}

module.exports = new ProductList();