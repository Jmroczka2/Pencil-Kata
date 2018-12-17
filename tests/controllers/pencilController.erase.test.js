const chai = require('chai');
const PencilController = require('../../controllers/pencil.controller.js');

const expect = chai.expect; // eslint-disable-line prefer-destructuring

const VALID_PAPER_STRING = 'I think bacon is really good food! It is my favorite type of food.';
const VALID_ERASE_STRING = 'food';
const VALID_ERASE_RESULT = 'I think bacon is really good food! It is my favorite type of     .';

describe('PencilController.erase()', function () {
  before(function () {
    PencilController.newPencil();
  });
  describe('if a pencil with some eraser left is used to erase a string from a paper', function () {
    it('should erase the text from the paper', function () {
      const newPaper = PencilController.erase(VALID_PAPER_STRING, VALID_ERASE_STRING);
      expect(newPaper).to.equal(VALID_ERASE_RESULT);
    });
  });
});
