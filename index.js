// Code your solution here
const matchName = (array, string) => {
  return array.filter((e) => e.name === string);
};
const findMatching = (array, string) => {
  return array.filter((e) => e.toLowerCase() === string.toLowerCase());
};

const fuzzyMatch = (array, string) => {
  return array.filter((e) => e.slice(0, string.length) === string);
};
