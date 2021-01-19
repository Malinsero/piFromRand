const approxPi = require('./calcPi').approxPi
const util = require('util')

console.log(util.format('Actual value: Pi == %d', Number(Math.PI).toFixed(10)))
console.log('Estimating Pi with a pseudo-random set of points\n')
let testNums = [10000, 50000, 100000, 500000, 1000000, 5000000, 10000000, 50000000]

for (let i = 0; i < testNums.length; i++) {
    console.log(util.format('%d points: Pi ~ %d', testNums[i], Number(approxPi(testNums[i])).toFixed(10)))
}