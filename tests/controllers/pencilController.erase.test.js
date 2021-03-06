const chai = require('chai');
const PencilController = require('../../controllers/pencil.controller.js');

const expect = chai.expect; // eslint-disable-line prefer-destructuring

const VALID_PAPER_STRING = 'I think bacon is really good food! It is my favorite type of food.';
const VALID_ERASE_STRING = 'food';
const VALID_ERASE_RESULT = 'I think bacon is really good food! It is my favorite type of     .';
const VALID_ERASE_STRING_NOT_IN_PAPER = 'testing';

describe('PencilController.erase()', function () {
  describe('validity tests', function () {
    beforeEach(function () {
      PencilController.newPencil();
    });
    describe('if an invalid paper is passed', function () {
      it('should return a new, empty paper', function () {
        const newPaper = PencilController.erase(null, VALID_ERASE_STRING);
        expect(newPaper).to.equal('');
      });
    });
    describe('if an invalid erase string is passed', function () {
      it('should return a valid paper untouched', function () {
        const newPaper1 = PencilController.erase(VALID_PAPER_STRING, null);
        expect(newPaper1).to.equal(VALID_PAPER_STRING);
      });
    });
  });

  before(function () {
    PencilController.newPencil();
  });
  describe('if a pencil with some eraser left is used to erase a string from a paper', function () {
    it('should erase the text from the paper', function () {
      const newPaper = PencilController.erase(VALID_PAPER_STRING, VALID_ERASE_STRING);
      expect(newPaper).to.equal(VALID_ERASE_RESULT);
    });
  });
  describe('if a pencil with some eraser left is used to erase a string that is not on the paper', function () {
    it('should return the paper untouched', function () {
      const newPaper = PencilController.erase(VALID_PAPER_STRING, VALID_ERASE_STRING_NOT_IN_PAPER);
      expect(newPaper).to.equal(VALID_PAPER_STRING);
    });
  });
});
