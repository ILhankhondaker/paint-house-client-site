import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate()
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={service.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <h3 className='text-2xl'>Per Pice Price: {service.price}$</h3>
                <p>{service.description}</p>
                <div className='text-center mt-8'>
                    <button onClick={() => navigate('/purchase')} className=' btn btn-sm btn-warning text-white uppercase  bg-orange-600'>purchase Now</button>
                </div>
            </div>


        </div>
    );
};

export default Service;