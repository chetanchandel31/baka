import { Arguments, CommandBuilder } from "yargs";
import getRandomNumbers from "../utils/getRandomNumbers";

type Options = {
  rangeUpperLimit: number | undefined;
};

export const command: string = "rndm [rangeUpperLimit]";
export const desc: string =
  "use <rangeUpperLimit> as max limit in range from which random numbers are taken";

export const builder: CommandBuilder<Options, Options> = (yargs) =>
  yargs.positional("rangeUpperLimit", { type: "number" });

export const handler = (argv: Arguments<Options>): void => {
  const { rangeUpperLimit } = argv;

  getRandomNumbers({ upperLimit: rangeUpperLimit });

  process.exit(0);
};
