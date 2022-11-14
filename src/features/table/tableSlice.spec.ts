import tableReducer, {incrementByAmount, TableState,} from './tableSlice';

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

    it('should handle incrementByAmount', () => {
        const actual = tableReducer(initialState, incrementByAmount(2));
        expect(actual.value).toEqual(5);
    });
});
