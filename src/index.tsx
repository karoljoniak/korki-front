import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

import {routes} from "./app/routes/routes";

import './index.scss';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(routes);
const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
        </QueryClientProvider>
    </React.StrictMode>
);
