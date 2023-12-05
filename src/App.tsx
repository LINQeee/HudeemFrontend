import "./App.scss";
import {RouterProvider} from 'react-router-dom';
import {browserRouter} from "./router/BrowserRouter.ts";

function App() {

    return (
        <RouterProvider router={browserRouter}/>
    )
}

export default App
