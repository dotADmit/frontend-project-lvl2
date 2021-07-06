import parser from './parsers.js';
import buildAST from './buildAST.js';
import formatter from './formatters/index.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parser(filepath1);
  const obj2 = parser(filepath2);

  const diff = buildAST(obj1, obj2);

  return formatter(diff, format);
};