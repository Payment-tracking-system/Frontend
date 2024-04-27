import {RoutingDev, RoutingProd} from '@/pages';
import { FunctionComponent, ReactElement } from 'react';
import { withProviders } from './providers';
import { Flowbite } from 'flowbite-react';
import {Widget} from "@/widgets";
import {__APPLICATION__} from "@/app/config";

export const App: FunctionComponent = () => {
    const mode = __APPLICATION__.node_mode;

    return withProviders((): ReactElement => {
        return (
            <Flowbite>
                <div className="dark:bg-root-bgDark w-full min-h-screen bg-slate-50">
                    <Widget.Navbar />
                    <div className="w-full flex justify-center p-10">
                        {mode === 'dev' ? <RoutingDev /> : <RoutingProd />}
                    </div>
                    {mode === 'dev' ? <Widget.BottomNavbar/> : ''}
                </div>
            </Flowbite>
        )
    })();
};