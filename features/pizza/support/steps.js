const assert = require("assert");
const { When, Then } = require("@cucumber/cucumber");
const { simplePizzaMaker } = require("../../../dist/pizza/scenarios/simple.pizza.maker");

When("the simple pizza maker make pizza", function () {
  this.simplePizzaMaker = simplePizzaMaker;
});

Then("I should have pizza with name {string}", function (expectedResponse) {
  this.simplePizzaMaker.subscribe((pizza) => {
    assert.equal(pizza.name, "simple pizza");
  });
});
