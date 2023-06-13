import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { Authcontext } from '../Provider/AuthProvider';
const useCart = () => {
    const { currentUser,loading } = useContext(Authcontext);

    const { refetch, data: classCart = [] } = useQuery({
        queryKey: ['classesCart', currentUser?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classesCart?email=${currentUser?.email}`)
            return res.json();
        },
    })

    return [classCart, refetch]

}
export default useCart;
