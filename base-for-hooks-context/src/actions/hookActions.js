import axios from 'axios';

export const getSecretWord = async setSecretWord => {
  const response = await axios.get('http://localhost');

  setSecretWord(response.data);
};

export default {
  getSecretWord,
};
