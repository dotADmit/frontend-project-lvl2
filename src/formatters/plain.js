import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) return '[complex value]';

  return _.isString(value) ? `'${value}'` : value;
};

const render = (ast, prop = '') => {
  const diff = ast.map((item) => {
    const {
      key, type, value, children, oldValue, newValue,
    } = item;
    const nestedProp = `${prop}${key}.`;

    switch (type) {
      case 'unchanged':
        return '';
      case 'removed':
        return `Property '${prop}${key}' was removed\n`;
      case 'added':
        return `Property '${prop}${key}' was added with value: ${stringify(value)}\n`;
      case 'changed':
        return `Property '${prop}${key}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}\n`;
      case 'nested':
        return render(children, nestedProp);
      default:
        throw new Error(`Unknown type: ${type}`);
    }
  });

  return diff.join('');
};

export default (ast) => render(ast).trim();
