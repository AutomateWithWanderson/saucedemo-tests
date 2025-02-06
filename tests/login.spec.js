const { test, expect } = require("@playwright/test");
const HomePage = require("../page-object/home");
const Notification = require("../page-object/notification");
const Users = require("../data/users"); 

let home;
let notification;

test.beforeEach(async ({ page }) => {
  home = new HomePage(page);
  notification = new Notification(page);
});

test.describe("Login Tests", () => {
  test("should login successfully", async ({ page }) => {
    await home.navigate();
    await home.SignIn(Users.SUCCESSFUL);  
    await notification.validateSuccessOnSignIn();
  });

  test("should show error when login with wrong username", async ({ page }) => {
    await home.navigate();
    await home.SignIn(Users.WRONG_USERNAME);  
    await notification.validateInvalidCredentials();
  });

  test("should show error when login with wrong password", async ({ page }) => {
    await home.navigate();
    await home.SignIn(Users.WRONG_PASSWORD);  
    await notification.validateInvalidCredentials();
  });
});
 