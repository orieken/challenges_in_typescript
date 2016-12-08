import { browser, element, by } from "protractor";

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

export = function() {
  this.When(/^Challenges are loaded$/, function () {
    browser.get('/');
  });

  this.Then(/^I should see the "([^"]*)" message$/, function (expectedMessage) {
    // Write code here that turns the phrase above into concrete actions
    expect(element(by.tagName('h1')).getText()).to.eventually.equal(expectedMessage)
  });
}
