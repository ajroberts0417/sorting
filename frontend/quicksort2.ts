

export type QuicksortCallback = (left: number[], middle: number[], right: number[], merged: number[]) => void;
// Quicksort implementation in a purely functional recursive way
export const quicksort = (arr: number[], callback: QuicksortCallback): number[] => {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);

    // console.log(left, middle, right)
    const merged = [...quicksort(left, callback), ...middle, ...quicksort(right, callback)];
    callback(left, middle, right, merged)
    return merged
};

// const history = []

// quicksort([1, 5, 2, 3, 89, 5, 68, 5, 777, 43], (left, middle, right, merged) => history.push({ left, middle, right, merged }))

// console.log(history)