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

export function findIndexPosition(array: any[], item: any) {
    return array.indexOf(item);
}

export function findItemInArray(array: any[], item: any) {
    return array.includes(item);
}

export function removeItemFromArrayByPosition(array: any[], position: number) {
    array.splice(position, 1);
    return array;
}

export function removeItemFromArrayByElement(array: any[], item: any) {
    const position = array.indexOf(item);
    array.splice(position, 1);
    return array;
}

export function filterArrayByKeyAndValue(array: any[], key: string, value: any) {
    return array.filter((item) => item[key] === value);
}

export function removeDuplicateFromArrayProperty(array: any[], key: string) {
    return array.filter((item, index, self) => self.findIndex((t) => t[key] === item[key]) === index);
}

export function sortByDate(array: any[], key: string, order: string) {
    return [...array].sort((a, b) => {
        const x = new Date(a[key]);
        const y = new Date(b[key]);
        if (order === 'asc') {
            return x < y ? -1 : x > y ? 1 : 0;
        } else {
            return x > y ? -1 : x < y ? 1 : 0;
        }
    })
}

// find the frequency of an element in array
export function findFrequencyOfElementInArray(array: any[], item: any) {
    return array.filter((v) => (v === item)).length;
}

// propery an element from an object passed as param
export function removePropertyFromObject(object: any, property: string) {
    delete object[property];
    return object;
}










