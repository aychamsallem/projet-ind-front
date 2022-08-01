import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home';
import Chambres from './component/Chambres';
import Reservation from './component/Reservation'
import Tarifsdipo from './component/Tarifsdispo'
import AdminAdd from './component/AdminAdd'
import Confirmation from './component/Confirmation';
import Getchambre from './component/Getchambre'
import AdminEdit from './component/AdminEdit'


function App() {
  return (


    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/chambres&prix" element={<Chambres/>}></Route>
       <Route path="/tarifs" element={<Reservation/>}></Route>
       <Route path="/tarifdispo" element={<Tarifsdipo/>}></Route>
       <Route path="/Admin" element={<AdminAdd/>}></Route>
       <Route path="/confirmation" element={<Confirmation/>}></Route>
       <Route path="/getchambre" element={<Getchambre/>}></Route>
       <Route path="/Edit" element={<AdminEdit/>}></Route>







     </Routes>
     </BrowserRouter>

      
    </div>
  );
}

export default App;
