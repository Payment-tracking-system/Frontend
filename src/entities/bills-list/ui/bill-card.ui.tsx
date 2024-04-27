import {FunctionComponent, useEffect, useState} from "react";
import {BillType} from "@/entities/bills-list/model/types/bill.type.ts";

type Props = {
    data: BillType
}

const BillCard: FunctionComponent<Props> = ({data}: Props) => {
    const [copied, setCopied] = useState<boolean>(false)
    const {qrId, qrUrl} = data;

    const copyId = () => {
        navigator.clipboard.writeText(qrId).then(() => setCopied(true))
    }

    useEffect(() => {
        if (copied) {
            setTimeout(() => setCopied(false), 1000);
        }
    }, [copied]);

    return(
        <div className='flex items-center gap-3 flex-col'>
            <img src={`${qrUrl}`} alt='QR-code' />
            <button onClick={copyId} className='bg-root-violet transition py-1 hover:bg-root-violet50 rounded w-full'>{copied ? 'Скопировано...' : 'Скопировать'}</button>
        </div>
    )
}

export default BillCard;