// В этом простом задании вам дается число, и вы должны сделать его 
// отрицательным. А может быть, число уже отрицательное?

export default function makeNegative(num) {
    if (num <= 0) {
      return num;
    } else {
      return num * -1;
    }
}

