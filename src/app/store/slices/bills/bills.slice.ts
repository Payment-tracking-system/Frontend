import {BillType} from "@/entities/bills-list/model/types/bill.type.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: BillType[] | null = []

export const BillsSlice = createSlice({
    name: 'Bills',
    initialState,
    reducers: {
        addBill: (state, action) => {
            state.push(action.payload)
        }
    }
})

export const BillsSliceReducer = BillsSlice.reducer;
export const BillsSliceActions = BillsSlice.actions;