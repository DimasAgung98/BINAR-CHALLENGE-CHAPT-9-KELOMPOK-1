import React, { useEffect } from 'react';
import Navbar from '../../Components/HomePage/Navhome'
import RpsPage from '../../Components/Game/RpsPage'




function Rps() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Navbar />
            <RpsPage />
        </>
    )
}

export default Rps