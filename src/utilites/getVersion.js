import parse from '../parsers.js';

export default () => {
  const settings = parse('./package.json', 'utf8');
  return settings.version;
};
