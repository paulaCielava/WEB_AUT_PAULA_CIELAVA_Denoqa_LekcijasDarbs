import { describe } from "mocha";
import TextBoxPage from "../../pageObjects/textBoxPage.page.js";
import checkboxPage from "../../pageObjects/checkbox.page.js";
import { Context } from "mocha";
import CheckboxPage from "../../pageObjects/checkbox.page.js";

describe("Elements", () => {
  context("Text Box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    it("Text Box Positive", () => {
      // Interactions with elements
      TextBoxPage.usernameField.type("Donald Trump");
      TextBoxPage.elmailField.type("random@email.com");
      TextBoxPage.currentAddressField.type("Random Current Adress");
      TextBoxPage.permanentAddressField.type("Random Permanent Adress");
      TextBoxPage.submitButton.click();
      // Validation
      TextBoxPage.nameSection.should("have.text", "Name:Donald Trump");
      TextBoxPage.emailSection.should("have.text", "Email:random@email.com");
      TextBoxPage.currentAddressSection.should(
        "contain.text",
        "Current Adress :Random Current Adress"
      );
      TextBoxPage.permananentAdressSection.should(
        "contain.text",
        "Permananent Address :Random Permanen Address"
      );
    });

    it.only("Text Box Negative", () => {
      TextBoxPage.emailField.type("random@email@asdsada.com");
      TextBoxPage.submitButton.click();
      TextBoxPage.emailField.should("have.class", "field-error");
    })
  });
  // Checkbox scenarios
  context("Check Box scenarios", () => {
    beforeEach(() => {
      CheckboxPage.visit();
    });

    it('Checkbox select items', () => {
      // Click Expand (+) icon/button
      CheckboxPage.expandButton.click();
      // Click Notes, Angular, Private, Excel File.doc
      CheckboxPage.checkboxTitles.contains("Notes").click();
      CheckboxPage.checkboxTitles.contains("Angular").click();
      CheckboxPage.checkboxTitles.contains("Private").click();
      CheckboxPage.checkboxTitles.contains("Excel File.doc").click();
      // Validate that selected items are registered
      CheckboxPage.result.should(
        "have.text",
        "You have selected :notesangularprivateexcelFile"
      );
    })
  });
  it("Checkbox click Desktop", () => {
    // Click Expand (+) icon/button
    CheckboxPage.expandButton.click();
    // Click Desktop
    CheckboxPage.checkboxTitles.contains("Desktop").click();
    // Validate success message - You have selected :desktopnotescommandsCheckboxPage.result.should(
    CheckboxPage.result.should(
      "have.text",
      "You have selected :desktopnotescommands"
    );
  });

  // Radio button
  context("Radio Button scenarios", () => {
    beforeEach(() => {
      RadioButtonsPage.visit();
    });

    it.only("Click buttons and validate", () => {
      // Click Yes button
      RadioButtonsPage.yesButton.click();
      // Validate message - You have selected Yes
      RadioButtonsPage.successMessage.should("have.text", "Yes");
      // Click Impressive button
      RadioButtonsPage.impressiveButton.click({ force: true });
      // Validate message - You have selected Impressive
      RadioButtonsPage.successMessage.should("heve.text", "Impresssive")
      // Validate that no button is disabled
      RadioButtonsPage.noButton.should("have.text", "disabled");

    });
  });



  // Radio button
  // Web tables
  // Buttons
  // Interactions - Selectable



});