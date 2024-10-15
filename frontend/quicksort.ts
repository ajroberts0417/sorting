

// take an array
// divide it in half (pivot point)
// run quick sort
// handle the base case

// const unsortedExample = [4, 3, 5, 9, 10, 44, 1, 2]

export interface QuickSortState {
    array: number[],
    pivotValue: number,
    left: number[],
    right: number[]
}

// quicksort takes in an array and returns a sorted array
export function quicksort(array: number[], callback?: (state: QuickSortState) => void): number[] {

    if (array.length <= 1) return array

    const pivot = Math.floor(array.length / 2) // the pivot will be 4 for instance.
    const pivotValue = array[pivot]

    // THIS IS NOT QUICK SORT!!!
    const left = []
    const right = []
    const toSort = array.toSpliced(pivot, 1) // this deletes the pivot.

    // go through all the elements of toSort
    for (let i = 0; i < toSort.length; i++) {
        const elementToSort = toSort[i]
        if (elementToSort < pivotValue) { left.push(elementToSort) }
        else right.push(elementToSort)
    }

    // IN ALL PURELY FUNCTIONAL FUNCTIONS.
    // this could be a console.log
    // this could be an animation state update in React
    // this could be a DRAW call in p5.js
    // this could be a DRAW call in three.js
    const currentState = {
        array,
        pivotValue,
        left,
        right
    }
    if (callback) callback(currentState);

    // THIS IS QUICK SORT:
    const sortedLeft = quicksort(left, callback)
    const sortedRight = quicksort(right, callback)

    // pivotVALUE not pivot
    return [...sortedLeft, pivotValue, ...sortedRight]
}

// function logState(state: QuickSortState) {
//     console.log(state)
// }


// const sortedExample = await quicksort(unsortedExample, logState)

// console.log("unsorted:", unsortedExample, "sorted:", sortedExample)