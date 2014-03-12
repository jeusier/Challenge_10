// import challenge 10
var SummationOfPrimes = require("../challenge_10").SummationOfPrimes;

// describe the class SummationOfPrimes
describe("The sum of all primes", function () {

// write your tests here
    it("below 2,000,000 is", function () {
        var sum = new SummationOfPrimes(2000000);
        expect( sum.findSumOfPrimes() ).toEqual(142913828922);
    });
});