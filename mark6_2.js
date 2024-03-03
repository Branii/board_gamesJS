

function mar6WinOrLose(drawNumber) { // Bird God game
  
    //helper functions
    function generateNumbers(start, end, type) { // type => odd, even, range
        const nums = Array.from({ length: end - start + 1 }, (_, i) => i + start);
        if (type === 'odd') return nums.filter(num => num % 2 !== 0);
        if (type === 'even') return nums.filter(num => num % 2 === 0);
        return nums;
    }
  
    let qualified = []
  
    //East|West|North|South|Middle|Send|White
    const locations = {
        East : generateNumbers(1, 7, 'range'),
        West : generateNumbers(15, 21, 'range'),
        North : generateNumbers(22, 28, 'range'),
        South : generateNumbers(8, 14, 'range'),
        Middle : generateNumbers(29, 35, 'range'),
        Send : generateNumbers(36, 42, 'range'),
        White : generateNumbers(43, 49, 'range')
    }

    for (const location in locations) {
      locations[location].includes(parseInt(drawNumber[0], 10)) ? qualified.push(location) : null
    }
 
    return qualified.length === 0 ? 'No Win' : qualified;
  
  }

  console.log(mar6WinOrLose(['26']))
  
