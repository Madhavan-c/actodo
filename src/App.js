
import Signup from "./pages/signup";
import Login from "./pages/login";
import Landing from "./pages/landing";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [users, setusers] = useState(
    [
      {
        username: "madhavan",
        password: "123"
      }
    ]
  )
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setusers={setusers} />}></Route>
          <Route path='/Signup' element={<Signup users={users} setusers={setusers} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;

