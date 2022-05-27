import React from 'react';

const InfoCard = ({ img, cardTitle, info }) => {
    return (
        <div className="card lg:card-side  shadow-xl  bg-orange-600">
            <figure className='pl-5'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white  ">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default InfoCard;