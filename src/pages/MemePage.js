import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';

import { getMemePage } from '../util/requests';
import MemeList from '../components/MemeList';

const MemePage = (props) => {
    
    const [memeList, setMemeList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        let res = {};
        const getMemes = async () => {
            res = await getMemePage(currentPage);
            setMemeList(res.data.memes);
            //console.log(res);
            //console.log('a');
            //console.log(res.data.memes)
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
                </Container>
            </div>
        );
    }


}
export default MemePage;