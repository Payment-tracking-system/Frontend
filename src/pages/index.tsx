import {FunctionComponent, lazy} from "react";
import {__APPLICATION__} from "@/app/config";
import {Route, Routes} from "react-router-dom";

const BillsList = lazy(() => import('./bills-list/bills-list.view'));
const BillsForm = lazy(() => import('./bills-form/bills-form.view'));
const NotFoundView = lazy(() => import('./notfound/notfound.view'));

export const RoutingDev: FunctionComponent = () => {
    const {routes} = __APPLICATION__;

    return (
        <Routes>
            <Route path={routes.bills_list} element={<BillsList />} />
            <Route path={routes.bills_form} element={<BillsForm />} />
            <Route path={routes.notfound} element={<NotFoundView />} />
        </Routes>
    )
}

export const RoutingProd: FunctionComponent = () => {
    const {routes} = __APPLICATION__;

    return (
        <Routes>
            <Route path={routes.bills_form} element={<BillsForm />} />
            <Route path={routes.notfound} element={<NotFoundView />} />
        </Routes>
    )
}