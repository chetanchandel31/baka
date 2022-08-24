import { exec, ExecException, ProcessEnvOptions } from "child_process";

type ExecCallback = (
  error: ExecException | null,
  stdout: string,
  stderr: string
) => void;

type PromisifiedExecArgs = {
  cmd: string;
  options?: ProcessEnvOptions;
  cb?: ExecCallback;
};

const defaultExecCallback: ExecCallback = (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  if (stdout) console.log(`stdout: ${stdout}`);
};

// w/o promisifying, we'd reach end of program and run `process.exit(0)` before exec gets to execute the command
// so we just suspend further execution by promisifying and `await`ing it
export const promisifiedExec = ({
  cb = defaultExecCallback,
  cmd,
  options,
}: PromisifiedExecArgs) =>
  new Promise((resolve) =>
    exec(cmd, { ...options }, (error, stdout, stderr) => {
      cb(error, stdout, stderr);
      resolve(null);
    })
  );
