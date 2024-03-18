import './App.css';
import Login from './Login/Login';
import FirstPage from './FirstPage/FirstPage';
import UploadVideo from './UploadPage/UploadVideo';
import {Route,Routes } from 'react-router-dom';
import FirstPagee from './FirstPage/FirstPagee';
import EnterNames from './EnterNames/EnterName';
import SearchBar from './SearchBar/SearchBar';
import HomePage from './HomePage/HomePage';
import Search from './SearchBar/Search';



export default function App() {
  return (
    <div className="App">
      <Routes> 
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/search" element={<Search/>} />
        <Route exact path="/analysis" element={<FirstPagee/>} />
        <Route exact path="/about" element={<SearchBar/>} />
        <Route path='/analysis/:id' element={<UploadVideo/>}/>
        <Route path='/names' element={<EnterNames/>}/>

      </Routes>
    </div>
  );
}
