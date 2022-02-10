module.exports = function toReadable (number) {
    const readableNumber = {
        '0-9': {
            '*': '*',
            '0': '',
            '1': 'one ',
            '2': 'two ',
            '3': 'three ',
            '4': 'four ',
            '5': 'five ',
            '6': 'six ',
            '7': 'seven ',
            '8': 'eight ',
            '9': 'nine ',
        },
        '10-19': {
            '10': 'ten ',
            '11': 'eleven ',
            '12': 'twelve ',
            '13': 'thirteen ',
            '14': 'fourteen ',
            '15': 'fifteen ',
            '16': 'sixteen ',
            '17': 'seventeen ',
            '18': 'eighteen ',
            '19': 'nineteen ',
        },
        '20-90': {
            '*': '*',
            '0': '',
            '2': 'twenty ',
            '3': 'thirty ',
            '4': 'forty ',
            '5': 'fifty ',
            '6': 'sixty ',
            '7': 'seventy ',
            '8': 'eighty ',
            '9': 'ninety ',
        },
    }
    let resultNumber = '';
    let strNumber = String(number);
    for (let i = strNumber.length; i <3 ; i++) {
        strNumber = '*' + strNumber
    }
    if (strNumber == '**0') {
        resultNumber = 'zero'
    } else if (strNumber[1] === '1') {
        resultNumber = `${readableNumber['0-9'][strNumber[0]]}${strNumber[0] == '*' ? '' : 'hundred '}${readableNumber['10-19'][strNumber.slice(-2)]}`
    } else {
        resultNumber = `${readableNumber['0-9'][strNumber[0]]}${strNumber[0] == '*' ? '' : 'hundred '}${readableNumber['20-90'][strNumber[1]]}${readableNumber['0-9'][strNumber[2]]}`
    }
    return resultNumber.split('*').join('').trim();   
}
