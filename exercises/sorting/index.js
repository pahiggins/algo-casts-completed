// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const smaller = arr[j + 1];
                const larger = arr[j];
                arr[j] = smaller;
                arr[j + 1] = larger;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (i !== indexOfMin) {
            const smaller = arr[indexOfMin];
            const larger = arr[i];
            arr[i] = smaller;
            arr[indexOfMin] = larger;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    if (left.length) {
        results = [...results, ...left];
    }

    if (right.length) {
        results = [...results, ...right];
    }

    return results;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
