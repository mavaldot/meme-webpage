import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../fireConnect";
import { collection, addDoc, Timestamp, doc, setDoc } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const theme = createTheme();


const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, register } = UserAuth();
  const auth = getAuth();
  

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/memes");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await register(email, password);
      await registerOnDataBase()
      //onAuthStateChanged()
      navigate("/memes")
      //navigate("/memes");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };
  const registerOnDataBase = async (e) => {
    try {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          await setDoc(doc(db, "user", uid), { email: email, memes: []});
        } else {
        }
      });

    } catch (error) {
      alert(error)
    }
  }
  /*
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const userLoged = user.uid;
      return userLoged;
    } 
    else {
    }
  });
  */


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Boomer memes platform
          </Typography>
          <Box
            component="form"
            //onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo Electronico"
              name="email"
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
            />

            <Button
              onClick={handleSignIn}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar Sesion
            </Button>

            <Button
              onClick={handleRegister}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrarme
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default AuthPage;
