import {ReactNode} from "react";
import ReactDOM from "react-dom/client";

type ApplicationComponent = () => ReactNode;

interface Applications {
    ApplicationDevComponent: ApplicationComponent;
    ApplicationComponent: ApplicationComponent;
    LoadingComponent: ApplicationComponent;
}

interface Configuration {
    ApplicationDOMNode: () => HTMLDivElement;
    ApplicationDevComponent: ApplicationComponent;
    ApplicationComponent: ApplicationComponent;
    ApplicationReactDOM: ReactDOM.Root | null;
}