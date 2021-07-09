import parse from './parsers.js';
import buildAST from './buildAST.js';
import formatter from './formatters/index.js';

export default (filepath1, filepath2, format = 'stylish') => {
  const config1 = parse(filepath1);
  const config2 = parse(filepath2);

  const diff = buildAST(config1, config2);

  return formatter(diff, format);
};
