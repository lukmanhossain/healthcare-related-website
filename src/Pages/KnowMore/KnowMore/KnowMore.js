import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import details from './FakeData';
import './KnowMore.css'

const KnowMore = () => {
    const { serviceid } = useParams();

    const [detail, setDetail] = useState({});

    useEffect(() => {
        let detail = details.find(d => d.id == serviceid)
        setDetail(detail);
    }, [serviceid])

    return (
        <div className="details-container mt-5">
            <img src={detail?.img} alt="" />
            <h3 className="p-3">{detail?.name}</h3>
            <p className="p-2 mx-3">{detail?.description}</p>
        </div>
    );
};

export default KnowMore;