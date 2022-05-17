import React, { useState, useEffect } from 'react'
import Map from './Map'

import '../App.css';

function CityInfo() {
    const [infoURL, setInfoURL] = useState('')
    const [cityInfo, setCityInfo] = useState('')
    const [location, setLocation] = useState('')

    useEffect(() => {
        setLocation({ lat: cityInfo.latitude, lng: cityInfo.longitude })
    }, [cityInfo])


    //fetch current visitor's location & IP address
    const ip_url = "https://geolocation-db.com/json/"
    const api_key = process.env.REACT_APP_GEOLOC

    useEffect(() => {
        fetch(ip_url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                console.log(response);
            }).then(data => setInfoURL(
                `http://apiip.net/api/check?ip=${data.IPv4}&accessKey=${api_key}`
            ))
    }, [])

    //fetch other information based on IP
    useEffect(() => {
        fetch(infoURL)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            }).then(data => setCityInfo(data)
            )
    }, [infoURL])

    return (
        <>
            <header style={{
                backgroundImage: `url("https://via.placeholder.com/500")`
            }}>
                <div className="headerbox">
                    <h1 className='cityname'>
                        {cityInfo.city}
                    </h1>
                </div>
                <div className="headerbox">
                    <p>({cityInfo.latitude},{cityInfo.longitude})</p>
                </div>
                <div className="headerbox">
                    <h3>
                        {cityInfo.countryName}  {cityInfo.countryFlagEmoj}
                    </h3>
                </div>
            </header>
            <Map center={location} cityInfo={cityInfo} zoom={12} />
        </>
    )
}

export default CityInfo
