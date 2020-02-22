module.exports = function toReadable (number) {
  if (typeof number !== 'number') {
        throw error;
    }
    if ( number === 0) {
        return 'zero';
    }
    let count = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
        17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
        60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'hundred', 1000: 'thousand', 1000000: 'million'
    };

    let result = [];
    let a = Object.keys(count);

    let hundreds = Math.trunc(number/100);
    let dozens = Math.trunc(number/10)%10;
    let units = number%10;
    let rest = number%100;

    if (hundreds!== 0){
        result.push(count[hundreds] + ' hundred');
    }
    if (rest<=20){
        for (let el of a){
            if (rest === +el){
                result.push(count[el]);
                break;
            }
        }
    } else {
        for (let el of a){
            if (dozens*10 === +el){
                result.push(count[el]);
                break;
            }
        }
        for (let el of a){
            if (units === +el){
                result.push(count[el]);
                break;
            }
        }
    }

    return result.join(' ').trim();
};
