
function write(paper, textToWrite) {
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
}


module.exports = {
  write,
};
