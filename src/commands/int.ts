import path from "path";
import { Arguments } from "yargs";
import { config } from "../config/app-config";
import { promisifiedExec } from "../utils/promisifiedExec";

export const command: string = "int";
export const desc: string = "open ques in vscode along with recorder";

export const handler = async (argv: Arguments) => {
  if (typeof config.PATH_TO_QUES !== "string") {
    return console.log("please first setup a path for `ques` directory");
  }
  if (typeof config.PATH_TO_RECORDER !== "string") {
    return console.log("please first setup a path for `recorder`");
  }

  process.stdout.write("opening ques dir ");

  // w/o promisifying, we'd reach end of program and run `process.exit(0)` before exec gets to execute the command
  // so we just suspend further execution by promisifying it

  await promisifiedExec({
    cmd: "code .",
    options: { cwd: path.join(config.PATH_TO_QUES) },
  });
  process.stdout.write("✅\n");

  process.stdout.write("opening recorder ");
  await promisifiedExec({
    cmd: `start ${config.PATH_TO_RECORDER}`,
  });
  process.stdout.write("✅\n");

  process.stdout.write("done 🎉");
  process.exit(0);
};
