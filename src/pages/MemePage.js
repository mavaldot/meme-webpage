import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Button from "@mui/material/Button";
import { getMemePage } from '../util/requests';
import MemeList from '../components/MemeList';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const MemePage = (props) => {

    const [memeList, setMemeList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const auth = getAuth();



    const registerOnDataBase = async (e) => {
        try {
          onAuthStateChanged(auth, async (user) => {
            if (user) {
              const uid = user.uid;
              //Aqui va el metodo que usa el id del usuario
            } else {
            }
          });
    
        } catch (error) {
          alert(error)
        }
      }




    useEffect(() => {
        let res = {};
        const getMemes = async () => {
            res = await getMemePage(currentPage);
            setMemeList(res.data.memes);
            console.log(res);
            console.log('a');
            console.log(res.data.memes)
            setLoading(false);
        }
        getMemes();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    else {
        return (
            <div>
                <Container>
                    <MemeList memes={memeList}></MemeList>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Test
                    </Button>

                </Container>
            </div>
        );
    }


}

export default MemePage;