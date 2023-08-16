import './App.css';
import Crud from './Teams/Navbar';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Showtask from './Teams/Showtask';
import Usecontext from './Teams/usecontext/Usecontext';
// import Task from './Task';

function App() {
  return (
    <>
       <Usecontext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/task" element={<Showtask />} />
          </Routes>
        </BrowserRouter>
      </Usecontext> 
      {/* <Task/> */}
    </>
  );
}

export default App;
