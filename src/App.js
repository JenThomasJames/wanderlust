import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/welcome" element={<Landing />} />
          <Route path="*" element={<Navigate to={"/welcome"} />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
