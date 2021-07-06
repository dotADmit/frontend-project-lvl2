import parser from './parsers.js';
import buildAST from './buildAST.js';
import stylish from './formatters/stylish.js';

export default (filepath1, filepath2, formatter = stylish) => {
  const obj1 = parser(filepath1);
  const obj2 = parser(filepath2);

  const diff = buildAST(obj1, obj2);

  const formattedDiff = formatter(diff);

  return formattedDiff;
};
