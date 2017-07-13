const getWord = vocabulary => {
  const word = vocabulary[Math.floor(Math.random() * vocabulary.length)];
  const message = [
    `---------------------`,
    `*${word.word_es}*`,
    `${word.word_en}`,
    ``,
    `*${word.ejemplo_es}*`,
    `${word.ejemplo_en}`,
    `---------------------`,
  ].join('\n');

  return message;
};

module.exports = {
  getWord,
};
