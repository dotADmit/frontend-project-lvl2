import { readFileSync } from 'fs';
import path from 'path';

export default (filepath) => {
  const temp = readFileSync(filepath, 'utf8');
  const extname = path.extname(filepath);
  console.log(extname);
  return JSON.parse(temp);
};
