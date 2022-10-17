import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const theme = createTheme();

const LogOutPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {logOut } = UserAuth();

  const handleSignOut = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  return (
    <Button
              onClick={handleSignOut}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log Out
            </Button>
  );
};

export default LogOutPage;
