import { fileURLToPath } from 'url';
import path from 'path';
import diff from '../src/index.js';

const result = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('common work json', () => {
  const json1 = getFixturePath('file1.json');
  const json2 = getFixturePath('file2.json');
  expect(diff(json1, json2)).toEqual(result);
});

test('common work yml', () => {
  const yml1 = getFixturePath('file1.yaml');
  const yml2 = getFixturePath('file2.yml');
  expect(diff(yml1, yml2)).toEqual(result);
});
