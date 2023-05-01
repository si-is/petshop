import React from 'react'
import Hearder from '../herader/Hearder'
import '../css/singleProduct.css'
function SingleProduct() {
    return (
        <div>
            <Hearder />
            <div className='singleProductContainer'>
                <div className='singleImage'>
                    <img src='https://i.pinimg.com/originals/ae/6f/20/ae6f2064fc72b25293a3ce95f3dec347.jpg' id='imgframe' />
                </div>
                <div className='singleInfo'>
                    <div>Licks Peanut Butter for dogs 340 gm</div>
                    <div id='singleDis'>IS PEANUT BUTTER DOG FOR DOGS? We noticed your doggos love for treats and developed one to satiate their craving for we present you with a delicious dog treat - Peanut Butter. LICKS PEANUT BUTTER comes with the goodness of peanuts, flax seeds, and the richness of honey.</div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct