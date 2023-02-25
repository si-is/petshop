import React from 'react'
import AdsContainer from '../adsContainer/AdsContainer'
import ImageCarousel from '../carousel/ImageCarousel'
import TrackPetShop from '../carousel/TrackPetShop'
import Hearder from '../herader/Hearder'


function LandingPage() {
    return (
        <div>
            <Hearder />
            <ImageCarousel />
            <TrackPetShop />
            <AdsContainer />
        </div>
    )
}

export default LandingPage