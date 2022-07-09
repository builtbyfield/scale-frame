type Test = {
  name: string;
};

export const test = ({ name }: Test) => {
  if (!name) throw Error("name is not assigned");

  return name;
};
