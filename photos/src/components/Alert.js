import React, { useState, useEffect } from 'react';

import "./Alert.css"

const Alert = (props) => {

    const {alertAPILink} = props

    const [alerts,setAlerts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const fetchAlerts = async () =>{
        try {
            const response = await fetch(alertAPILink);
            const data = await response.json();
            const alerts = data.map((item) => item.description)
            setAlerts(alerts);
            setCurrentIndex(0);
        }catch (error) {
            console.log('error', error);
            setAlerts([]);
        }
    }

    useEffect(() => {
        fetchAlerts();

        const intervalId = setInterval(() => {
            fetchAlerts();
        },15*60*1000); // run fetchAlerts() every 15 minutes

        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setCurrentIndex((currentIndex + 1) % alerts.length)
        },10*1000)

        return () => clearTimeout(timerId);
    },[currentIndex,alerts])


    return (
        <div className="alert-region">
            {alerts.length > 0 ? (
                <h1>{alerts[currentIndex]}</h1>
            ): (<p></p>)}
        </div>
    )
}

export default Alert