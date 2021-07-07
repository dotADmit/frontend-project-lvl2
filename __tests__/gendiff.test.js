import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const json3 = getFixturePath('file3.json');
const json4 = getFixturePath('file4.json');
const yml3 = getFixturePath('file3.yaml');
const yml4 = getFixturePath('file4.yml');

const resultPlain = readFileSync(getFixturePath('resultPlain'), 'utf8');
const resultStylish = readFileSync(getFixturePath('resultStylish'), 'utf8');

test('recursive work json', () => {
  expect(gendiff(json3, json4)).toEqual(resultStylish);
});

test('recursive work yml', () => {
  expect(gendiff(yml3, yml4)).toEqual(resultStylish);
});

test('type plain work', () => {
  expect(gendiff(yml3, yml4, 'plain')).toEqual(resultPlain);
});
