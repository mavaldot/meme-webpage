import React from 'react';
import { Row, Col, Card, CardImg } from "reactstrap";

const MemeList = (props) => {

    return (
        <Row>
            {props.memes.map((meme, index) => (
                <Col key={index}>
                    <Card>
                        <CardImg style={{height: 200, width: 200}} src={meme.url}></CardImg>
                    </Card>
                </Col>
            ))}
        </Row>
    )

}

export default MemeList;