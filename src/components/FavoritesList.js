import React, {useState, useEffect} from 'react';
import { Row, Col, Card, CardImg, Button } from "reactstrap";
import { addFavoriteMeme, deleteMemeFavorite } from '../functions/Querys';
import { getFavoriteMemes } from '../functions/Querys';

const FavoritesList = (props) => {

    const [favoritesList, setFavoritesList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    async function deleteMeme(memeFavorite) {
        const uid = sessionStorage.getItem('uid');
        await deleteMemeFavorite(uid, memeFavorite);
        const favMemes = await getFavoriteMemes(uid);
        setFavoritesList(favMemes.memes);
    }

    useEffect(() => {
        let res = {};
        const getMemes = async () => {
            
            const uid = sessionStorage.getItem('uid');
            console.log(uid + "El id de la sesion");
            const favMemes = await getFavoriteMemes(uid);
            console.log(favMemes);
            setFavoritesList(favMemes.memes);
            setLoading(false);
        }
        getMemes();
    }, []);
    
    return (
        <Row>
            {favoritesList.map((meme, index) => (
                <Col key={index}>
                    <Card>
                        <CardImg style={{height: 200, width: 200}} src={meme.memeFavorite}></CardImg>
                        <h5>{meme.memeComment}</h5>
                        <Button color="danger" onClick={()=>{deleteMeme(meme.memeFavorite)}} variant="contained">Delete</Button>
                    </Card>
                </Col>
            ))}
        </Row>
    )

}

export default FavoritesList;