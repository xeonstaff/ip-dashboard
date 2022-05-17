import { LabelImportantRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import '../App.css';

function AirQuality({ location }) {
    let [placeURL, setPlaceURL] = useState('')
    let [airpollution, setAirPollution] = useState('')

    useEffect(() => {
        location ?
            setPlaceURL(
                `http://api.airvisual.com/v2/nearest_city?lat=${location.lat}&lon=${location.lng}&key=${process.env.REACT_APP_AIR_QUALITY_KEY}`
            ) :
            setPlaceURL(null)
    }, [location])

    useEffect(() => {
        fetch(placeURL)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            }).then(data => setAirPollution(data.data.current.pollution.aqius))
    }, [placeURL])

    //set classname to vary style based on air quality
    let airclass = ''

    function airpollutioncolor() {
        if (0 < airpollution < 50) {
            airclass = 'good'
        } else if (51 < airpollution < 150) {
            airclass = 'moderate'
        } else if (151 < airpollution < 300) {
            airclass = 'unhealthy'
        } else if (300 > airpollution) {
            airclass = 'hazardous'
        }
    }

    useEffect(() => {
        airpollutioncolor()
    }, [airpollution])


    return (
        <div className={airclass}>
            <u>current air quality</u>
            <div className='airbox'>
                <h1>{airpollution}</h1>
            </div>
            <i>{airclass}</i>
        </div>
    )
}

export default AirQuality