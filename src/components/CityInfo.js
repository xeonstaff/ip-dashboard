import React, { useState, useEffect } from 'react'
import '../App.css';


function CityInfo() {
    const [infoURL, setInfoURL] = useState('')
    const [cityInfo, setCityInfo] = useState('')
    console.log(cityInfo)

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
    }, [])


    return (
        <>
        <header>
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
        </>
    )
}

export default CityInfo
