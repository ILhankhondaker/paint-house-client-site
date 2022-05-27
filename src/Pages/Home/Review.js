import React from 'react';
import Service from './Service';
import { BsFillStarFill } from 'react-icons/bs';
const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div>
                    <h4 className='text-xl font-bold'>Name: {review.name}</h4>

                    <p>Area: {review.location}</p>
                </div>
                <h1 className='font-bold flex'>Rating: {review.review}<BsFillStarFill /> </h1>
                <p> {review.comment}</p>

                <div className="flex items-center">


                </div>
            </div>
        </div>
    );
};

export default Review;