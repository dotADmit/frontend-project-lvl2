import { readFileSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parsers = {
  '.json': (data) => JSON.parse(data),
  '.yml': (data) => yaml.load(data),
  '.yaml': (data) => yaml.load(data),
};

export default (filepath) => {
  const content = readFileSync(filepath, 'utf8');
  const format = path.extname(filepath);

  return parsers[format](content);
};
