import React, { useEffect } from 'react';
//IMPORT COMPONENTS
import Navbar from "../Components/Global/Navbar";
import List from '../Components/ListGame/Listgame';
import Footer from "../Components/Global/Footer";

function Listgame() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <List />
            <Footer />
        </>
    )
}

export default Listgame