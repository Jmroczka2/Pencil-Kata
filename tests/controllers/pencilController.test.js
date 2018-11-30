const chai = require('chai');
const PencilController = require('../../controllers/pencil.controller.js');

const expect = chai.expect; // eslint-disable-line prefer-destructuring

describe('Pencil Controller', function () {
  describe('.write', function () {
    it('should append text to a valid paper string', function () {
      const newPaper = PencilController.write('Hello, my name is', ' Jon');
      expect(newPaper).to.equal('Hello, my name is Jon');
    });
  });
});
