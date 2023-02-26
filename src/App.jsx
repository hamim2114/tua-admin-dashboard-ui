import './assets/libs/boxicons-2.1.1/css/boxicons.min.css';
import './scss/App.scss';
import Blank from './pages/Blank';
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom'
import Mainlayout from './layout/Mainlayout';


function App() {
    return (
        <Routes>
            <Route path='/' element={<Mainlayout />}>
                <Route index element={<Dashboard />} />
                <Route path='orders' element={<Blank />} />
                <Route path='products' element={<Blank />} />
                <Route path='customers' element={<Blank />} />
                <Route path='settings' element={<Blank />} />
                <Route path='stats' element={<Blank />} />
            </Route>
        </Routes>
    );
}

export default App;
