import React from 'react';
import hookActions from './actions/hookActions';
import './App.css';
import Input from './components/Input';
const reducer = (state, action) => {
  switch (action.type) {
    case 'setSecretWord':
      return { ...state, secretWord: action.payload };
      break;

    default:
      return state;
      break;
  }
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, { secretWord: null });

  const setSecretWord = secretWord =>
    dispatch({ type: 'setSecretWord', payload: secretWord });

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
      <Input secretWord={state.secretWord}></Input>
    </div>
  );
}

export default App;
