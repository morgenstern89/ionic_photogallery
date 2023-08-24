describe("My First Test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains("ion-content", "Tab 1 page");
    cy.wait(3000);
  });

  it("Go to Tab 2 Photo Gallery and take a photo", () => {
    cy.get("#tab-button-tab2 > ion-icon.md").click();
    cy.contains("Photo Gallery");
    cy.wait(2000);

    cy.get(".fab-horizontal-center > .ion-activatable")
      .should("be.visible")
      .click()
      .wait(1000);

    cy.get("pwa-camera-modal-instance.hydrated")
      .should("have.length", "1")
      .shadow()
      .parent(".shutter")
      .find(".shutter-button")
      .click()
      .wait(1000);

    cy.get(".camera-footer")
      .find("section.items")
      .find(".item.accept-use")
      .should("be.visible")
      .click()
      .wait(1000);

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
});
