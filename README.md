a simple nodejs CLI with some personal utils

---

how to setup:

1. clone the repo
1. install dependencies using `npm i`
1. setup `.env` file at root, use `.env.sample` as reference
1. `npm run dev` to run ts compiler in watch mode
1. `npm start` to test out any changes, can also pass cli arguments like `npm start greet alice`(flags don't work quite well though, for eg `npm start greet alice --upper` doesn't work, it'll ignore `--upper`. So need to go a bit verbose and use `node ./dist/cli.js greet alice --upper` to test out such commands)
1. once satisfied with changes, `npm run local` can install/update the nodejs script globally on system(atleast on windows)
