import { Toast } from 'flowbite-react';
import { FunctionComponent, useEffect } from 'react';
import { HiCheck, HiExclamation } from 'react-icons/hi';

type Alert = {
    text: string;
    status: string;
    show: boolean;
    resetShow: Function;
}

export const AlertWidget: FunctionComponent<Alert> = ({text, status, show, resetShow}: Alert) => {
    useEffect(() => {
        if (show) {
            setTimeout(resetShow, 3000);
        }
    }, [show]);

    if (!show) return;

    return (
        <div className="fixed z-20 top-2 right-2">
            <Toast className='pr-2'>
                {status === 'ok' ? (
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-200 text-green-500">
                        <HiCheck className="h-5 w-5" />
                    </div>
                ) : (
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-200 text-orange-500">
                        <HiExclamation className="h-5 w-5" />
                    </div>
                )}
                <div className="ml-3 text-sm font-normal">{text}</div>
            </Toast>
        </div>
    );
};
