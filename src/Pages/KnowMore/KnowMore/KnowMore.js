import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import details from './FakeData';

const KnowMore = () => {
    const { serviceid } = useParams();

    const [detail, setDetail] = useState({});

    useEffect(() => {
        let detail = details.find(d => d.id == serviceid)
        setDetail(detail);
    }, [serviceid])

    return (
        <div>
            <img src={detail?.img} alt="" />
            <h3>{detail?.name}</h3>
            <p>{detail?.description}</p>
        </div>
    );
};

export default KnowMore;