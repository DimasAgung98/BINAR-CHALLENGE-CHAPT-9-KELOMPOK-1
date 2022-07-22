import React, { useEffect } from 'react';
//IMPORT COMPONENTS
import Navbar from '../Components/Global/Navbar';
import Faq from '../Components/SupportPage/Faq';
import Footer from '../Components/Global/Footer';

function Support() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <Faq />
            <Footer />
        </>
    )
}

export default Support