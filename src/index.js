import _ from 'lodash';

export default (path1, path2) => {
  const obj1 = JSON.parse(path1);
  const obj2 = JSON.parse(path2);

  const merged = _.merge({}, obj1, obj2);

  const props = Object.entries(merged).flatMap(([key, value]) => {
    const unchanged = `  ${key}: ${value}`;
    const changedInFirst = `- ${key}: ${obj1[key]}`;
    const changedInSecond = `+ ${key}: ${value}`;

    if (_.has(obj1, key) && _.has(obj2, key)) {
      return (value === obj1[key]) ? unchanged : [changedInFirst, changedInSecond];
    }
    return _.has(obj1, key) ? changedInFirst : changedInSecond;
  });

  props.sort((a, b) => {
    const keyA = a.slice(2, a.indexOf(':'));
    const keyB = b.slice(2, b.indexOf(':'));
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return a > b ? -1 : 1;
  });

  const propsToString = props.reduce((acc, prop) => `${acc}${prop}\n`, '');
  return `{\n${propsToString}}`;
};
