import fs from 'fs';
import path from 'path';
import parse from './parsers.js'
import compareData from './compareData.js';
import format from './formatters/format.js';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutPath(filepath), 'utf-8');
const getFormat = (filename) => filename.split('.')[1];

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
    console.log('File 1:');
    const parsed1 = parse(readFile(filepath1), getFormat(filepath1));
    console.log(parsed1);
    console.log();
    console.log('File 2:');
    const parsed2 = parse(readFile(filepath2), getFormat(filepath2));
    console.log(parsed2);
    const data = compareData(parsed1, parsed2);

    return format(data, formatName);
}

export default genDiff;
