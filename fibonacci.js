// Function to generate Fibonacci sequence up to a given number of terms
function fibonacciSequence(numTerms) {
    let sequence = [0, 1];
    
    for (let i = 2; i < numTerms; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    
    return sequence;
}

// Example usage:
const numTerms = 10;
console.log(`Fibonacci sequence up to ${numTerms} terms:`);
console.log(fibonacciSequence(numTerms));
