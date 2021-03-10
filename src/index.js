module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0) {return false;}

  let array = str.split("");
  
  for (let i = 0; i < array.length; i++) {
    for (let index in bracketsConfig) {
      if (array[i] == bracketsConfig[index][0] && array[i + 1] == bracketsConfig[index][1]) {
        array.splice(i, 2);
        i = -1;
      }
    }
  }

  if (array.length == 0) {return true;}
  return false;
}
