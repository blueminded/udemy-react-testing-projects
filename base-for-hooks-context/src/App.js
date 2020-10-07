import React from 'react';
import hookActions from './actions/hookActions';
import './App.css';

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

  return <div data-test="component-app"></div>;
}

export default App;
