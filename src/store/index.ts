import {
    useDispatch as useRawDispatch,
    useSelector as useRawSelector
} from 'react-redux';

import {createStore} from './create-store';

export const {store, persistor} = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = useRawDispatch.withTypes<AppDispatch>();
export const useSelector = useRawSelector.withTypes<RootState>();