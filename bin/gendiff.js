#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
// import {version} from '../package.json';
// const version = process.env.npm_package_version;
const program = new Command();

program
  .option('-V, --version', 'output the version number');
program.addHelpText('after', `
Compares two configuration files and shows a difference.`);
// program.sortSubcommands();

program.parse(process.argv);

const options = program.opts();
if (options.version) console.log('111');

// console.log(version);
