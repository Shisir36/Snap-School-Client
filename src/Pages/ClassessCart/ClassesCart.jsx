import React from 'react';
import Classes from '../Components/Classes/Classes';
import { useClassesData } from '../../Hooks/Hook';

const ClassesCart = () => {
    const classes = useClassesData();
    return (
        <div>
             <div className=" md:h-80 h-20 mt-2 bg-cover" style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")'
            }}>
                <span className=" titles md:text-6xl text-4xl text-white md:absolute md:right-[40%] md:top-36 ml-24 ">Our Classes</span>
            </div>
            <div className="md:grid grid-cols-3 gap-4 mt-5 px-8">
           {
            classes.map(classItem => <Classes classItem={classItem} key={classItem.id} ></Classes>)
           } 
           </div>
        </div>
    );
};

export default ClassesCart;