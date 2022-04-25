const addZero = (num) => {
  if (num < 10) {
    num = +`0${num}`;
  }
  return num;
};

const invertHex = (hex) => {
  if (hex[0] === "#") {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  let r = addZero((255 - parseInt(hex.slice(0, 2), 16)).toString(16));
  let g = addZero((255 - parseInt(hex.slice(2, 4), 16)).toString(16));
  let b = addZero((255 - parseInt(hex.slice(4, 6), 16)).toString(16));

  console.log(`#${r}${g}${b}`);
  return `#${r}${g}${b}`;
};

export { invertHex };
