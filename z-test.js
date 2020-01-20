const RatingOneLine = (maxRate, rate) => {
  maxRate = maxRate ? maxRate : 5;
  let value = rate.value;
  if (rate.maxValue != maxRate) {
    let checkSize =
      rate.maxValue > maxRate
        ? [rate.maxValue, maxRate]
        : [maxRate, rate.maxValue];
    value = value / (checkSize[0] / checkSize[1]);
  }
  console.log('value', value);
};

let maxRate = 10;
let rate = {value: 80, maxValue: 100};
RatingOneLine(maxRate, rate);

maxRate = 5;
rate = {value: 4, maxValue: 5};
RatingOneLine(maxRate, rate);
