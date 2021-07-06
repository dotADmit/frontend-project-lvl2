#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import gendiff from '../src/index.js';

const program = new Command();

program
  .addHelpText('beforeAll', ' ')
  .version('1.0.0', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    if (options.format === 'stylish') {
      console.log(gendiff(filepath1, filepath2));
    }
  });

program.parse(process.argv);
