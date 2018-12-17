/* eslint-disable no-useless-escape */
const Pencil = require('../classes/pencil.class.js');

function determineRemainingPointAndWriteableText(point, textToWrite) {
  const numberOfUpperCaseChars = (textToWrite.match(/[A-Z]/g) || []).length;
  const numberOfSpecialAndLowerCaseChars = (textToWrite.match(/[a-z0-9,.?!;:=+\-_@#$%^&*~(){}\\\/\[\]]/g) || []).length;
  const totalWriteLength = numberOfSpecialAndLowerCaseChars + (numberOfUpperCaseChars * 2);
  const remainingPoint = point - totalWriteLength;

  let writeableText = '';
  if (remainingPoint >= 0) {
    writeableText = textToWrite;
    return { remainingPoint, writeableText };
  }

  for (let i = 0, charactersWritten = 0; point - charactersWritten > 0; i += 1) {
    if (textToWrite.charAt(i) === ' ') {
      writeableText += textToWrite.charAt(i);
    }
    if ((textToWrite.charAt(i).match(/[A-Z]/g) || []).length === 1) {
      writeableText += textToWrite.charAt(i);
      charactersWritten += 2;
    }
    if ((textToWrite.charAt(i).match(/[a-z0-9,.?!;:=+\-_@#$%^&*~(){}\\\/\[\]]/g) || []).length) {
      writeableText += textToWrite.charAt(i);
      charactersWritten += 1;
    }
  }
  return { writeableText, remainingPoint };
}

const PencilController = {

  pencil: new Pencil(40000, 5),

  newPencil() {
    this.pencil = new Pencil(40000, 5);
  },

  write(paper, textToWrite) {
    if (this.pencil.point <= 0) {
      return paper;
    }
    const {
      writeableText,
      remainingPoint,
    } = determineRemainingPointAndWriteableText(this.pencil.point, textToWrite);

    this.pencil.point = remainingPoint;

    if (typeof paper !== 'string') {
      return writeableText;
    }
    let newPaper;
    if (paper.slice(-1) !== ' ' && writeableText.slice(0, 1) !== ' ') {
      newPaper = `${paper} ${writeableText}`;
      return newPaper;
    }
    if (paper.slice(-1) === ' ' && writeableText.slice(0, 1) === ' ') {
      newPaper = `${paper.trim()} ${writeableText.trim()}`;
      return newPaper;
    }
    newPaper = paper + writeableText;
    return newPaper;
  },

  sharpen() {
    return this.pencil.sharpen();
  },

  erase(paper, textToErase) {
    const index = paper.lastIndexOf(textToErase);
    const spacesToReplaceText = ' '.repeat(textToErase.length);
    const newPaper = paper.substr(0, index) + spacesToReplaceText
      + paper.substr(index + spacesToReplaceText.length);
    return newPaper;
  },
};

module.exports = PencilController;
