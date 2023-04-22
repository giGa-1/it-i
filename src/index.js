import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {wrapper} from "../redux/store";
import Provider from "react-redux/lib/components/Provider";
import * as ReactDOMClient from 'react-dom/client';


const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
 <Provider store={wrapper}>
         < App />
 </Provider>);

reportWebVitals();
