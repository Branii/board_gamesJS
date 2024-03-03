

function Happy8WinOrLose(drawNumber) { // drawNumber is an array of 20 numbers
  
    //helper functions
    function ArraySum(array) { // array sum function
      return array.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue), 0);
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

    //Gold | Wood | Water | Fire | Earth
    const data = {
        gold: generateNumbers(210, 695, 'range'),
        wood: generateNumbers(696, 763, 'range'),
        water: generateNumbers(764, 855, 'range'),
        fire: generateNumbers(856, 923, 'range'),
        earth: generateNumbers(924, 1410, 'range')
    }
    for (const element in data) {
      data[element].includes(ArraySum(drawNumber)) ? qualified.push(element) : null
    }

    return qualified.length === 0 ? 'No Win' : qualified;
  
  }

  console.log(Happy8WinOrLose(['1','02','03','33','45','06','77','08','80','10','11','94','13','50','15','66','17','88','76','20']))
 

  
