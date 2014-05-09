mocha.setup("bdd");
document.write('<div id="mocha" />');
expect = chai.expect;
$(function() {
  mocha.run();
});
