import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home';
import Chambres from './component/Chambres';
import Reservation from './component/Reservation'
import DetailsReservation from './component/DetailsReservation';


function App() {
  return (


    <div>
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/chambres&prix" element={<Chambres/>}></Route>
       <Route path="/tarifs" element={<Reservation/>}></Route>
       <Route path="/Details" element={<DetailsReservation/>}></Route>

     </Routes>
     </BrowserRouter>

      
    </div>
  );
}

export default App;
