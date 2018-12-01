const Pencil = require('../classes/pencil.class.js');

const PencilController = {

  pencil: new Pencil(40000),

  newPencil() {
    this.pencil = new Pencil(40000);
  },

  write(paper, textToWrite) {
    if (this.pencil.point <= 0) {
      return paper;
    }
    if (typeof paper !== 'string') {
      return textToWrite;
    }
    let newPaper;
    if (paper.slice(-1) !== ' ' && textToWrite.slice(0, 1) !== ' ') {
      newPaper = `${paper} ${textToWrite}`;
      return newPaper;
    }
    if (paper.slice(-1) === ' ' && textToWrite.slice(0, 1) === ' ') {
      newPaper = `${paper.trim()} ${textToWrite.trim()}`;
      return newPaper;
    }
    newPaper = paper + textToWrite;
    return newPaper;
  },
};

module.exports = PencilController;
