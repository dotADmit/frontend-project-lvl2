#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
const program = new Command();

program
  //.option('-h, --help', 'output usage information')
  .option('-V, --version', 'output the version number');

program.addHelpText('before', 
`
Compares two configuration files and shows a difference.`);


program.parse(process.argv);

// const options = program.opts();
// if (options.version) console.log(options);