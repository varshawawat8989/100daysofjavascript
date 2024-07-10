// Function to check if a string is palindrome
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// Example usage:
const word = 'Madam';
console.log(`Is "${word}" a palindrome? ${isPalindrome(word)}`);
