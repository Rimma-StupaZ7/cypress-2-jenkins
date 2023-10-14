// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (email, password) => {
  if (email) {
    cy.get('[for="email"] > .login__input').type(email);
  }
  if (password) {
    cy.get('[for="pwd"] > .login__input').type(password);
  }
  cy.contains("Авторизоваться").click();
});

Cypress.Commands.add("validation", (selector) => {
  cy.get(selector)
    .then((element) => {
      return element[0].checkValidity();
    })
    .should("be.false");
});

Cypress.Commands.add("validationMessage", (selector, message) => {
  cy.get(selector)
    .then((element) => {
      return element[0].validationMessage;
    })
    .should("contain", message);
});
