#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import gendiff from '../src/index.js';
import getVersion from '../src/utilites/getVersion.js';

const program = new Command();

program
  .addHelpText('beforeAll', ' ')
  .version(`'${getVersion()}'`, '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    console.log(gendiff(filepath1, filepath2, options.format));
  });

program.parse(process.argv);
