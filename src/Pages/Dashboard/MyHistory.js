import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const MyHistory = () => {
    const [user] = useAuthState(auth);
    console.log("my profile", user)

    return (
        <div className='  bg-orange-600 px-10 py-14 flex justify-center'>
            <div>
                <h2 className='font-bold text-center text-3xl text-white m-5'>User Information... </h2>
                <img className='item-center rounded' src={user.photoURL} alt="" srcset="" />

                <h1 className=' font-bold text-white'>My Name: {user.displayName}</h1>
                <h1 className=' font-bold text-white'>E-mail: {user.email}</h1>
                <h1 className=' font-bold text-white'>Phone: {user.phoneNumber}</h1>

            </div>

        </div>
    );
};

export default MyHistory;