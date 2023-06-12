import React from 'react';

const Instructors = () => {
    const [instructors, setAllInstructors] = useState([]);

    useEffect(() => {
        fetch('https://snap-school-server-shisir36.vercel.app/users/instructors')
            .then((response) => response.json())
            .then((data) => {
                setAllInstructors(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className=' grid grid-cols-3'>
            {
                instructors.map(instructor => (  
                <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={instructor.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{instructor.name}</h2>
                    <p>{instructor.email}</p>
                </div>
            </div>))
            }
          
        </div>
    );
};

export default Instructors;