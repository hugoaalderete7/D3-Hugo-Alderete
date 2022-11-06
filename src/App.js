import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './View/Admin/AdminPage';
import FilmPage from './View/Film/FilmPage';
import HomePage from './View/home/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/film' element={<FilmPage />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
