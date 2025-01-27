import yaml from 'js-yaml';

const parse = (format) => {
  const listFormats = {
    json: JSON.parse,
    yml: yaml.load,
    yaml: yaml.load,
  };
  if (listFormats[format]) {
    return listFormats[format];
  }
  throw new Error(`${format} is not supported`);
};

export default parse;
