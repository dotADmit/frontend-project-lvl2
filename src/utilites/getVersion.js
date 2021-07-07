import parser from '../parsers.js';

export default () => {
  const settings = parser('./package.json', 'utf8');
  return settings.version;
};
