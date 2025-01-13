import fs from 'fs';
import path from 'path';
import parse from './parsers.js'

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutPath(filepath), 'utf-8');
const getFormat = (filename) => filename.split('.')[1];

const genDiff = (filepath1, filepath2) => {
    console.log('File 1:');
    const f1 = parse(readFile(filepath1), getFormat(filepath1));
    console.log(f1);
    console.log();
    console.log('File 2:');
    const f2 = parse(readFile(filepath2), getFormat(filepath2));
    console.log(f2);
}

export default genDiff;