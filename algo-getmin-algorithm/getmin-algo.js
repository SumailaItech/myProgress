function getMin(numbers){
    if(numbers.length ===0){
        throw new Error('Array should not be emplty');
    }
    if(numbers.length ===1){
        return numbers[0];
    }
    let currMin = numbers[0];
    for(const num of numbers){
        if(num < currMin){
            currMin = num;
        }
    }

    return currMin;
}

const testnumbers = [3,1,2];

const min = getMin(testnumbers);
console.log(min);