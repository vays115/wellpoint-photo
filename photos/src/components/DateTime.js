import React,{useState,useEffect} from 'react'
import './DateTime.css'

const DateTime = () => {

    const [time,setTime] = useState(new Date());
    const [date, setDate] = useState(new Date());


    useEffect(()=>{
        const intervalId = setInterval(() =>{
            setTime(new Date());
        },1000)
        return () => {
            clearInterval(intervalId);
        }
    },[])

    useEffect(() => {
        const intervalId = setInterval(() => {
          setDate(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);

      const options = { weekday: 'short', month: 'short', day: 'numeric', suffix: 'long' };
      const formattedDate = date.toLocaleDateString('en-US', options);
    


    return (
        <div className="datetime-region">
      <h2>{time.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase()}</h2>
      <h2>{formattedDate}</h2>

        </div>
    )
}

export default DateTime