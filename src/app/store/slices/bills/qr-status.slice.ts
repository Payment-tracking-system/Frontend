import {AddQrStatus} from "@/entities/bills-list/model/types/bill.type.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: AddQrStatus[] | null = []

export const QrStatusSlice = createSlice({
    name: 'Bills',
    initialState,
    reducers: {
        addQrStatus: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const QrStatusSliceReducer = QrStatusSlice.reducer;
export const QrStatusSliceActions = QrStatusSlice.actions;