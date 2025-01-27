import stylish from './stylish.js';
import plain from './plain.js';

const format = (formatName) => {
  const formats = {
    stylish,
    plain,
    json: JSON.stringify,
  };
  if (formats[formatName]) {
    return formats[formatName];
  }
  throw new Error('Invalid format');
};

export default format;
