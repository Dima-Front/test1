import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/base.scss'
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import Basket from "./components/basket/Basket";
import Layout from "./components/layout/Layout";





const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<App />}>
        <Route path={'/'} element={<Layout />} />
        <Route path={'/cart'} element={<Basket />} />
    </Route>
))

 ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
     <RouterProvider router={router}/>

);


