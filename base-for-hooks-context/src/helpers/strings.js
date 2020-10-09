const languageStrings = {
  en: {
    congrats: 'Congratulations!',
    submit: 'Send',
    guessPrompt: 'Try to guess the secret word',
    guessInputPlaceHolder: 'Enter guess',
    guessColumnHeader: 'Guessed words',
    guessedWords: 'Guesses',
    matchingLettersColumnHeader: 'Matching letters',
  },
  es: {
    congrats: 'Felicitaciones!',
    submit: 'Enviar',
    guessPrompt: 'Intenta adivinar la palabra secreta',
    guessInputPlaceHolder: 'Ingrega palabra',
    guessColumnHeader: 'Lista de palabras',
    guessedWords: 'Adivinanzas',
    matchingLettersColumnHeader: 'Letras adivinadas',
  },
};

const getStringByLanguage = (code, string, strings = languageStrings) => {
  if (!strings[code] || !strings[code][string]) {
    console.warn(`Cold not get string [${string}] for [${code}]`);
    return strings.en[string];
  }

  return strings[code][string];
};

export default {
  getStringByLanguage,
};
