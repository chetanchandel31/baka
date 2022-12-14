import path from "path";
import { Arguments } from "yargs";
import { config } from "../config/app-config";
import { promisifiedExec } from "../utils/promisifiedExec";

export const command: string = "ques";
export const desc: string = "open ques in vscode";

export const handler = async (argv: Arguments) => {
  if (typeof config.PATH_TO_QUES !== "string") {
    return console.log("please first setup a path for `ques` directory");
  }

  process.stdout.write("opening ques dir ⏳\n");

  // w/o promisifying, we'd reach end of program and run `process.exit(0)` before exec gets to execute the command
  // so we just suspend further execution by promisifying it

  await promisifiedExec({
    cmd: "code .",
    options: { cwd: path.join(config.PATH_TO_QUES) },
  });

  process.stdout.write("done 🎉");
  process.exit(0);
};
