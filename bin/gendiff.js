#!/usr/bin/env node

import { Command } from 'commander/esm.mjs';
// import packageConfig from '../package.json';

const program = new Command();

program
  .addHelpText('beforeAll', ' ')
  .version('1.0.0', '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format');

// program.sortSubcommands();
// program
//   .version('0.1.0')
//   .arguments('<username> [password]')
//   .description('test command', {
//     username: 'user to login',
//     password: 'password for user, if required'
//   })
//   .action((username, password) => {
//     console.log('username:', username);
//     console.log('environment:', password || 'no password given');
//   });

program.parse(process.argv);

// const options = program.opts();
// if (options.version) console.log(5);
