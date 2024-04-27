import {FunctionComponent} from "react";
import {IoIosHome} from "react-icons/io";
import {FaMoneyBill1Wave} from "react-icons/fa6";
import {useNavigate} from "react-router";

export const BottomNavbarWidget: FunctionComponent = () => {
    const navigate = useNavigate();

    const homeNavigate = () => {
        navigate('/')
    }

    const billsNavigate = () => {
        navigate('/bills')
    }

    return(
        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-gray-200 dark:bg-root-greyDark dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
                <button onClick={homeNavigate} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <IoIosHome size={24} className='group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Домой</span>
                </button>
                <button onClick={billsNavigate} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaMoneyBill1Wave size={24} className='group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                    <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Чеки</span>
                </button>
            </div>
        </div>
    )
}