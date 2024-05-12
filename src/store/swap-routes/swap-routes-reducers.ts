import {createReducer} from '@reduxjs/toolkit';

import {loadSwapRoutesActions} from './swap-routes-actions.ts';
import {swapRouteInitialState, SwapRoutesState} from './swap-routes-state.ts';
import {createEntity} from '../utils/create-entity';

export const swapRoutesReducers = createReducer<SwapRoutesState>(
    swapRouteInitialState,
    builder => {
        builder.addCase(loadSwapRoutesActions.submit, state => ({
            ...state,
            batch: createEntity(state.batch.data, true)
        }));
        builder.addCase(loadSwapRoutesActions.success, (state, {payload}) => ({
            ...state,
            batch: createEntity(payload, false)
        }));
        builder.addCase(
            loadSwapRoutesActions.fail,
            (state, {payload: error}) => ({
                ...state,
                batch: createEntity([], false, error)
            })
        );
    }
);
