import Vue from 'vue';

Vue.filter('numberConverter', (num: number) => {
  if (typeof num === 'number') {
    switch (true) {
      case num > 999 && num < 1000000:
        return `${(num / 1000)}k`;
      case num > 1000000 && num < 1000000000:
        return `${(num / 1000000)}M`;
      case num > 1000000000:
        return `${(num / 1000000000)}B`;
      default:
        return num;
    }
  }
  return '';
});

Vue.filter('price', (num: number|string) => {
  if (
    typeof num === 'number'
      || !Number.isNaN(Number(num))
  ) {
    return Number(num).toLocaleString('en');
  }
  if (typeof num === 'string') {
    if (num.includes('+')) {
      return num.split('+')
        .filter((el) => el && el !== '')
        .reduce((acc, cur) => `${Number(cur).toLocaleString('en')}${acc}`, '+');
    }
  }
  return '';
});
