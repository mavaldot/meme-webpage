import React, { useState } from 'react';
import { Row, Col, Card, CardImg, Button } from "reactstrap";
import { addFavoriteMeme } from '../functions/Querys';

const MemeList = (props) => {

    const [id, setId] = useState(1);

    async function addMeme(url) {
        const uid = sessionStorage.getItem('uid');
        console.log(uid);
        let message = prompt("Please add a personalized message");
        
        addFavoriteMeme(uid, id, url, message);
        console.log("Add meme");
        setId(id+1);
    }

    return (
        <Row>
            {props.memes.map((meme, index) => (
                <Col key={index}>
                    <Card>
                        <CardImg style={{height: 200, width: 200}} src={meme.url}></CardImg>
                        <Button variant="contained" color="primary" onClick={() => {addMeme(meme.url)}}>Add to favorites</Button>
                    </Card>
                </Col>
            ))}
        </Row>
    )

}

export default MemeList;