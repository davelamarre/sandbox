import {addToArraySpecificPosition, flattenArray, sortArray} from './sort-array';

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