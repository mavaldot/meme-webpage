import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from "react-router-dom";
import MemePage from './pages/MemePage';
import AuthPage from './pages/AuthPage';
import { AuthContextProvider, currentAuthState } from "./fireConnect";

const RouteWithAuth = ({ component: C, ...props }) => {
  const { isAuthenticated } = currentAuthState();
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Routes>
      <Route
        {...props}
        render={(routeProps) =>
          isAuthenticated ? <C {...routeProps} /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
};
const RouteWithOutAuth = ({ component: C, ...props }) => {
  const { isAuthenticated } = currentAuthState();
  console.log(`AuthenticatedRoute: ${isAuthenticated}`)
  return (
    <Routes>
      <Route
        {...props}
        render={(routeProps) =>
          !isAuthenticated ? <C {...routeProps} /> : <Navigate to="/" />
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <RouteWithOutAuth path="/login" element={<AuthPage />} />
        <RouteWithAuth path="/" element={<MemePage />} />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
