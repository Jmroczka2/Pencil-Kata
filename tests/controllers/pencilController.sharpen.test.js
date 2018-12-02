const chai = require('chai');
const PencilController = require('../../controllers/pencil.controller.js');

const expect = chai.expect; // eslint-disable-line prefer-destructuring

describe('PencilController.sharpen()', function () {
  before(function () {
    PencilController.newPencil();
  });
  describe('if a pencil with some length left is sharpened', function () {
    before(function () {
      PencilController.pencil.point = 10;
      PencilController.pencil.length = 5;
    });
    it('should restore the pencil point to the original value', function () {
      const newPoint = PencilController.sharpen();
      expect(newPoint).to.equal(40000);
    });
  });

  describe('if a pencil with no length left is sharpened', function () {
    before(function () {
      PencilController.pencil.point = 10;
      PencilController.pencil.length = 0;
    });
    it('should not restore the pencil point', function () {
      const newPoint = PencilController.sharpen();
      expect(newPoint).to.equal(10);
    });
  });
});
