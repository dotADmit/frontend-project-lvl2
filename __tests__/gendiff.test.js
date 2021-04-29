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

const result2 = `{
  common: {
    + follow: false
      setting1: Value 1
    - setting2: 200
    - setting3: true
    + setting3: null
    + setting4: blah blah
    + setting5: {
          key5: value5
      }
      setting6: {
          doge: {
            - wow: 
            + wow: so much
          }
          key: value
        + ops: vops
      }
  }
  group1: {
    - baz: bas
    + baz: bars
      foo: bar
    - nest: {
          key: value
      }
    + nest: str
  }
- group2: {
      abc: 12345
      deep: {
          id: 45
      }
  }
+ group3: {
      deep: {
          id: {
              number: 45
          }
      }
      fee: 100500
  }
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

test('recursive work json', () => {
  const json1 = getFixturePath('file3.json');
  const json2 = getFixturePath('file4.json');
  expect(diff(json1, json2)).toEqual(result2);
});
