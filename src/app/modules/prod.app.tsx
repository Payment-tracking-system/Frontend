import {FunctionComponent, ReactElement} from "react";
import {Route, Routes} from "react-router-dom";
import BillsForm from "@/pages/bills-form/bills-form.view.tsx";
import {withProviders} from "@/app/providers";
import {Widget} from "@/widgets";
import {Flowbite} from "flowbite-react";

const ProdApp: FunctionComponent = () => {
    return withProviders((): ReactElement => {
        return(
            <Flowbite>
                <div className="dark:bg-root-bgDark w-full min-h-screen bg-slate-50">
                    <Widget.Navbar />
                    <div className="w-full flex justify-center p-10">
                        <Routes>
                            <Route path="*" element={<BillsForm />} />
                        </Routes>
                    </div>
                </div>
            </Flowbite>
        )
    })()
}

export default ProdApp;