import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the app", () => {
  cy.visit("/");
  cy.contains("ion-content", "Tab 1 page");
  cy.wait(2000);
});

When("the user goes to the second tab Tab 2 Photo Gallery", () => {
  cy.get("#tab-button-tab2 > ion-icon.md").click();
  cy.contains("Photo Gallery");
  cy.wait(2000);
});

Then("take a photo by clicking the camera button", () => {
  cy.get(".fab-horizontal-center > .ion-activatable").click();
  cy.get("pwa-camera-modal-instance.hydrated")
    .shadow()
    .parent(".shutter")
    .find(".shutter-button")
    .click()
    .wait(1000);
});

Then("save the photo by clicking the accept button", () => {
  cy.get(".camera-footer")
    .find("section.items")
    .find(".item.accept-use")
    .should("be.visible")
    .click()
    .wait(1000);
});

Then("delete the saved photo by clicking the delete button", () => {
  cy.get("ion-row.md")
    .find("img")
    .eq(0)
    .should("be.visible")
    .click()
    .wait(2000)
    .get("button")
    .filter(':contains("Delete")')
    .should("be.visible")
    .click();
});
