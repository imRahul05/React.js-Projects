import React, { useState, useRef, useEffect } from 'react';

const StopWatch = () => {
    const [timer, setTimer] = useState(0);
    const interval = useRef(null);

    useEffect(() => {
        clearInterval(interval.current); 
    }, []);

    function start() {
        if(interval.current) 
            return; 
        interval.current = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
    }

    function pause() {
        clearInterval(interval.current);
        interval.current = null;
    }

    function reset() {
        clearInterval(interval.current);
        interval.current = null;
        setTimer(0);
    }

    return (
        <>
            <div>{timer}</div>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default StopWatch;