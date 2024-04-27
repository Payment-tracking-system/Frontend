export type __APPLICATION_CONFIG__ = {
    node_mode: string;
    baseServerUrl: string;
    routes: Readonly<{
        notfound: string;
        bills_form: string;
        bills_list: string;
    }>;
};

export const __APPLICATION__: __APPLICATION_CONFIG__ = {
    node_mode: import.meta.env.VITE_NODE_MODE,
    baseServerUrl: import.meta.env.VITE_PUBLIC_SERVER_URL,
    routes: {
        notfound: '*',
        bills_form: '/',
        bills_list: '/bills'
    }
}