const numberString = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
numberString[20] = 'twenty';
numberString[30] = 'thirty';
numberString[40] = 'forty';
numberString[50] = 'fifty';
numberString[60] = 'sixty';
numberString[70] = 'seventy';
numberString[80] = 'eighty';
numberString[90] = 'ninety';


module.exports = function toReadable(number) {
    let hundred = 0,dozens = 0, num = 0;
    let itog = '';

    if(number === 0) {
        itog = numberString[0];
    }

    if(number.toString().length === 3) {
        hundred = +number.toString()[0];
        dozens = +number.toString()[1];
        num = +number.toString()[2];
    }
    if(number.toString().length === 2) {
        dozens = +number.toString()[0];
        num = +number.toString()[1];
    }
    if(number.toString().length === 1) {
        num = +number.toString()[0];
    }

    if(hundred > 0) {
        itog = numberString[hundred] + ' hundred';
        if(dozens > 0 || num > 0) {
            itog += " ";
        }
    }

    if((number-hundred * 100) > 0 && numberString[number-hundred * 100] && (number-hundred * 100) < 20) {
        itog += numberString[dozens*10+num];
    } else {
        if(dozens > 0) {
            itog += numberString[dozens*10];
            if(num > 0) {
                itog += " ";
            }
        }
        if(num > 0) {
            itog += numberString[num];
        }
    }

    return itog;
}
