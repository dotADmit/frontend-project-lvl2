import stringify from '../utilites/stringify.js';

const render = (ast) => {
  const iter = (node, space = 2) => {
    const indent = ' '.repeat(space);
    const indentBraces = ' '.repeat(space + 2);
    const {
      key, type, value, children, oldValue, newValue,
    } = node;

    switch (type) {
      case 'nested':
        return `\n${indentBraces}${key}: {${children.map((child) => iter(child, space + 4)).join('')}\n${indentBraces}}`;
      case 'unchanged':
        return `\n${indentBraces}${key}: ${stringify(value, space)}`;
      case 'changed':
        return `\n${indent}- ${key}: ${stringify(oldValue, space)}\n${indent}+ ${key}: ${stringify(newValue, space)}`;
      case 'added':
        return `\n${indent}+ ${key}: ${stringify(value, space)}`;
      case 'removed':
        return `\n${indent}- ${key}: ${stringify(value, space)}`;
      default:
        throw new Error(`unexpected type ${type}`);
    }
  };
  return iter(ast);
};

export default (ast) => {
  const lines = ast.map(render);
  return `{${lines.join('')}\n}`;
};
