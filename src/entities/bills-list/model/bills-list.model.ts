import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { __APPLICATION__ } from '@/app/config';
import {BillType, QrStatus} from "@/entities/bills-list/model/types/bill.type.ts";
import {Bill} from "@/entities/bills-list/model/constant/bill.constant.ts";

export const BillsAPI = createApi({
    reducerPath: 'bills/api',
    baseQuery: fetchBaseQuery({
        baseUrl: __APPLICATION__.baseServerUrl,
    }),
    tagTypes: ['Bills'],
    endpoints: (build) => ({
        PostCreateBill: build.mutation<BillType, void>({
            query: () => ({
                url: 'bills/create',
                method: 'POST',
                body: Bill
            }),
            invalidatesTags: ['Bills'],
            transformResponse: (response: BillType) => response,
        }),
        GetBillById: build.mutation<QrStatus, string>({
            query: (id: string) => ({
                url: `bills/get/${id}`,
                method: 'GET',
            }),
            invalidatesTags: ['Bills'],
            transformResponse: (response: QrStatus) => response
        })
    })
})

export const {
    usePostCreateBillMutation,
    useGetBillByIdMutation
} = BillsAPI