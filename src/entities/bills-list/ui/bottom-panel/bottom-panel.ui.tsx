import {FunctionComponent} from "react";
import {GoPlus} from "react-icons/go";

type Props = {
    addBill: () => void
}

const BottomPanel: FunctionComponent<Props> = ({addBill}: Props) => {
    return(
        <div className="fixed left-0 w-full z-50 bottom-20">
            <div className="grid h-full grid-cols-1 mx-auto">
                <div className="flex items-center justify-center">
                    <button onClick={addBill} type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                        <GoPlus className="w-[100%] h-[100%]" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BottomPanel;