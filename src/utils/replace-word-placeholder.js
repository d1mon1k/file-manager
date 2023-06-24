const replaceWordPlaceholder = (line, insertedWord) => line.replace(/{{([^{}]+)}}/, insertedWord);

export default replaceWordPlaceholder;
