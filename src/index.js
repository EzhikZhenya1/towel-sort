module.exports = function towelSort (matrix) {
  let array = [];
  if (typeof matrix =='object'){
    for (let i = 0; i < matrix.length; ++i){
      let currentArray = matrix[i];
      if ( (i + 2) % 2 === 0) {
        for (let j = 0; j < currentArray.length; ++j){
          array.push(currentArray[j]);
        }
      } else {
        for (let j = (currentArray.length - 1); j >= 0; --j) {
          array.push(currentArray[j]);
        }
      }
    }
  }
  return array;
}
