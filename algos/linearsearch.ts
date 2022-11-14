export function linearSearch(arr: Array<number>, searchInput: number): boolean {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === searchInput) {
            return true;
        }
    }

    return false;
}