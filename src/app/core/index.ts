// import ReactDOM from "react-dom/client";
// import {AppComponent, CoreConfiguration} from "@/app/core/types/type";
//
// export class AppCore {
//     private configuration: CoreConfiguration = {
//         AppComponent: () => void 0,
//         AppDOMNode: () => document.getElementById("root") as HTMLDivElement,
//         AppReactDOM: null,
//     };
//
//     constructor(component: AppComponent) {
//         this.configuration.AppComponent = component;
//     }
//
//     private mount(DomNode: HTMLDivElement): void {
//         const { AppComponent } = this.configuration;
//
//         this.configuration.AppReactDOM = ReactDOM.createRoot(DomNode);
//         this.configuration.AppReactDOM.render(AppComponent());
//     }
//
//     public static setup(component: AppComponent): void {
//         const core = new AppCore(component);
//
//         const { AppDOMNode } = core.configuration;
//
//         core.mount(AppDOMNode());
//
//         return void 0;
//     }
// }

import {ApplicationComponent, Applications, Configuration} from "@/app/core/types/type";
import {createRoot} from "react-dom/client";
import {__APPLICATION__} from "@/app/config";

export class Core {
    private static instance: Core;

    private configuration: Configuration = {
        ApplicationDOMNode: () => document.getElementById('root') as HTMLDivElement,
        ApplicationDevComponent: () => void 0,
        ApplicationComponent: () => void 0,
        ApplicationReactDOM: null,
    };

    constructor() {
        if (!Core.instance) {
            Core.instance = this;
        }
        return Core.instance;
    }

    public setup(applications: Applications): void {
        this.configuration.ApplicationReactDOM = createRoot(
            this.configuration.ApplicationDOMNode()
        );

        this._mount(applications.LoadingComponent);

        this._setDevComponent(applications.ApplicationDevComponent);
        this._setApplicationComponent(applications.ApplicationComponent);

        this._validateMode(__APPLICATION__.node_mode);
    }

    private _mount(component: ApplicationComponent) {
        this.configuration.ApplicationReactDOM!.render(component());
    }

    private _setApplicationComponent(component: ApplicationComponent) {
        this.configuration.ApplicationComponent = component;
    }

    private _setDevComponent(devComponent: ApplicationComponent) {
        this.configuration.ApplicationDevComponent = devComponent;
    }

    private async _validateMode(mode: string) {
        if(mode === 'dev') {
            return this._mount(this.configuration.ApplicationDevComponent);
        }

        if(mode === 'prod') {
            return this._mount(this.configuration.ApplicationComponent);
        }
    }
}