export type Breakpoints = Record<string, number>;

export const getCurrentBreakpoint = (bps: Breakpoints, w: number): string => {
  let curBp = "";
  let max = -1;

  Object.keys(bps).forEach((key: string) => {
    const val = bps[key];

    if (w >= val && val > max) {
      curBp = key;
      max = val;
    }
  });

  return curBp;
};
