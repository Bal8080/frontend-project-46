import yaml from 'js-yaml';

const parse = (format) => {
  // switch (format) {
  //   case 'json':
  //     return JSON.parse(data);
  //   case 'yml':
  //   case 'yaml':
  //     return yaml.load(data);
  //   default:
  //     throw new Error(`${format} is not supported`);
  // }
  const listFormats = {
    json: JSON.parse,
    yml: yaml.load,
    yaml: yaml.load,
  };
  if (listFormats[format] !== undefined) {
    return listFormats[format];
  }
  throw new Error(`${format} is not supported`);
};

export default parse;
