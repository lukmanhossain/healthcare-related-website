import React from 'react';
import { useParams } from 'react-router';

const KnowMore = () => {
    const { serviceid } = useParams();
    return (
        <div>
            <h2>This is know more: {serviceid}</h2>
        </div>
    );
};

export default KnowMore;