import {useState, useEffect} from 'react';
function Sample(){     
    const [time,setTime] = useState(new Date());
    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setTime(new Date());
        },1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`
    }


    function padZero(n){
        return(n < 10 ? "0" : "") + n;
    }

    return(
        <div className='clock-cls'>
            <span className='clc-cls'>{formatTime()}</span>
        </div>
    );
} 
export default Sample