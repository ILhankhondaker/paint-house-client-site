import React from 'react';
import doctor from '../../assets/images/doctor.png';

const BusinesSumary = () => {
    return (
        <section style={{
            backgroundColor: 'DarkGrey',
        }}
            className='flex justify-center items-center'>

            <div className='flex-1 p-5'>
                <h3 className='text-4xl  font-bold'>Our Business Summary... </h3>
                <h2 className='text-3xl text-white'>We usually sell manufacturer's parts</h2>
                <p className=''>we provide our business service almost 156 countries , we complete around 987+ project of different client and they are all happy about our service .</p>
            </div>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
        </section>
    );
};


export default BusinesSumary;