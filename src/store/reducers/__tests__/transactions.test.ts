import transactionReducer, { TransactionState, addNewTransaction, updateTransactions } from '../transactions';


describe('transactions reducer', () => {
    const initialState: TransactionState = {
        transactions: [],
        status: 'idle',
    };
    it('should handle initial state', () => {
        expect(transactionReducer(undefined, { type: 'unknown' })).toEqual({
            transactions: [],
            status: 'idle',
        });
    });


    it('should handle success status when fetching transaction', () => {
        const transactionPayload = [{
            title: 'Test transactions'
        }];
        const action = {
            type: addNewTransaction.type, payload: transactionPayload,

        };

        const actual = transactionReducer(initialState, action);
        expect(actual.transactions).toEqual(transactionPayload);
        expect(actual.status).toEqual('idle');
    });

    it('should handle update trnsactions', () => {
        const transactionPayload = [{
            title: 'Update transactions'
        }];
        const action = {
            type: updateTransactions.type, payload: transactionPayload,

        };

        const actual = transactionReducer(initialState, action);
        expect(actual.transactions).toEqual(transactionPayload);
        expect(actual.status).toEqual('idle');
    });

    
});
