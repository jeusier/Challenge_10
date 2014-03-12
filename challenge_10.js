// do work here
//export challenge 10
exports.SummationOfPrimes = SummationOfPrimes;

//Class object to find the sum of primes
function SummationOfPrimes(limit) {

    //storing parameter into variable to be used in instance methods
    this.limit = limit;

    //instance method to find the sum of all primes up to the max value limit
    this.findSumOfPrimes = function () {
        //flag to set true if number is prime
        var isPrime = false;
        //stores the sum of primes
        var primeSum = 2;
        var counter = 3;

        //loop through all the numbers until the max value limit
        while (counter < this.limit) {
            //if prime, set flag to true, else break out
            for (var j = 2; j < counter; j++) {
                if (counter%j !== 0) {
                    isPrime = true;
                } else {
                    isPrime = false;
                    break;
                }
            }
            //if flag was set to true, add prime to primeSum
            if (isPrime) {
                primeSum += counter;
            }
            counter += 2; 

        }
        
        return primeSum;
    }

}