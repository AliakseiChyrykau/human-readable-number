module.exports = function toReadable(number) {
  const numbers = String(Math.abs(number)).split('').reverse().join('');
  let numberText = '';
  for (let i = 0; i < numbers.length; i += 1) {
    if (i === 0) {
      switch (numbers[i]) {
        case '0':
          numberText = 'zero';
          break;
        case '1':
          numberText = 'one';
          break;
        case '2':
          numberText = 'two';
          break;
        case '3':
          numberText = 'three';
          break;
        case '4':
          numberText = 'four';
          break;
        case '5':
          numberText = 'five';
          break;
        case '6':
          numberText = 'six';
          break;
        case '7':
          numberText = 'seven';
          break;
        case '8':
          numberText = 'eight';
          break;
        case '9':
          numberText = 'nine';
          break;
        default:
      }
    }

    if (i === 1 && numbers[1] === '1') {
      switch (numbers[0]) {
        case '0':
          numberText = 'ten';
          break;
        case '1':
          numberText = 'eleven';
          break;
        case '2':
          numberText = 'twelve';
          break;
        case '3':
          numberText = 'thirteen';
          break;
        case '4':
          numberText = 'fourteen';
          break;
        case '5':
          numberText = 'fifteen';
          break;
        case '6':
          numberText = 'sixteen';
          break;
        case '7':
          numberText = 'seventeen';
          break;
        case '8':
          numberText = 'eighteen';
          break;
        case '9':
          numberText = 'nineteen';
          break;
        default:
      }
    }
    if (i === 1) {
      if (numbers[0] === '0' && numberText !== 'ten') numberText = '';
      switch (numbers[i]) {
        case '2':
          numberText = `twenty ${numberText}`;
          break;
        case '3':
          numberText = `thirty ${numberText}`;
          break;
        case '4':
          numberText = `forty ${numberText}`;
          break;
        case '5':
          numberText = `fifty ${numberText}`;
          break;
        case '6':
          numberText = `sixty ${numberText}`;
          break;
        case '7':
          numberText = `seventy ${numberText}`;
          break;
        case '8':
          numberText = `eighty ${numberText}`;
          break;
        case '9':
          numberText = `ninety ${numberText}`;
          break;
        default:
      }
    }

    if (i === 2) {
      if (numbers[0] === '0' && numbers[1] === '0') numberText = '';
      switch (numbers[i]) {
        case '1':
          numberText = `one hundred ${numberText}`;
          break;
        case '2':
          numberText = `two hundred ${numberText}`;
          break;
        case '3':
          numberText = `three hundred ${numberText}`;
          break;
        case '4':
          numberText = `four hundred ${numberText}`;
          break;
        case '5':
          numberText = `five hundred ${numberText}`;
          break;
        case '6':
          numberText = `six hundred ${numberText}`;
          break;
        case '7':
          numberText = `seven hundred ${numberText}`;
          break;
        case '8':
          numberText = `eight hundred ${numberText}`;
          break;
        case '9':
          numberText = `nine hundred ${numberText}`;
          break;
        default:
      }
    }
  }

  return numberText.trim();
};
