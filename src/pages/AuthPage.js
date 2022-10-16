import React, { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "firebase/auth";
//import {useFirebaseApp} from 'reactfire';
//import {auth} from "../fireConnect"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const theme = createTheme();

const AuthPage = () => {
    const handleLogin = useCallback(async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email.value, password.value);
    }, []);

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
                        Sign in
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
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            //onChange={(event) => setEmail(event.target.value)}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            //onChange={(event) => setPassword(event.target.value)}
                            autoComplete="current-password"
                        />

                        <Button
                            onClick={handleLogin}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default AuthPage;
