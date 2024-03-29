import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Header from "./component/Header";

import Footer from "./component/Footer"
import Home from "./component/Home";
import Video from "./component/Video";
import Upload from "./component/Upload";
import Signup from "./component/Signup";
import Login from "./component/Login";

function App() {
  return (
  <Router>
<Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/videos' element={<Video/>}/>
      <Route path='/upload' element={<Upload/>}/>
     
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
