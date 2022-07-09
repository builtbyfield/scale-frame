import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    dts: true,
    clean: !options.watch,
    treeshake: !options.watch,
    minify: !options.watch,
  };
});
