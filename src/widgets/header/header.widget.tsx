import {FunctionComponent} from "react";
import { Feature } from "@/features";
import {useNavigate} from "react-router";

export const HeaderWidget: FunctionComponent = () => {
    const navigate = useNavigate();

    const homeNavigate = () => {
        navigate('/')
    }

    return (
        <div className="px-3 py-2 flex items-center justify-between z-10 bg-root-greyLight dark:bg-root-greyDark">
            <div onClick={homeNavigate} className="flex cursor-pointer items-center flex-col">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Check</span>
                <span>bills</span>
            </div>
            <h1 className='font-bold text-lg'>Проверка заказа</h1>
            <Feature.ThemeToggle />
        </div>
    )
}