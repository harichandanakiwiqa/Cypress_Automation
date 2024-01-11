import { Loginpage } from "../pages/Sauce_login.cy";

const login = new Loginpage();
describe("Login tests", () => {
  let userdata;
  it("Before each from fixture", () => {
    cy.fixture("loginsaucedemo").then(function (data) {
      userdata = data;
      cy.log("THIS DATA", userdata);
    });
  });

  it("Sauce Login Page", () => {
    cy.visit("https://www.saucedemo.com/");

    login.LoginUsername(userdata);

    login.LoginButton();

    login.validate(userdata);
  });
});
