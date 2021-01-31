const { Given, When, Then} = require('cucumber');

const HeaderPage = require('../pageobjects/header.page');
const ProductList = require('../pageobjects/productlist.page');
const LoginAndRegisterPage = require('../pageobjects/login.register.page');
const WishList = require('../pageobjects/wishlist.page');
const { expect } = require('chai');

const pages = {
    westwingnow: HeaderPage
}

Given(/^I am on the (\w+) home page$/, (page) => {
    pages[page].open()
});

When(/^I search for item$/, (dataTable) => {
    var searchedItm = dataTable.raw()[0][1];
    HeaderPage.enterTextInSearchBox(`${searchedItm}\n`);
});

Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(SecurePage.flashAlert).toBeExisting();
    expect(SecurePage.flashAlert).toHaveTextContaining(message);
});


Then(/^I should see product listing page with a list of products$/, (dataTable) => {
    var item = dataTable.raw()[0][1];
    expect(ProductList.productNameIsDisplayed(item)).to.be.true;
});

When(/^I click on wishlist icon of the first found product$/,() => {
    ProductList.clickWIshlistIconOnFirstProduct();
});

Then(/^I should see the login\/registration overlay$/,() => {
    expect(LoginAndRegisterPage.isRegisterOrLoginOverlay()).to.be.true;
});

When (/^I switch to (\w+) form of the overlay$/, (overlay) => {
    LoginAndRegisterPage.clickSwitchTOLoginOverlay();
});

When (/^I log in with credentials$/, (dataTable) => {
    var email = dataTable.raw()[0][1];
    var password = dataTable.raw()[1][1];
    LoginAndRegisterPage.login(email,password);
});

Then(/^wishlist icon on the product is filled in$/, () => {
    expect(ProductList.wishListIconStatus()).to.equal("true");
});

Then(/^wishlist counter in the website header shows counter$/, () => {
    expect(HeaderPage.wishlistIconCount()).to.equal("1");
});

Then(/^I go to the wishlist page$/, () => {
    WishList.open();
});

Then(/^I delete the product from my wishlist$/, () => {
    expect(WishList.clickOnLatestItemDeleteBtn()).to.be.true;
    browser.pause(2000);
});
