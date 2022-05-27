import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price, img, discription } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <h3 className='font-bold'><small>Per piece Price: {price}$</small></h3>
                <p>{discription}</p>
                {/* <p>{
                    slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-500'>Try another date.</span>
                }</p> */}
                {/* <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p> */}

                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm btn-warning text-white uppercase  bg-orange-600"
                    >purchase Now</label>
                </div>
            </div>
        </div>
    );
};

export default Service;