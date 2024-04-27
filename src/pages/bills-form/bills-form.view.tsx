import {FunctionComponent, useState} from "react";
import {Label} from "flowbite-react";
import {inputStyles} from "@/shared/constants/styles.constant.ts";
import {useGetBillByIdMutation} from "@/entities/bills-list/model/bills-list.model.ts";
import { Widget } from "@/widgets";
import {useTypedSelector} from "@/shared/hook/redux/redux.selector.ts";
import {useActions} from "@/shared/hook/redux/redux.actions.ts";
import {AddQrStatus} from "@/entities/bills-list/model/types/bill.type.ts";
import {MdErrorOutline} from "react-icons/md";

const BillsForm: FunctionComponent = () => {
    const qrStatusInitial = useTypedSelector((state) => state.QrStatusReducer)
    const [bill, setBill] = useState<string>('')
    const [request, {isLoading}] = useGetBillByIdMutation();
    const { addQrStatus } = useActions();
    const [errorUi, setErrorUi] = useState<string>('')

    if(isLoading) return <Widget.Preloader />

    const getStatusHandler = async () => {
        if (bill.length === 0) return setErrorUi('Введите Id');
        try {
            const response = await request(bill).unwrap();
            const billQrStatus: AddQrStatus = { qrId: bill, ...response };
            addQrStatus(billQrStatus);
        } catch (error) {
            setErrorUi('Такого Id нет');
        }
    }

    function handleChangeBill(text: string) {
        setErrorUi('');
        setBill(text);
    }

    return (
        <div className='w-full'>
            <div className='flex flex-col items-start text-left mx-auto'>
                <div className="mb-2 font-bold">
                    <Label className='text-xl' htmlFor="Заказ" value="Заказ" />
                </div>
                <input
                    className={`${inputStyles} ${errorUi.length !== 0 && 'border border-red-400'}`}
                    placeholder="Введите номер заказа..."
                    value={bill}
                    onChange={e => handleChangeBill(e.target.value)}
                />
                {
                    errorUi.length !== 0 &&
                    <div className="mt-2 flex items-center gap-2 font-bold">
                        <MdErrorOutline className='text-red-400' />
                        <h1 className='text-sm text-red-400'>{errorUi}</h1>
                    </div>
                }
            </div>
            <div className='mx-auto flex justify-center'>
                <button onClick={getStatusHandler} className='bg-root-violet mt-3 transition py-2 mx-auto hover:bg-root-violet50 rounded w-[200px]'>Отправить</button>
            </div>
            {qrStatusInitial.map(qrStatus => (
                <h1>{qrStatus.qrStatus}</h1>
            ))}
        </div>
    )
}

export default BillsForm;