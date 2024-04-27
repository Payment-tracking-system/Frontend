import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import {ThemeSliceActions} from "@/app/store/slices/theme/theme.slice.ts";
import {BillsSliceActions} from "@/app/store/slices/bills/bills.slice.ts";
import {QrStatusSliceActions} from "@/app/store/slices/bills/qr-status.slice.ts";

const AllActions = {
  ...BillsSliceActions,
  ...ThemeSliceActions,
  ...QrStatusSliceActions
};

export const useActions = () => bindActionCreators(AllActions, useDispatch());