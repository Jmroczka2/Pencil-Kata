
function write(paper, textToWrite) {
  if (typeof paper !== 'string') {
    return textToWrite;
  }
  return paper.concat(textToWrite);
}


module.exports = {
  write,
};
