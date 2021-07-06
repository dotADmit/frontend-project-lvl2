import { fileURLToPath } from 'url';
import path from 'path';
import gendiff from '../src/index.js';

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

const result3 = `Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('common work json', () => {
  const json1 = getFixturePath('file1.json');
  const json2 = getFixturePath('file2.json');
  expect(gendiff(json1, json2)).toEqual(result);
});

test('common work yml', () => {
  const yml1 = getFixturePath('file1.yaml');
  const yml2 = getFixturePath('file2.yml');
  expect(gendiff(yml1, yml2)).toEqual(result);
});

test('recursive work json', () => {
  const json1 = getFixturePath('file3.json');
  const json2 = getFixturePath('file4.json');
  expect(gendiff(json1, json2)).toEqual(result2);
});

test('recursive work yml', () => {
  const json1 = getFixturePath('file3.yaml');
  const json2 = getFixturePath('file4.yml');
  expect(gendiff(json1, json2)).toEqual(result2);
});

test('type plain work', () => {
  const json1 = getFixturePath('file1.yaml');
  const json2 = getFixturePath('file2.yml');
  expect(gendiff(json1, json2, 'plain')).toEqual(result3);
});
