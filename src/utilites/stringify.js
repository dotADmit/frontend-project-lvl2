import _ from 'lodash';

const stringify = (data, space) => {
  if (!_.isPlainObject(data)) return data;

  const indent = ' '.repeat(space + 6);
  const indentBraces = ' '.repeat(space + 2);

  const res = Object.keys(data).map((name) => {
    const value = data[name];

    return typeof value === 'object'
      ? `${indent}${name}: ${stringify(value, space + 4)}\n`
      : `${indent}${name}: ${value}\n`;
  });

  return `{\n${res.join('')}${indentBraces}}`;
};

export default stringify;
