let indexSelector = arr => {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

let colorSelected = input => {
  return input.color;
};

export { indexSelector, colorSelected };
