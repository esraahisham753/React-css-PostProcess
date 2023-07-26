import * as path from "path";
import { join } from "path";

import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: path.resolve(__dirname, join("public", "bundle.js")),
  },
  plugins: [
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    commonjs(),
    postcss(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    resolve(),
  ],
};
