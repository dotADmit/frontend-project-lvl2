import { readFileSync } from 'fs';
import _ from 'lodash';
import path from 'path';
import yaml from 'js-yaml';

const parsers = {
  '.json': JSON.parse,
  '.yml': yaml.load,
  '.yaml': yaml.load,
};

export default (filepath) => {
  const content = readFileSync(filepath, 'utf8');
  const format = path.extname(filepath);

  if (!_.has(parsers, format)) {
    throw new Error(`Unknown format: ${format}.`);
  }

  return parsers[format](content);
};
