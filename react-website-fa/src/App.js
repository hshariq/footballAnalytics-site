import './App.css';
import Login from './Login/Login';
import FirstPage from './FirstPage/FirstPage';
import UploadVideo from './UploadPage/UploadVideo';
import {Route,Routes } from 'react-router-dom';
import FirstPagee from './FirstPage/FirstPagee';
import EnterNames from './EnterNames/EnterName';



export default function App() {
  return (
    <div className="App">
      <Routes> 
        <Route exact path="/" element={<FirstPagee/>} />
        <Route path='/analysis/:id' element={<UploadVideo/>}/>
        <Route path='/names' element={<EnterNames/>}/>

      </Routes>
    </div>
  );
}
