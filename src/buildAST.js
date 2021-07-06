import _ from 'lodash';

const buildAST = (obj1, obj2) => {
  const uniqKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedUniqKeys = _.sortBy(uniqKeys);

  const ast = sortedUniqKeys.map((key) => {
    const [value1, value2] = [obj1[key], obj2[key]];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { type: 'nested', key, children: buildAST(value1, value2) };
    }
    if (!_.has(obj1, key)) return { type: 'added', key, value: value2 };
    if (!_.has(obj2, key)) return { type: 'removed', key, value: value1 };
    if (_.isEqual(value1, value2)) return { type: 'unchanged', key, value: value1 };

    return {
      type: 'changed',
      key,
      oldValue: value1,
      newValue: value2,
    };
  });

  return ast;
};

export default buildAST;
