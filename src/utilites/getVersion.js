import path from 'path';
import { fileURLToPath } from 'url';
import parse from '../parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).slice(0, -12);

export default () => {
  const settingsPath = path.join(__dirname, './package.json');
  const settings = parse(settingsPath, 'utf8');
  return settings.version;
};
