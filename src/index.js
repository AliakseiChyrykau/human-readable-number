module.exports = function toReadable (number) {
    let numbers = String(number).split("");
    let numberText = "";
    for (let i = 0; i < numbers.length; i++) {
        if (i === 0) {
            switch (numbers[i]) {
                case '0':
                    numberText = numberText + 'zero';
                    break;
                case '1':
                    numberText = numberText + 'one';
                    break;
                case '2':
                    numberText = numberText + 'two';
                    break;
                case '3':
                    numberText = numberText + 'three';
                    break;
                case '4':
                    numberText = numberText + 'four';
                    break;
                case '5':
                    numberText = numberText + 'five';
                    break;
                case '6':
                    numberText = numberText + 'six';
                    break;
                case '7':
                    numberText = numberText + 'seven';
                    break;
                case '8':
                    numberText = numberText + 'eight';
                    break;
                case '9':
                    numberText = numberText + 'nine';
                    break;
            }
        }

        if (i === 1) {
            switch (numbers[i]) {
                case '0':
                    numberText = 'zero' + numberText;
                    break;
                case '1':
                    numberText = numberText + 'one'
                    break;
                case '2':
                    numberText = numberText + 'two'
                    break;
                case '3':
                    numberText = numberText + 'three'
                    break;
                case '4':
                    numberText = numberText + 'four'
                    break;
                case '5':
                    numberText = numberText + 'five'
                    break;
                case '6':
                    numberText = numberText + 'six'
                    break;
                case '7':
                    numberText = numberText + 'seven'
                    break;
                case '8':
                    numberText = numberText + 'eight'
                    break;
                case '9':
                    numberText = numberText + 'nine'
                    break;
            }
        }
        
    }

    return numberText;
}
