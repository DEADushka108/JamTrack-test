const num1 = 1122333444455;
const num2 = 1122332233444;

/**
 * 
 * @param {Number} num phone number
 * @returns {String} add dashes to phone number before an after of odd's group digits 
 */
const addDashes = (num) => {
  return num.toString().replace(/[13579]{1,}/g, num => `-${num}-`).replace(/(^-)|(-$)/g, '');
};

console.log(addDashes(num1), addDashes(num2));

const search = 'lira@11123@@#';
const arr = ['light', 'lime', 'slime', 'ball', 'litr', 'libra', 'limon', 'licosa'];
const arr2 = ['fire', 'tower', 'roller', 'power', 'grow'];

/**
 * 
 * @param {string} str search word
 * 
 * @returns {Array} array for create regexp searching model 
 */
const createRegexp = (str) => {
  const regexp = [];
  Array.from(str.toLowerCase().replace(/[^a-z]/g, ``)).forEach(letter => regexp.push(`[${letter}]`));
  return regexp;
}

/**
 * 
 * @param {String} str search word 
 * @param {Array} array of library word
 * 
 * @returns {Array} new array of similar word
 */
const autocomplete = (str, array) => {
  let regexp = createRegexp(str);
  let newArr = [];
  while (newArr.length === 0) {
    let reg = new RegExp(`^${regexp.join(``)}`, 'g');
    array.forEach((word) => {
      if (word.match(reg)) {
        newArr.push(word);
      }
    })
    regexp.pop();
    if (regexp.length === 0) {
      break;
    }
  }
  return newArr.slice(0, 5);
}

console.log(autocomplete(search, arr));
console.log(autocomplete(search, arr2));
