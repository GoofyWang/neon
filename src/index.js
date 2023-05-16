import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {isMobile} from 'react-device-detect';

const App = lazy(() => import('./App'));
const Mobile = lazy(() => import('./Mobile'));
const root = ReactDOM.createRoot(document.getElementById('root'));

//(window.innerWidth < 500

if (isMobile){
    root.render(
        <React.StrictMode>
            <Mobile />
        </React.StrictMode>
    );
}else{
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
