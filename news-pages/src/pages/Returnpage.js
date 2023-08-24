import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import ReturnArticles from './Categories/ReturnArticle';
import { useLocation } from 'react-router-dom';

const header_height = '101px';

const ReturnPage = (props) => {
    const [txtvalue, settxtValue] = useState([]);
    const [data, setData] = useState([]);

    const location = useLocation(); // useLocation 훅은 최상위 레벨에서 호출

    useEffect(() => {
        console.log(location);
        // settxtValue(location);
    }, [location]);

    function propFunction(text) {
        settxtValue(text);
    }

    return (
        <div
            className="MainPage"
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: `calc(100% - ${header_height})`,
            }}
        >
            <Sidebar propFunction={txtvalue} />
            <ReturnArticles news={location} />
        </div>
    );
};

export default ReturnPage;
