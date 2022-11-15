import {
    addToArraySpecificPosition,
    filterArrayByKeyAndValue,
    findIndexPosition,
    findItemInArray,
    flattenArray,
    removeItemFromArrayByElement,
    sortArray,
    sortByDate
} from './sort-array';

describe('sortArrayByKey', () => {
    it('should sort an array by a key', () => {
        const array = [
            {name: 'c', value: 1},
            {name: 'b', value: 2},
            {name: 'a', value: 3},
        ];
        const sortedArray = sortArray(array, 'name');
        expect(sortedArray[0].name).toEqual('a');
        expect(sortedArray[1].name).toEqual('b');
        expect(sortedArray[2].name).toEqual('c');
    });
});

describe('flattenArrayAndReturnKeyByPair', () => {
    it('should flatten an array and return a key by pair', () => {
        const array = [0, 1, 2, [3, 4]];
        const sortedArray = flattenArray(array);
        expect(sortedArray).toEqual([0, 1, 2, 3, 4]);
    });
});

describe('addToArray', () => {
    it('should add an item to a specific position inside an array', () => {
        const array = [0, 1, 2, 3, 4];
        const sortedArray = addToArraySpecificPosition(array, 2, 5);
        expect(sortedArray).toEqual([0, 1, 5, 2, 3, 4]);
    });
});

describe('findIndexPosition', () => {
    it('should find the index position of an item in an array', () => {
        const array = [0, 1, 2, 3, 4];
        const indexPosition = findIndexPosition(array, 2);
        expect(indexPosition).toEqual(2);
    });
});

// describe find item in array and return true or false
describe('findItemInArray', () => {
    it('should find an item in an array and return true or false', () => {
        const array = ['milk', 'bread', 'sugar']
        const item = 'milk';
        const itemFound = findItemInArray(array, item);
        expect(itemFound).toEqual(true);
    });
});

// describe remove item from array by element removeItemFromArrayByElement
describe('removeItemFromArrayByElement', () => {
    it('should remove an item from an array by element', () => {
        const array = ['milk', 'bread', 'sugar'];
        const item = 'milk';
        const newArray = removeItemFromArrayByElement(array, item);
        expect(newArray).toEqual(['bread', 'sugar']);
    });
});

describe('filterArrayByKeyAndValue', () => {
    it('should filter an array by key and value', () => {
        const array = [
            {name: "Jason", species: "rabbit"},
            {name: "Jessica", species: "dog"},
            {name: "Jacky", species: "owl"},
            {name: "Luke", species: "fish"},
            {name: "Junior", species: "rat"},
            {name: "Thomas", species: "cat"}
        ];
        const filteredArray = filterArrayByKeyAndValue(array, 'species', 'dog');
        expect(filteredArray[0].name).toEqual('Jessica');
    });
});

describe('sortByDate', () => {
    it('should sort an array by date asc', () => {
        const array = [
            {name: 'a', date: '2020-01-03'},
            {name: 'b', date: '2020-01-02'},
            {name: 'c', date: '2020-01-01'},
        ];
        const sortedArray = sortByDate(array, 'date', 'asc');
        expect(sortedArray[0].name).toEqual('c');
        expect(sortedArray[1].name).toEqual('b');
        expect(sortedArray[2].name).toEqual('a');
    });

    it('should sort an array by date desc', () => {
        const array = [
            {name: 'a', date: '2020-01-03'},
            {name: 'b', date: '2020-02-02'},
            {name: 'c', date: '2020-03-01'},
            {name: 'd', date: '2020-03-04'},
            {name: 'e', date: '2020-03-05'},
        ];
        const sortedArray = sortByDate(array, 'date', 'dsc');
        expect(sortedArray[0].name).toEqual('e');
        expect(sortedArray[1].name).toEqual('d');
        expect(sortedArray[2].name).toEqual('c');
        expect(sortedArray[3].name).toEqual('b');
        expect(sortedArray[4].name).toEqual('a');
    });

});



