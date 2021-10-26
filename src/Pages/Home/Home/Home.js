import React from 'react';
import './Home.css';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;