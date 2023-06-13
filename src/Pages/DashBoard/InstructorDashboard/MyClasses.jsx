import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Authcontext } from '../../../Provider/AuthProvider';
import { FaRegEdit } from 'react-icons/fa';

const MyClasses = () => {
    const [myClasses, setMyClasses] = useState([])
    const { currentUser } = useContext(Authcontext)

    useEffect(() => {
        fetch(`http://localhost:5000/myClasses/?email=${currentUser.email}`)
            .then(res => res.json())
            .then(data => {
                setMyClasses(data)
                console.log(data);
            })
    }, [])

    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-xl font-bold'>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myClasses.map(myclass => (<tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={myclass.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{myclass.name}</div>
                                        
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm font-bold">{myclass.status}</span>
                            </td>
                            <td>{myclass.feedback}</td>
                            <th>
                                <button className="lbtn btn-ghost btn-xs inline-flex items-center space-x-2 "><FaRegEdit className='text-3xl pl-3'></FaRegEdit><span className=' text-[18px]'> Update</span></button>
                            </th>
                        </tr>)

                        )
                    }
                </tbody>
                {/* foot */}
            </table>
        </div>
    );
};

export default MyClasses;
