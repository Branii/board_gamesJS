

function mar6WinOrLose(drawNumber) { // drawNumber is an array of 1 number from 1 to 6 [1]
  
    //helper functions
    function ArraySum(array) { // array sum function
      return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    function arrayIntersection(array1, array2) { // array intersection function
        return array1.filter(value => array2.includes(value));
    }

    function generateNumbers(start, end, type) { // type => odd, even, range
        const nums = Array.from({ length: end - start + 1 }, (_, i) => i + start);
        if (type === 'odd') return nums.filter(num => num % 2 !== 0);
        if (type === 'even') return nums.filter(num => num % 2 === 0);
        return nums;
      }
  
    let qualified = []
  
    //Extra Large
    drawNumber >= 25 ? qualified.push('Extra Large') : null;

    //Extra Small
    drawNumber <= 24 ? qualified.push('Extra Small') : null;

    //Special Odd
    drawNumber % 2 !== 0 ? qualified.push('Special Odd') : null;

    //Special Even
    drawNumber % 2 === 0 ? qualified.push('Special Even') : null;

    //Redwave, Bluewave, Greenwave
    const waves = {
        Redwave : ['01', '02', '07', '08', '12', '13', '18', '19', '23', '24', '29', '30', '34', '35', '40', '45', '46'],
        Bluewave : ['03', '04', '09', '10', '14', '15', '20', '25', '26', '31', '36', '37', '41', '42', '47', '48'],
        Greenwave : ['05', '06', '11', '16', '17', '21', '22', '27', '28', '32', '33', '38', '39', '43', '44', '49']
    }
    for(const wave in waves) {
        waves[wave].includes(drawNumber[0]) ? qualified.push(wave) : null;
    }

    //Any one
    generateNumbers(1, 49, 'range').includes(parseInt(drawNumber[0], 10)) ? qualified.push(drawNumber[0]) : null;
    
    return qualified.length === 0 ? 'No Win' : qualified;
  
  }

  console.log(mar6WinOrLose(['01']))
  
