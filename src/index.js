import _ from 'lodash';

const a1 = {
  "host": "hexlet.io",
  "timeout": 50,
  "proxy": "123.234.53.22",
  "follow": false
};

const b1 = {
  "timeout": 20,
  "verbose": true,
  "host": "hexlet.io"
};

const diff = (obj1, obj2) => {
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

  const sortedProps = props.sort((a, b) => {
    const keyA = a.slice(2, a.indexOf(':'));
    const keyB = b.slice(2, b.indexOf(':'));
    if (keyA > keyB) return 1;
    if (keyA < keyB) return -1;
    return a > b ? -1 : 1;
  });
  const propsToString = sortedProps.reduce((acc, prop) => `${acc}${prop}\n`, '');

  return `{\n${propsToString}}`;
};

console.log(diff(a1, b1));
