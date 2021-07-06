import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish, plain,
};

export default (data, formatter) => formatters[formatter](data);
