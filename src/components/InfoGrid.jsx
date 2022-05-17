import React from 'react'
import UserAgent from './UserAgent'
import AirQuality from './AirQuality'

import '../App.css';

function InfoGrid(props) {

    return (
        <div class="grid-container">
            <div class="grid-item"><AirQuality location={props.location} /></div>
            <div class="grid-item"><UserAgent /></div>
        </div>


    )
}

export default InfoGrid
