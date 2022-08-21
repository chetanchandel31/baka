#!/usr/bin/env node

import yargs from "yargs";
import dotenv from "dotenv";

dotenv.config();

// `process.argv` is array of command line arguments
// 1st arg is path to executable and 2nd arg is path to actual js file

yargs(process.argv.slice(2))
  // Use the commands directory to scaffold.
  .commandDir("commands")
  // properly prefix commands with `baka` in --help menu
  .scriptName("baka")
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({ h: "help" }).argv;
