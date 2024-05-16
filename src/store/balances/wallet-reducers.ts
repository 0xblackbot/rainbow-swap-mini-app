import {createReducer} from '@reduxjs/toolkit';

import {
    addPendingSwapTransactionActions,
    walletActions
} from './wallet-actions.ts';
import {walletInitialState, WalletState} from './wallet-state.ts';
import {createEntity} from '../utils/create-entity';

export const walletReducers = createReducer<WalletState>(
    walletInitialState,
    builder => {
        builder.addCase(walletActions.submit, state => ({
            ...state,
            balances: createEntity(state.balances.data, true)
        }));
        builder.addCase(walletActions.success, (state, {payload}) => ({
            ...state,
            balances: createEntity(payload, false)
        }));
        builder.addCase(walletActions.fail, (state, {payload: error}) => ({
            ...state,
            balances: createEntity(state.balances.data, false, error)
        }));

        builder.addCase(
            addPendingSwapTransactionActions.submit,
            (state, {payload}) => ({
                ...state,
                pendingSwapTransaction: createEntity(payload, true)
            })
        );
        builder.addCase(addPendingSwapTransactionActions.success, state => ({
            ...state,
            pendingSwapTransaction: createEntity(undefined, false)
        }));
        builder.addCase(
            addPendingSwapTransactionActions.fail,
            (state, {payload: error}) => ({
                ...state,
                pendingSwapTransaction: createEntity(undefined, false, error)
            })
        );
    }
);