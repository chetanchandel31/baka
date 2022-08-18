#!/usr/bin/env node

import yargs from "yargs";

// `process.argv` is array of command line arguments
// 1st arg is path to executable and 2nd arg is path to actual js file

yargs(process.argv.slice(2))
  // Use the commands directory to scaffold.
  .commandDir("commands")
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({ h: "help" }).argv;
