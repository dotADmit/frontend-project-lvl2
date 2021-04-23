#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
import fs from 'fs';
import diff from '../src/index.js';

const program = new Command();

program
  .addHelpText('beforeAll', ' ')
  .version('1.0.0', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((path1, path2) => {
    const a = fs.readFileSync(path1, 'utf8');
    const b = fs.readFileSync(path2, 'utf8');

    console.log(diff(JSON.parse(a), JSON.parse(b)));
  });

program.parse(process.argv);
