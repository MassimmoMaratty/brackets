module.exports = function check(str, bracketsConfig) {
  let array = bracketsConfig.map(el => el.join(""));
  for (i = 0; i < array.length; ) {
    if (str.includes(array[i])) {
      str = str.replace(array[i], "");
      i = 0;
    } else {
      i++;
    }
  }
  return !str;
};
