/// <reference types="cypress" />

const userData = require('../../fixtures/example');
import {Go, Verify, Fill, Display, Click} from '../../framework/lib/helper';
import * as locators from "../../framework/elements/locator";

describe('Automation Test Suite 002', () => {

    before( () => {
        cy.visit('/');
    });

    describe('TCID001: Should be able to navigate through all pages using nav bar', () => {
        it('1. Navigate to the Home Page', () => {
            Go.To.Home();
            Verify.Page.Title.Home('Home')
        });
        it('2. Navigate to the Tables Page', () => {
            Go.To.Tables();
            Verify.Page.Title.Tables('Tables')
        });
        it('3. Navigate to the Forms Page', () => {
            Go.To.Forms();
            Verify.Page.Title.Forms('Forms')
        });
        it('4. Navigate to the Modals Page', () => {
            Go.To.Modals();
            Verify.Page.Title.Modals('Modals')
        });
        it('5. Navigate to the Various Page', () => {
            Go.To.Various();
            Verify.Page.Title.Various('Various components')
        });
        it('6. Navigate to the Charts Page', () => {
            Go.To.Charts();
            Verify.Page.Title.Charts('Charts')
        })

    });

    describe('TCID002: Should be able to fill out and Send the Registration Form', () => {
        it('1. Go to the Home Page', () => {
            Go.To.Home();
            Verify.Page.Title.Home('Home')
        });
        it('2. Click the Registration button', () => {
            Click(locators.home.REGISTRATION_BUTTON);
        });
        it('3. Fill out the Registration ', () => {
            Fill.Out.RegistrationFormn(userData);
        });
        it('4. Click the Send button', () => {
            Click(locators.registration.SEND_BUTTON)
        });
        it('5. Verify that the newly registered user name is displayed', () => {
            Verify.Registration.Name(userData.firstName + ', ' + userData.lastName)
        })
    });

    describe('TCID003: Should be able to fill out and Send the Client On Boarding Form', () => {
        it('1. Go to the Home Page', () => {
            Go.To.Home();
            Verify.Page.Title.Home('Home')
        });
        it('2. Click the Client On Boarding button', () => {
            Click(locators.home.CLIENT_ONBOARDING_BUTTON);
        });
        it('3. Fill out the Registration ', () => {
            Fill.Out.ClientOnBoardingForm(userData);
        });
        it('4. Click the Send button', () => {
            Click(locators.clientOnBoarding.SEND_BUTTON)
        });
        it('5. Verify that the newly registered user name is displayed', () => {
            Verify.ClientOnBoarding.Email('your@email.com')
        })
    });

    describe('TCID004: Should be able to fill out and send the Marketing Agent Registration Form', () => {
        it('1. Go to the Home Page', () => {
            Go.To.Home();
            Verify.Page.Title.Home('Home')
        });
        it('2. Click the Client On Boarding button', () => {
            Click(locators.home.MARKETING_AGENT_REGISTRATION_BUTTON);
        });
        it('3. Fill out the Registration ', () => {
            Fill.Out.MarketingAgentsRegistration(userData);
        });
        it('4. Click the Send button', () => {
            Click(locators.marketingAgentsRegistration.SEND_BUTTON)
        });
        it('5. Verify that the newly registered user name is displayed', () => {
            Verify.MarketingAgentsRegistration.Name(userData.firstName + ', ' + userData.lastName)
        })
    });

    describe('TCID005: Should be able to register a user', () => {
        it('1. Go to the Home Page', () => {
            Go.To.Home();
            Verify.Page.Title.Home('Home')
        });
        it('2. Click the Registration button', () => {
            Click(locators.home.REGISTRATION_BUTTON);
        });
        it('3. Fill out the Registration ', () => {
            Fill.Out.RegistrationFormn(userData);
        });
        it('4. Click the Cancel button', () => {
            Click(locators.registration.CANCEL_BUTTON)
        });
    });

    describe('TCID006: Should be able to display Charts', () => {
        it('1. Go to the Charts Page', () => {
            Go.To.Charts();
            Verify.Page.Title.Charts('Charts')
        });
        it('2. Should displays Line chart', () => {
            Display.Chart.Line();
        });
        it('3. Should displays Bar chart', () => {
            Display.Chart.Bar();
        });
        it('4. Should displays Horizontal Bar chart', () => {
            Display.Chart.HorizontalBar();
        });
        it('5. Should displays Doughnut chart', () => {
            Display.Chart.Doughnut();
        });
        it('6. Should displays Pie chart', () => {
            Display.Chart.Pie();
        })
    });
});
