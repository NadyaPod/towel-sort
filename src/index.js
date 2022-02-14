
function towelSort (matrix) {
  let result = [];
  if (matrix === undefined) {
    return [];
  }
  else {
    result = [].concat(...matrix.map((item, index) => (index % 2) ? item.reverse() : item));
    return result;
  }
}

module.exports = towelSort;

