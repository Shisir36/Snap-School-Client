import { useState } from "react";
import { useEffect } from "react";

 export const useClassesData = () => {
    const [classes, setClasses] = useState([]);
    useEffect(() => {
      fetch('https://snap-school-server.vercel.app/classes')
        .then((response) => response.json())
        .then((data) => {
          setClasses(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    return classes;
  };