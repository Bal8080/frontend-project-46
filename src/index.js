import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import compareData from './compareData.js';
import format from './formatters/index.js';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutPath(filepath), 'utf-8');
const getFormat = (filename) => filename.split('.')[1];

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const parsed1 = parse(getFormat(filepath1))(readFile(filepath1));
  const parsed2 = parse(getFormat(filepath2))(readFile(filepath2));
  const data = compareData(parsed1, parsed2);

  return format(formatName)(data);
};

export default genDiff;
