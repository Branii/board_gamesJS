

function pk10WinOrLose(drawNumber) { // drawNumber is an array of 10 numbers from 1 to 10 ['01'...'10']
  
    //helper functions
    function ArraySum(array) { // array sum function
      return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    function arrayIntersection(array1, array2) { // array intersection function
        return array1.filter(value => array2.includes(value));
    }
  
    let qualified = []
  
    //before, after
    ArraySum(drawNumber.slice(5)) > ArraySum(drawNumber.slice(-5)) ? qualified.push('Before') : qualified.push('After')

    // Guess the number
    const data1 = ['01','02','03','04','05','06','07','08','09','10']
    data1.includes(drawNumber[0]) ? qualified.push(drawNumber[0]) : null

    //max number in the first five numbers position
    const maxNumber = Math.max(...drawNumber.slice(0,5).map(Number))
    const maxPosition = drawNumber.slice(0,5).map(Number).indexOf(maxNumber) + 1
    const maxselection = {1: 'Champ',2: 'Runner',3: 'Third',4: 'Fourth',5: 'Fifth'}
    const Maxnum = maxNumber.toString().split("")[0].padStart(2, '0')
    arrayIntersection(drawNumber.slice(0,5),Maxnum).length < 2 ? qualified.push(maxselection[maxPosition]) : null

    //min number in the last five numbers position
    const minNumber = Math.min(...drawNumber.slice(-5).map(Number));
    const minPosition = drawNumber.slice(-5).map(Number).indexOf(minNumber);
    const minselection = {1: 'Sixth',2: 'Seventh',3: 'Eight',4: 'Ninth',5: 'Tenth'};
    const Minnum = minNumber.toString().split("")[0].padStart(2, '0')
    arrayIntersection(drawNumber.slice(-5),Minnum).length < 2 ? qualified.push(minselection[minPosition + 1]) : null

    // Quick or slow
    drawNumber.slice(0,5).includes('01') ? qualified.push('Quick') : null;
    drawNumber.slice(-5).includes('01')  ? qualified.push('Slow') : null;

    return qualified.length === 0 ? 'No Win' : qualified;
  
  }
  
