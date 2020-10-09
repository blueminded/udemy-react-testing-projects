import React from 'react';
import PropTypes from 'prop-types';
import languageContext from '../contexts/languageContext';
import stringsModule from './../helpers/strings';
const Input = ({ secretWord }) => {
  const language = React.useContext(languageContext);
  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div data-test="input-component">
      <form className="form-inline">
        <input
          type="text"
          data-test="input-box"
          className="mb-2mx-sm-3"
          placeholder={stringsModule.getStringByLanguage(
            language,
            'guessInputPlaceHolder'
          )}
          value={currentGuess}
          onChange={event => setCurrentGuess(event.target.value)}
        />
        <button
          data-test="submit-button"
          onClick={event => {
            event.preventDefault();
            setCurrentGuess('');
          }}
          className="btn btn-primary mb-2"
        >
          {stringsModule.getStringByLanguage(language, 'submit')}
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
