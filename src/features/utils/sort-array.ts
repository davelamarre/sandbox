export function sortArray(array: any[], key: string) {
    return array.sort((a, b) => {
        const x = a[key];
        const y = b[key];
        if (x < y) {
            return -1;
        } else {
            return (x > y) ? 1 : 0;
        }
    });
}

export function flattenArray(array: any[]) {
    return array.flat();
}

export function addToArraySpecificPosition(array: any[], position: number, item: any) {
    array.splice(position, 0, item);
    return array;
}