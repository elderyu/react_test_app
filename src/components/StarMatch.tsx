import React from 'react';
import StarDisplay from './StarDisplay';
import ButtonDisplay from './ButtonDisplay';

const StarMatch = () => {
  const size = 9;

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          {utils.range(1, size).map((id) => (
            <StarDisplay key={id}></StarDisplay>
          ))}
        </div>
        <div className="right">
          {utils.range(1, size).map((id) => (
            <ButtonDisplay key={id} number={id}></ButtonDisplay>
          ))}
        </div>
      </div>
      <div className="timer">Time Remaining: 10</div>
    </div>
  );
};

// // Color Theme
// const colors = {
// available: 'lightgray',
// used: 'lightgreen',
// wrong: 'lightcoral',
// candidate: 'deepskyblue',
// };

// Math science
const utils = {
  // Sum an array
  sum: (arr: any[]) => arr.reduce((acc: any, curr: any) => acc + curr, 0),

  // create an array of numbers between min and max (edges included)
  range: (min: number, max: number) =>
    Array.from({ length: max - min + 1 }, (_, i) => min + i),

  // pick a random number between min and max (edges included)
  random: (min: number, max: number) =>
    min + Math.floor(Math.random() * (max - min + 1)),

  // Given an array of numbers and a max...
  // Pick a random sum (< max) from the set of all available sums in arr
  randomSumIn: (arr: string | any[], max: number) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sums.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

export default StarMatch;
