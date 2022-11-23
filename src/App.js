
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

import Login from "./Login";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </>
  );
}

export default App;
