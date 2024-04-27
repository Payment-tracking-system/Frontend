import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ThemeSliceReducer} from "@/app/store/slices/theme/theme.slice.ts";
import {BillsSliceReducer} from "@/app/store/slices/bills/bills.slice.ts";
import {BillsAPI} from "@/entities/bills-list/model/bills-list.model.ts";
import {QrStatusSliceReducer} from "@/app/store/slices/bills/qr-status.slice.ts";

const rootReducer = combineReducers({
    QrStatusReducer: QrStatusSliceReducer,
    BillsReducer: BillsSliceReducer,
    ThemeReducer: ThemeSliceReducer,
    [BillsAPI.reducerPath]: BillsAPI.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            BillsAPI.middleware,
        ),
});

export type TypedRootState = ReturnType<typeof store.getState>;