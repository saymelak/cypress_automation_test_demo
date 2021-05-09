import * as locators from "../../framework/elements/locator";
require('cypress-xpath');
class Go {

}

Go.To = class {
    static Home() {
        cy.xpath(locators.navbar.HOME).click()
    }
    static Tables() {
        cy.xpath(locators.navbar.TABLES).click()
    }
    static Forms() {
        cy.xpath(locators.navbar.FORMS).click()
    }
    static Modals() {
        cy.xpath(locators.navbar.MODALS).click()
    }
    static Various() {
        cy.xpath(locators.navbar.VARIOUS).click()
    }
    static Charts() {
        cy.xpath(locators.navbar.CHARTS).click()
    }
};
class Display {
}
Display.Chart = class {
    static Line() {
        cy.xpath(locators.charts.CHART_TYPE_FIELD).select('Line');
        cy.xpath(locators.charts.SUBMIT_BUTTON).click()
    }
    static Bar() {
        cy.xpath(locators.charts.CHART_TYPE_FIELD).select('Bar');
        cy.xpath(locators.charts.SUBMIT_BUTTON).click()
    }
    static HorizontalBar() {
        cy.xpath(locators.charts.CHART_TYPE_FIELD).select('Horizontal Bar');
        cy.xpath(locators.charts.SUBMIT_BUTTON).click()
    }
    static Doughnut() {
        cy.xpath(locators.charts.CHART_TYPE_FIELD2).select('Doughnut');
        cy.xpath(locators.charts.SUBMIT_BUTTON2).click()
    }
    static Pie() {
        cy.xpath(locators.charts.CHART_TYPE_FIELD2).select('Pie');
        cy.xpath(locators.charts.SUBMIT_BUTTON2).click()
    }
};

class Verify {
}
Verify.Page = class {

};
Verify.Registration = class {
    static Name(name) {
        cy.xpath('//*[@id="newRegistration"]').invoke('text')
            .should('equal', name);
    }
};

Verify.ClientOnBoarding = class {
    static Email(email) {
        cy.xpath('//*[@id="newClientRegistration"]').invoke('text')
            .should('equal', email);
    }
};

Verify.MarketingAgentsRegistration = class {
    static Name(name) {
        cy.xpath('//*[@id="newAgentRegistration"]').invoke('text')
            .should('equal', name);
    }
};

Verify.Page.Title = class {
    static Home(title) {
        cy.xpath(locators.home.TITLE).invoke('text').should('equal', title);
    }
    static Tables(title) {
        cy.xpath(locators.tables.TITLE).invoke('text').should('equal', title);
    }
    static Forms(title) {
        cy.xpath(locators.forms.TITLE).invoke('text').should('equal', title);
    }
    static Modals(title) {
        cy.xpath(locators.modals.TITLE).invoke('text').should('equal', title);
    }
    static Various(title) {
        cy.xpath(locators.various.TITLE).invoke('text').should('equal', title);
    }
    static Charts(title) {
        cy.xpath(locators.charts.TITLE).invoke('text').should('equal', title);
    }

};

class Fill {
}
Fill.Out = class  {
    static RegistrationFormn(user) {
        cy.xpath(locators.registration.FIRST_NAME_FIELD).type(user.firstName);
        cy.xpath(locators.registration.LAST_NAME_FIELD).clear().type(user.lastName);
        cy.xpath(locators.registration.STREET_ADDRESS_1_FIELD).type(user.streetAddress1);
        cy.xpath(locators.registration.STREET_ADDRESS_2_FIELD).type(user.streetAddress2);
        cy.xpath(locators.registration.CITY_FIELD).type(user.city);
        cy.xpath(locators.registration.STATE_FIELD).type(user.state);
        cy.xpath(locators.registration.ZIP_CODE_FIELD).type(user.zipCode);
        cy.xpath(locators.registration.COUNTRY_FIELD).select(user.country);
        cy.xpath(locators.registration.PHONE_FIELD).type(user.phone);
        cy.xpath(locators.registration.EMAIL_FIELD).type(user.email);
        cy.xpath(locators.registration.COMMENT_FIELD).type(user.comment);
    }
    static ClientOnBoardingForm(user) {
        cy.xpath(locators.clientOnBoarding.PHONE_FIELD).type('(250) 721-0989').debug();
        cy.xpath(locators.clientOnBoarding.SLACK_EMAIL_FIELD).type('slack@email.com');
        cy.xpath(locators.clientOnBoarding.YOUR_EMAIL_FIELD).type('your@email.com');
        cy.xpath(locators.clientOnBoarding.FACEBOOK_CHECKBOX).click();
        cy.xpath(locators.clientOnBoarding.INSTAGRAM_CHECKBOX).click();
        cy.xpath(locators.clientOnBoarding.TWITTER_CHECKBOX).click();
        cy.xpath(locators.clientOnBoarding.PINTEREST_CHECKBOX).click();
        cy.xpath(locators.clientOnBoarding.LINKEDIN_CHECKBOX).click();
        cy.xpath(locators.clientOnBoarding.SOCIAL_MEDIA_LOGINS_FIELD).type('your@email.com');
        cy.xpath(locators.clientOnBoarding.THREE_TIMES_RADIO_BUTTON).click();
        cy.xpath(locators.clientOnBoarding.DONE_RADIO_BUTTON).click();
    }
    static MarketingAgentsRegistration(user) {
        cy.xpath(locators.marketingAgentsRegistration.FIRST_NAME_FIELD).type(user.firstName);
        cy.xpath(locators.marketingAgentsRegistration.LAST_NAME_FIELD).type(user.lastName);
        cy.xpath(locators.marketingAgentsRegistration.EMAIL_FIELD).type(user.email);
        cy.xpath(locators.marketingAgentsRegistration.COMPANY_NAME_FIELD).type('ABC');
        cy.xpath(locators.marketingAgentsRegistration.PHONE_FIELD).type('(250) 721-0989');
        cy.xpath(locators.marketingAgentsRegistration.DESCRIBE_FIELD).type('NA');
        cy.wait(1000)
    }
    static ContactForm() {
        cy.xpath(locators.forms.NAME_FIELD).type("Robert Smith");
        cy.xpath(locators.forms.EMAIL_FIELD).type("Robert.Smith@email.com");
        cy.xpath(locators.forms.PASSWORD_FIELD).type("password");
        cy.xpath(locators.forms.WEBSITE_FIELD).type("http://smith.robert.com");
        cy.xpath(locators.forms.PHONE_FIELD).type("(250) 767-9090");
        cy.xpath(locators.forms.REFERENCE_FIELD).select("Facebook");
        cy.xpath(locators.forms.COMMENT_RADIO_BUTTON).click();
        cy.xpath(locators.forms.COMMENTS_FIELD).type("Comment...");
    }
};

function Click(locator) {
    cy.xpath(locator).click();
}

export {Go, Verify, Fill, Display, Click };
