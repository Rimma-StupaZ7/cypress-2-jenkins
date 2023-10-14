import loginAdmin from "../../fixtures/loginData.json";
//import mainPage from "../fixtures/mainPage.json"

describe("Testing authorization", () => {
  beforeEach(() => {
    cy.visit("/admin");
  });

  it("Failed authorization", () => {
    loginAdmin.forEach((test) => {
      cy.get(test.email).type(test.login),
        cy.get(test.password).type(test.wrongPass),
        cy.get(test.button).click();
      cy.contains("Ошибка авторизации!").should("be.visible");
    });
  });
});
