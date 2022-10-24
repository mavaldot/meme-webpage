import React, { useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import MemeList from '../components/MemeList';
import { getFavoriteMemes } from '../functions/Querys';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import FavoritesList from '../components/FavoritesList';

const FavoritesPage = (props) => {
    
    const [favoritesList, setFavoritesList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    const auth = getAuth();
    useEffect(() => {
        let res = {};
        const getMemes = async () => {
            
            const uid = sessionStorage.getItem('uid');
            console.log(uid + "El id de la sesion");
            const favMemes = await getFavoriteMemes(uid);
            console.log(favMemes);
            setFavoritesList(favMemes.memes);
            //addFavoriteMeme(uid, 2, "chiste", "Muy bueno")
            //console.log("wasdsup")
            //console.log(myMemes);
            //deleteFavoriteMeme(uid, 2)
            //updateFavoriteMemeComment(uid,1,"Mateo es muy inteligente")

            setLoading(false);
        }
        getMemes();
    }, []);

    return (
        <div>
            <div>
                <Container>
                    <Button color="danger" href="/memes" variant="contained">
                        Back
                    </Button>
                    <FavoritesList memes={favoritesList}/>
                </Container>
            </div>
        </div>
    )
}

export default FavoritesPage;