import tableReducer, {decrement, increment, incrementByAmount, TableState,} from './tableSlice';

describe('table reducer', () => {
    const initialState: TableState = {
        value: 3,
        status: 'idle',
    };
    it('should handle initial state', () => {
        expect(tableReducer(undefined, {type: 'unknown'})).toEqual({
            value: 0,
            status: 'idle',
        });
    });

    it('should handle increment', () => {
        const actual = tableReducer(initialState, increment());
        expect(actual.value).toEqual(4);
    });

    it('should handle decrement', () => {
        const actual = tableReducer(initialState, decrement());
        expect(actual.value).toEqual(2);
    });

    it('should handle incrementByAmount', () => {
        const actual = tableReducer(initialState, incrementByAmount(2));
        expect(actual.value).toEqual(5);
    });
});
