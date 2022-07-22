import React, { useEffect } from 'react';
//IMPORT COMPONENTS
import Navbar from '../Components/Global/Navbar';
import Content from '../Components/Leaderboard/Leaderboard';
import Footer from '../Components/Global/Footer';

function Leaderboard() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <Content />
            <Footer />
        </>
    )
}

export default Leaderboard;