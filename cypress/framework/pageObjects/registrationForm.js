
import * as locators from '../elements/locator';
class RegistrationForm {

    filloutForm(user) {
        //cy.fixture('example').then((user) => {
            cy.xpath(locators.home.REGISTRATION_BUTTON).click();
            cy.xpath(locators.charts.CHART1);
            cy.xpath(locators.clientOnBoarding.CANCEL_BUTTON);
        //let locators.registration = registration;
        cy.xpath(locators.registration.FIRST_NAME_FIELD).type(user.firstName);

            cy.xpath(locators.registration.LAST_NAME_FIELD).clear().type(user.lastName);

            cy.xpath(locators.registration.STREET_ADDRESS_1_FIELD).type(user.streetAddress1);

            cy.xpath(locators.registration.STREET_ADDRESS_2_FIELD).type(user.streetAddress2);

            cy.xpath(locators.registration.CITY_FIELD).type(user.city);

            cy.xpath(locators.registration.STATE_FIELD).type(user.state);

            cy.xpath(locators.registration.ZIP_CODE_FIELD).type(user.zipCode);

            cy.xpath(locators.registration.COUNTRY_FIELD).select(user.country);
            //.debug();

            cy.xpath(locators.registration.PHONE_FIELD).type(user.phone);

            cy.xpath(locators.registration.EMAIL_FIELD).type(user.email);

            cy.xpath(locators.registration.COMMENT_FIELD).type(user.comment);

        //});

        //return this
    }
}
export default RegistrationForm
