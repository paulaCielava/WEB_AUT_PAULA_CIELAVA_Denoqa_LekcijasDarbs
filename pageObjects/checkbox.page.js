import BasePage from "./base.page";

class CheckboxPage extends BasePage{
    static get url(){
        return "/checkbox";
    }

    static get expandButton() {
        return cypress.get(".rct-option-expand-all");
    }

    static get checkboxTitles() {
        return cypress.get(".rtc-titles");
    }

    static get result(){
        return cypress.get("#result");
    }
    
}

export default CheckboxPage;