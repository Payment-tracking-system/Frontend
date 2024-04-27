import {AppCore} from "@/app/core";
import {App} from "@/app/app.tsx";
import React from "react";

import '@/app/css/index.css';

AppCore.setup(() => <React.StrictMode children={<App />} />);