import {createRoot} from 'react-dom/client'
import {Routing} from "./app/Routing";
import {StrictMode} from "react";

const root = document.getElementById('root');

if (!root) throw new Error('root not defined');

createRoot(root).render(
    <StrictMode>
        <Routing/>
    </StrictMode>
);
