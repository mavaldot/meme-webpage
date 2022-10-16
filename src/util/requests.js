import axios from 'axios';

export async function getMemePage(pageNum) {
    const url = `https://api.imgflip.com/get_memes`
    const response = await axios.get(url);
    return response.data;
}