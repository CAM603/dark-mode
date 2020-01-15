import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Coin = () => {
    const [coinData, setCoinData] = useState({});
    const [coinPic, setCoinPic] = useState({});
    const [description, setDescription] = useState('')
    const { id } = useParams();
    console.log(coinData)
    useEffect(() => {
        axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(res => {
            setCoinData(res.data);
            setCoinPic(res.data.image);
            setDescription(res.data.description.en)
        })
        .catch(err => console.log(err));
    }, []);
    return (
    <div className="coin">
        <div className="title">
            <h1>About {coinData.name}</h1>
        </div>
        <div className="logo">
            <img src={coinPic.large} height="40" alt={coinData.name} />
        </div>
        <div className="description">
            <p>{description.replace(/<\/?a[^>]*>/g, "")}</p>
        </div>
    </div>
    )
}

export default Coin;
