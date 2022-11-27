function qs(arr: Array<number>, low: number, high: number): void {
    if (low >= high || arr.length === 0) {
        return;
    }

    const pivotIndex = partition(arr, low, high);

    qs(arr, low, pivotIndex - 1);
    qs(arr, pivotIndex + 1, high);
}

function partition(arr: Array<number>, low: number, high: number): number {
    const pivot = arr[high];
    let index = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            index++;
            const temp = arr[i]; 
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }
    index++;
    arr[high] = arr[index];
    arr[index] = pivot
                                                                                                   
    return index
}

export function quickSort(arr: Array<number>): Array<number> {
    qs(arr, 0, arr.length - 1)
    return arr
}
