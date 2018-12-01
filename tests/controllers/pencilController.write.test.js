const chai = require('chai');
const PencilController = require('../../controllers/pencil.controller.js');

const expect = chai.expect; // eslint-disable-line prefer-destructuring

const VALID_PAPER_STRING = 'Boy, do I love me some bacon! What food do you like best?';
const VALID_WRITEABLE_STRING = ' I also really enjoy apples!';
const VALID_WRITEABLE_STRING_MISSING_WHITESPACE = 'I also really enjoy apples!';
const VALID_WRITE_RESULT = 'Boy, do I love me some bacon! What food do you like best? I also really enjoy apples!';

describe('Pencil Controller', function () {
  describe('.write()', function () {
    beforeEach(function () {
      PencilController.newPencil();
    });

    describe('validity tests', function () {
      describe('if a valid paper is passed', function () {
        it('should append text to a valid paper string', function () {
          const newPaper = PencilController.write(VALID_PAPER_STRING, VALID_WRITEABLE_STRING);
          expect(newPaper).to.equal(VALID_WRITE_RESULT);
        });
      });

      describe('if an invalid paper is passed', function () {
        it('should create a new paper and return the paper with the new text on it', function () {
          const newPaperNull = PencilController.write(null, VALID_WRITEABLE_STRING);
          const newPaperInteger = PencilController.write(2, VALID_WRITEABLE_STRING);
          expect(newPaperNull).to.equal(VALID_WRITEABLE_STRING);
          expect(newPaperInteger).to.equal(VALID_WRITEABLE_STRING);
        });
      });
    });

    describe('whitespace tests for paper and new text', function () {
      describe('but the paper is missing whitespace', function () {
        it('should add whitespace to the paper in addition to new text to avoid errors', function () {
          const newPaper = PencilController.write(
            VALID_PAPER_STRING, VALID_WRITEABLE_STRING_MISSING_WHITESPACE,
          );
          expect(newPaper).to.equal(VALID_WRITE_RESULT);
        });
      });

      describe('but the paper has trailing whitespace', function () {
        it('should remove the extra whitespace then add the new text to avoid errors', function () {
          const validPaperWithExtraWhitespace = `${VALID_PAPER_STRING}       `;
          const newPaper = PencilController.write(
            validPaperWithExtraWhitespace, VALID_WRITEABLE_STRING,
          );
          expect(newPaper).to.equal(VALID_WRITE_RESULT);
        });
      });

      describe('but the paper has trailing whitespace and new text has leading whitespace', function () {
        it('should remove the extra whitespace then add the new text to avoid errors', function () {
          const validPaperWithExtraWhitespace = `${VALID_PAPER_STRING} `;
          const newPaper = PencilController.write(
            validPaperWithExtraWhitespace, VALID_WRITEABLE_STRING,
          );
          expect(newPaper).to.equal(VALID_WRITE_RESULT);
        });
      });
    });

    describe('pencil point degradation tests', function () {
      describe('but the pencil has no point left', function () {
        beforeEach(function () {
          PencilController.pencil.point = 0;
        });
        it('should write nothing to the paper', function () {
          const newPaper = PencilController.write(VALID_PAPER_STRING, VALID_WRITEABLE_STRING);
          expect(newPaper).to.equal(VALID_PAPER_STRING);
        });
      });
    });
  });
});
