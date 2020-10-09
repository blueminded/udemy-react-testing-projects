import React from 'react';
import propTypes from 'prop-types';
const LanguagePicker = ({ setLanguage }) => {
  const languages = [
    { code: 'en', symbol: 'USA' },
    { code: 'es', symbol: 'COL' },
  ];

  const languageIcons = languages.map(lang => {
    return (
      <span
        data-test="language-icon"
        key={lang.code}
        onClick={() => setLanguage(lang.code)}
      >
        {lang.symbol}
      </span>
    );
  });

  return <div data-test="language-picker-component">{languageIcons}</div>;
};

LanguagePicker.propTypes = {
  setLanguage: propTypes.func.isRequired,
};

export default LanguagePicker;
