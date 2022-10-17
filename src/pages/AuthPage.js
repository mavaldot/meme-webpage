import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//import {useFirebaseApp} from 'reactfire';
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const theme = createTheme();



const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password);
            navigate('/memes')
        } catch (error) {
            setError(error.message)
            console.log(error.message)
        }

    }
    //const [user, loading, error] = useAuthState(auth);
    //const firebase = useFirebaseApp();
    //const user = useUser();
    /*
    const handleSignIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then(user => console.log(user))
    }
    */



    /*
    const handleSubmit = (e) => {
        firebase.auth().create
        e.preventDefault();
        console.log(email,password);
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
        
    };
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
                            onChange={(event) => setEmail(event.target.value)}
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
                            Sign In
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default AuthPage;
