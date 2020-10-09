import stringModule from './strings';
const { getStringByLanguage } = stringModule;

const strings = {
  en: {
    submit: 'submit',
  },
  es: {
    submit: 'enviar',
  },
  fr: {},
};

describe('language string testing', () => {
  const mockWarn = jest.fn();
  let originalWarn;

  beforeEach(() => {
    originalWarn = console.warn;
    console.warn = mockWarn;
  });
  afterEach(() => {
    console.warn = originalWarn;
  });

  test('should return correct submit string for english', () => {
    const string = getStringByLanguage('en', 'submit', strings);

    expect(string).toBe('submit');
  });

  test('should return correct submit string for spanish', () => {
    const string = getStringByLanguage('es', 'submit', strings);

    expect(string).toBe('enviar');
  });

  test('should return english submit string when language does not exist', () => {
    const string = getStringByLanguage('ch', 'submit', strings);
    expect(string).toBe('submit');
  });
  test('should return english submit string when submit key does not exist for language', () => {
    const string = getStringByLanguage('fr', 'submit', strings);
    expect(string).toBe('submit');
  });
});
