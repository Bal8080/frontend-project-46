import stylish from './stylish.js';
import plain from './plain.js';

const format = (formatName) => {
  // switch (formatName) {
  //   case 'stylish': {
  //     return stylish(data);
  //   }
  //   case 'plain': {
  //     return plain(data);
  //   }
  //   case 'json': {
  //     return JSON.stringify(data);
  //   }
  //   default:
  //     throw new Error('Invalid format');
  // }
  const formats = {
    stylish,
    plain,
    json: JSON.stringify,
  };
  if (formats[formatName] !== undefined) {
    return formats[formatName];
  }
  throw new Error('Invalid format');
};

export default format;
