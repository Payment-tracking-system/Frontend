import {FunctionComponent, useState} from "react";
import {useTypedSelector} from "@/shared/hook/redux/redux.selector.ts";
import {useActions} from "@/shared/hook/redux/redux.actions.ts";
import BottomPanel from "@/entities/bills-list/ui/bottom-panel/bottom-panel.ui.tsx";
import BillsEmpty from "@/entities/bills-list/ui/empty/bills-empty.ui.tsx";
import {usePostCreateBillMutation} from "@/entities/bills-list/model/bills-list.model.ts";
import { Widget } from "@/widgets";
import BillCard from "@/entities/bills-list/ui/bill-card.ui.tsx";

type Alert = {
    text: string
    status: string
}

const BillsList: FunctionComponent = () => {
    const billsInitial = useTypedSelector((state) => state.BillsReducer)
    const [request, { error, isLoading }] = usePostCreateBillMutation();
    const [alertObj, setAlertObj] = useState<Alert>({
        text: '',
        status: '',
    });
    const [show, setShow] = useState<boolean>(false);

    const { addBill } = useActions();

    const handleAddBill = async () => {
        try {
            const response = await request().unwrap();
            addBill(response);
            setAlertObj({ text: 'Чек был добавлен', status: 'ok' });
            setShow(true);
        } catch (error) {
            console.error(error);
        }
    };

    if(isLoading) return <Widget.Preloader />
    if(error) {
        setAlertObj({ text: 'Произошла ошибка', status: 'fail' });
        setShow(true);
    }

    return(
        <div className='mb-24'>
            <Widget.Alert
                text={alertObj.text}
                status={alertObj.status}
                show={show}
                resetShow={() => setShow(false)}
            />
            {!billsInitial.length && <BillsEmpty />}
            <div className='grid grid-cols-3 smList2:grid-cols-2 smList3:grid-cols-1 items-center gap-20 justify-center mx-auto'>
                {billsInitial.map(bill => (
                        <BillCard key={bill.qrId} data={bill} />
                ))}
            </div>
            <BottomPanel addBill={handleAddBill} />
        </div>
    )
}

export default BillsList;