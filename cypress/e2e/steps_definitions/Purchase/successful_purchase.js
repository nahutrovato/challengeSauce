import {Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps';
const Home = require('../../../pages/Home/home_page');
const Cart = require('../../../pages/Cart/cart_page');

When('the user clicks the Add to Cart button for the product {string}', (product) => {
    Home.addToCartProduct(product);
});

And('the user clicks the cart button', () => {
    Home.enterToShoppingCart();
});

Then('the user can see the product previously added {string}', (product) => {
    Cart.successfullAddProductToCart(product);
});

When('the user clicks the checkout button', () => {
    Cart.clickCheckoutButton();
});

And('the user enter the first name {string} in {string} input', (data,input) => {
    Cart.enterPersonalData(data,input);
});

When('the user clicks the continue button', () => {
    Cart.clickContinueButton();
});

And('the user click the finish button', () => {
    Cart.clickFinishButton();
});

Then('the user should see the {string} text', (successfulPurchaseText) => {
    Cart.isDisplayedSuccessfulPurchase(successfulPurchaseText);
});


