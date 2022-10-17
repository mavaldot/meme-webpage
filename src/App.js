import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import MemePage from "./pages/MemePage";
import AuthPage from "./pages/AuthPage";
import AccountProtected from "./components/AccountProtected";

function App() {
  /*
  const navigate = useNavigate();
  const navigateAuth = () => {
    navigate('/auth');
  };
  */

  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<AuthPage />} />
          {/**<Route path="/memes" element={<MemePage/>}/> */}  
          <Route
            path="/memes"
            element={
              <AccountProtected>
                <MemePage/>
              </AccountProtected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
