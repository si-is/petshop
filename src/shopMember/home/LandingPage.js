import React from 'react'
import CardItem from '../cardProduct/CardItem'
import ImageCarousel from '../carousel/ImageCarousel'
import TrackPetShop from '../carousel/TrackPetShop'
import Hearder from '../herader/Hearder'
import DailyUpdate from '../carousel/DailyUpdate'
import MoreView from '../carousel/MoreView'


function LandingPage() {
    return (
        <div>

            <Hearder />
            <ImageCarousel />
            <TrackPetShop />
            <DailyUpdate />
            <MoreView />
            <CardItem />

        </div>
    )
}

export default LandingPage