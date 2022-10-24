import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Button from "@mui/material/Button";
import { getMemePage } from '../util/requests';
import MemeList from '../components/MemeList';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {getFavoriteMemes, addFavoriteMeme, deleteFavoriteMeme, updateFavoriteMemeComment} from "../functions/Querys" 

const MemePage = (props) => {

    const [memeList, setMemeList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const auth = getAuth();
    useEffect(() => {
        let res = {};
        const getMemes = async () => {
            res = await getMemePage(currentPage);
            setMemeList(res.data.memes);
            //console.log(res);
            //console.log('a');
            //console.log(res.data.memes)
            setLoading(false);

            const uid = sessionStorage.getItem('uid');
            console.log(uid + "El id de la sesion");
            //getFavoriteMemes(uid)
            //addFavoriteMeme(uid, 2, "chiste", "Muy bueno")
            //console.log("wasdsup")
            //console.log(myMemes);
            //deleteFavoriteMeme(uid, 2)
            //updateFavoriteMemeComment(uid,1,"Mateo es muy inteligente")


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
                    <Button href="/favorites" variant="contained">
                        Favorites
                    </Button>
                    <MemeList memes={memeList}></MemeList>
                </Container>
            </div>
        );
    }


}

export default MemePage;