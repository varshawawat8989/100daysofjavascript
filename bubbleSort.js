// Function to perform Bubble Sort on an array
function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(`Sorted array using Bubble Sort: ${bubbleSort(array)}`);
