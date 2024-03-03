
function fast3WinOrLose(drawNumber) {
  
  //helper functions

  function sumArray(array) { // array sum function
    return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  function generateNumbers(start, end, type) { // type => odd, even, range
    const nums = Array.from({ length: end - start + 1 }, (_, i) => i + start);
    if (type === 'odd') return nums.filter(num => num % 2 !== 0);
    if (type === 'even') return nums.filter(num => num % 2 === 0);
    return nums;
  }

  function arrayIntersection(array1, array2) { // array intersection function
    return array1.filter(value => array2.includes(value));
  }

  let qualified = []

  //big,small
  generateNumbers(11, 17, 'range').includes(sumArray(drawNumber)) ? qualified.push('Big') : null;
  generateNumbers(4, 10, 'range').includes(sumArray(drawNumber)) ? qualified.push('Small') : null;

  //odd,even
  generateNumbers(5, 17, 'odd').includes(sumArray(drawNumber)) ? qualified.push('Odd') : null;
  generateNumbers(4, 16, 'even').includes(sumArray(drawNumber)) ? qualified.push('Even') : null;

  //double dice number
  const data1 = [[1,1],[2,2],[3,3]]
  data1.forEach((value, index) => {
    arrayIntersection(value, drawNumber).length === 2 ? qualified.push(value.join(',')) : null;
  });
 
  const data2 = [[4,4],[5,5],[6,6]]
  data2.forEach((value, index) => {
    arrayIntersection(value, drawNumber).length === 2 ? qualified.push(value.join(',')) : null;
  });

  //triple dice number
  const data3 = [[1,1,1],[2,2,2],[3,3,3],[4,4,4],[5,5,5],[6,6,6]]
  data3.forEach((value, index) => {
    arrayIntersection(value, drawNumber).length === 3 ? qualified.push(value.join(',')) : null;
  });

  //any triple
  const data4 = [['1,1,1'],['2,2,2'],['3,3,3'],['4,4,4'],['5,5,5'],['6,6,6']]
  data4.some(arr => arr.includes(drawNumber.join(','))) ? qualified.push('combo') : null;

  // 4-17
  generateNumbers(4, 17, 'range').includes(sumArray(drawNumber)) ? qualified.push(sumArray(drawNumber)) : null;

  // any two
  const data5 = [[1,2],[1,3],[1,4],[1,5],[1,6],[2,3],[2,4],[2,5],[2,6],[3,4],[3,5],[3,6],[4,5],[4,6],[5,6]]
  data5.forEach((value, index) => {
    arrayIntersection(value, drawNumber).length === 2 ? qualified.push(value.join(',')) : null;
  });

  // any one
  const data6 = [[1],[2],[3],[4],[5],[6]]
  data6.forEach((value, index) => {
    arrayIntersection(value, drawNumber).length === 1 ? qualified.push(value.join(',')) : null;
  });

  return qualified.length === 0 ? 'No Win' : qualified;

}

console.log(fast3WinOrLose([6,6,6]));