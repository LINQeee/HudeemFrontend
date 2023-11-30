import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from "react-redux";
import {setupStore} from "./store/Store.ts";

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
)
