import React from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import MemePage from "./pages/MemePage";
import AuthPage from "./pages/AuthPage";
import LogOutPage from "./pages/LogOutPage";
import AccountProtected from "./components/AccountProtected";
import FavoritesPage from "./pages/FavoritesPage";

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
                <LogOutPage/>
                <MemePage />
              </AccountProtected>
            }
          />
          <Route path="/favorites" element={<FavoritesPage/>}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
