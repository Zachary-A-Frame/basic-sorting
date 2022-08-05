function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    // While both iterables are less than the length of the array, then move on to next section
    while (i < arr1.length && j < arr2.length) {
        // If arr2[j] > arr1[i]
        if (arr2[j] > arr1[i]) {
            // Push smaller value to array and increase i by one.
            results.push(arr1[i]);
            i++;
        } else {
            // If arr2[j] was the smaller vlaue, push that to results instead. Increase j by one to continue iterations.
            results.push(arr2[j]);
            j++;
        }
    }
    // While i is less than arr1.length, push arr[i] values to to our results
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    // While j is less than arr2.length, keep pushing arr2[j] vals to our results array.
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

function mergeSort(arr) {
    // if our array length is less than or equal to one, perform no functions, just return the array as is. It is merged and sorted.
    if (arr.length <= 1) return arr;
    // Set our mid value to the rounded down length of our array divided by two.
    const mid = Math.floor(arr.length / 2);
    // Our left value will slice anything from the 0th index to the middle val
    const left = mergeSort(arr.slice(0, mid));
    // Our right value will slice anything from our middle val to end of our array
    const right = mergeSort(arr.slice(mid));
    // Pass in our two values, left and right, and pass them in as our arrays to merge.
    return merge(left, right);
}

module.exports = { merge, mergeSort};