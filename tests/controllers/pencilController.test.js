const chai = require('chai');
const PencilController = require('../../controllers/pencil.controller.js');

const expect = chai.expect; // eslint-disable-line prefer-destructuring

const VALID_PAPER_STRING = 'Boy, do I love me some bacon! What food do you like best?';
const VALID_TEXT_TO_WRITE_STRING = ' I also really enjoy apples!';
const VALID_WRITE_RESULT = 'Boy, do I love me some bacon! What food do you like best? I also really enjoy apples!';

describe('Pencil Controller', function () {
  describe('.write', function () {
    describe('if a valid paper is passed', function () {
      it('should append text to a valid paper string', function () {
        const newPaper = PencilController.write(VALID_PAPER_STRING, VALID_TEXT_TO_WRITE_STRING);
        expect(newPaper).to.equal(VALID_WRITE_RESULT);
      });
    });

    describe('if an invalid paper is passed', function () {
      it('should create a new paper and return the paper with the new text on it', function () {
        const newPaperNull = PencilController.write(null, VALID_TEXT_TO_WRITE_STRING);
        const newPaperInteger = PencilController.write(2, VALID_TEXT_TO_WRITE_STRING);
        expect(newPaperNull).to.equal(VALID_TEXT_TO_WRITE_STRING);
        expect(newPaperInteger).to.equal(VALID_TEXT_TO_WRITE_STRING);
      });
    });
  });
});
