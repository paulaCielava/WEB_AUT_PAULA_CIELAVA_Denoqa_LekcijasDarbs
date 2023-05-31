class TextBoxPage {
    static get url() {
        return "/text-box";
    }
    static visit() {
        cypress.visit(this.url);
    }
    static get usernameField() {
        return cypress.get("#userName");
    }
    static get emailField() {
        return cypress.get("#userEmail");
    }
    static get currentAddressField() {
        return cypress.get("textarea#currentAddress");
    }
    static get permanentAdressField() {
        return cypress.get("textarea#permanentAddress");
    }
    static get submitButton() {
        return cypress.get("button#submit");
    }
    static get nameSection() {
        return cypress.get("#name");
    }
    static get emailSection() {
        return cypress.get("#email");
    }
    static get currentAddressSection() {
        return cypress.get("p#currentAddress");
    }
    static get permanentAddressSection() {
        return cypress.get("p#permanentAddress");
    }
}

export default TextBoxPage;
