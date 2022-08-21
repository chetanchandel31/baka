import { exec, ExecException, ProcessEnvOptions } from "child_process";
import path from "path";
import { Arguments } from "yargs";

/** promisified exec */
type ExecCallback = (
  error: ExecException | null,
  stdout: string,
  stderr: string
) => void;

type PromisifiedExecArgs = {
  cmd: string;
  options?: ProcessEnvOptions;
  cb: ExecCallback;
};

const promisifiedExec = ({ cb, cmd, options }: PromisifiedExecArgs) =>
  new Promise((resolve) =>
    exec(cmd, { ...options }, (error, stdout, stderr) => {
      cb(error, stdout, stderr);
      resolve(null);
    })
  );
/** promisified exec */

export const command: string = "ques";
export const desc: string = "open ques in vscode";

export const handler = async (argv: Arguments) => {
  if (typeof process.env.PATH_TO_QUES !== "string") {
    return console.log("please first setup a path for `ques` directory");
  }

  process.stdout.write("opening ques dir ⏳\n");

  // w/o promisifying, we'd reach end of program and run `process.exit(0)` before exec gets to execute the command
  // so we just suspend further execution by promisifying it

  await promisifiedExec({
    cmd: "code .",
    cb: (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      if (stdout) console.log(`stdout: ${stdout}`);
    },
    options: { cwd: path.join(process.env.PATH_TO_QUES) },
  });

  process.stdout.write("done 🎉");
  process.exit(0);
};
