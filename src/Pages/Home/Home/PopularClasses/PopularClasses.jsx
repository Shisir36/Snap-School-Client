import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PopularClasses = () => {
    const [popularStudent, setPopularStudent] = useState([])
    useEffect(()=>{
      fetch("http://localhost:5000/classes/enrollment")
      .then(o)
    },[])
    return (
        <div>
            
        </div>
    );
};

export default PopularClasses;