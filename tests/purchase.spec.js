const { test, expect } = require("@playwright/test");
const HomePage = require("../page-object/home");
const Users = require("../data/users");
const User = require("../data/userName");
const ProductPage = require("../page-object/product");
const CartPage = require("../page-object/cart");
const CheckoutPage = require("../page-object/checkout");

let home;
let productPage;
let cartPage;
let checkoutPage;

test.beforeEach(async ({ page }) => {
  home = new HomePage(page);
  productPage = new ProductPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);

  await home.navigate();
  await home.SignIn(Users.SUCCESSFUL);
});

test.describe("Purchase Tests", () => {
  test("should purchase successfully", async ({ page }) => {
    await productPage.addProductToCart();
    await productPage.goToCart();

    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutForm(User.SUCCESS);
    await checkoutPage.finishPurchase();

    const successMessage = await checkoutPage.validateSuccess();
    expect(successMessage).toBe("THANK YOU FOR YOUR ORDER");
  });

  test("should purchase unsuccessfully", async ({ page }) => {
    await productPage.addProductToCart();
    await productPage.goToCart();

    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutForm(User.FAIL);
    await checkoutPage.getErrorMessage();
  });
});
