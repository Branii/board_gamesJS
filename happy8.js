

function Happy8WinOrLose(drawNumber) { // drawNumber is an array of 20 numbers
  
    //helper functions
    function ArraySum(array) { // array sum function
      return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    function arrayIntersection(array1, array2) { // array intersection function
        return array1.filter(value => array2.includes(value));
    }
  
    let qualified = []
  
    //Big
    ArraySum(drawNumber) > 810 ? qualified.push('Big') : null

    //Small
    ArraySum(drawNumber) < 810 ? qualified.push('Small') : null

    //superior | lower check
    let superNum = []
    let duperNum = []
    
    drawNumber.forEach(num => {
      const parsedNum = parseInt(num, 10);
      if (parsedNum >= 1 && parsedNum <= 40) {
        superNum.push(parsedNum);
      }else{
        duperNum.push(parsedNum);
      }
    });
    superNum.length > duperNum.length ? qualified.push('Superior') : null
    superNum.length < duperNum.length ? qualified.push('Lower') : null
    superNum.length === duperNum.length ? qualified.push('Middle') : null

    //Odd | Even | Tie
    const oddNumbers = drawNumber.filter(num => parseInt(num) % 2 !== 0);
    const evenNumbers = drawNumber.filter(num => parseInt(num) % 2 === 0);
    oddNumbers.length > evenNumbers.length ? qualified.push('Odd') : null
    oddNumbers.length < evenNumbers.length ? qualified.push('Even') : null
    oddNumbers.length === evenNumbers.length ? qualified.push('Tie') : null

    //to be completed on monday

    return qualified.length === 0 ? 'No Win' : qualified;
  
  }
  
