/// <reference types="cypress" />
import {Headers_verify, getRand} from "../../support/headers_verify";

function rand() {
    return Math.floor(Math.random() * 1064)
}


describe('API Test - GET, POST', () => {

    before( () => {
        Cypress.config('baseUrl', 'https://jsonplaceholder.typicode.com');
        cy.reload();
    });

    describe('TCID 001: Retrieve photos, comments, albums, posts, todos and users', () => {
        it('1. should retrieve photos successfully', () => {
            cy.api({
                method: 'GET',
                url: '/photos'
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(5000);
            });
        });

        it('2. Should retrieve comments successfully', () => {
            cy.api({
                method: 'GET',
                url: '/comments'
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(500);
            });
        });

        it('3. Should retrieve albums successfully', () => {
            cy.api({
                method: 'GET',
                url: '/albums'
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(100);
            });
        });

        it('4. Should retrieve posts successfully', () => {
            cy.api({
                method: 'GET',
                url: '/posts'
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(100);
            });
        });

        it('5. Should retrieve todos successfully', () => {
            cy.api({
                method: 'GET',
                url: '/todos'
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(200);
            });
        });

        it('6. Should retrieve users successfully', () => {
            cy.api({
                method: 'GET',
                url: '/users'
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.length).to.equal(10);
            });
        });
    });

    describe('TCID 002: Should be able to create post', () => {
        it('1. send POST request using the api endpoint and request body specified', () => {
            cy.api({
                method: 'POST',
                url: '/posts',
                body: {
                    title: 'foo',
                    body: 'bar',
                    userId: 1,
                },
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    'Authorization': 'Bearer opftgfrfggghghhjjhh'
                },
            }).then((response) => {
                expect(response.status).to.equal(201);

                expect(response.body["title"]).to.equal('foo');
                expect(response.body["body"]).to.equal('bar');
                expect(response.body["userId"]).to.equal(1);
            });
        });
    });

});
