import {App} from "@/app/app.tsx";
import React from "react";

import '@/app/css/index.css';
import {Core} from "@/app/core";
import {LoadingApp} from "@/app/modules/loading.app.tsx";
import ProdApp from "@/app/modules/prod.app.tsx";

const core = new Core();

core.setup({
    ApplicationDevComponent: () => <React.StrictMode children={<App />} />,
    ApplicationComponent: () => <React.StrictMode children={<ProdApp />} />,
    LoadingComponent: () => <React.StrictMode children={<LoadingApp />} />
})

// AppCore.setup(() => <React.StrictMode children={<App />} />);