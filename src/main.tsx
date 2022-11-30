import {createRoot} from 'react-dom/client'

import {RouterProvider} from "react-router-dom";
import {router} from "./app/Routing";

const root = document.getElementById('root');

if (!root) throw new Error('root not defined');

createRoot(root).render(<RouterProvider router={router}/>);
