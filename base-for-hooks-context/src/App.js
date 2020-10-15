import React from 'react';
import hookActions from './actions/hookActions';
import './App.css';
import Input from './components/Input';
import LanguagePicker from './components/LanguagePicker';
import languageContext from './contexts/languageContext';
import successContext from './contexts/successContext';
import Congrats from './Congrats';

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
      break;
    case 'setLanguage':
      return { ...state, language: action.payload };
      break;

    default:
      return state;
      break;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, {
    secretWord: null,
    language: 'en',
  });

  const setSecretWord = secretWord =>
    dispatch({ type: 'setSecretWord', payload: secretWord });
  const setLanguage = lang => dispatch({ type: 'setLanguage', payload: lang });

  React.useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  if (!state.secretWord) {
    return (
      <div className="container" data-test="spinner">
        Loading...
      </div>
    );
  }

  return (
    <div className="container" data-test="component-app">
      <h1>Jotto</h1>
      <languageContext.Provider value={state.language}>
        <LanguagePicker setLanguage={setLanguage}></LanguagePicker>
        <successContext.SuccessProvider>
          <Congrats></Congrats>
          <Input secretWord={state.secretWord}></Input>
        </successContext.SuccessProvider>
      </languageContext.Provider>
    </div>
  );
}

export default App;
