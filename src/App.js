import './App.css';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound';
import House from './Components/House';
// import Enquiry from './Components/Enquiry';
import Header from './Components/Header';
import ListAHouse from './Components/ListAHouse';
import Login from './Components/Login';
import SearchHouse from './Components/SearchHouse';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Enquiries from './Components/Enquiries';
function App() {
  return (
    <div className="App">
      <h1> Welcome </h1>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<PageNotFound/>} /> 
          <Route path="house:id" element={<House/>} />
          <Route path="listahouse" element={<ListAHouse/>} />
          <Route path="login" element={<Login/>} />
          <Route path='/searchhouse/:id' element={<SearchHouse/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/enquiries' element={<Enquiries/>}/>
      </Routes>
    </div>
  );
}

export default App;