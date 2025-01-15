import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), filepath);
const file1Path = getAbsolutPath('__fixtures__/file1.json');
const file2Path = getAbsolutPath('__fixtures__/file2.json');
const resPath = getAbsolutPath('__fixtures__/result.txt');
console.log(genDiff(file1Path, file2Path), 1111111111);
console.log(fs.readFileSync(resPath).toString(), 22222222222);

test('gendiff', () => {
  expect(genDiff(file1Path, file2Path)).toEqual(fs.readFileSync(resPath, 'utf-8'));
});
