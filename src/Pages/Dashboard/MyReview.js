import React from "react";
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from "../Shared/PrimaryButton";

const MyReview = () => {
    return (
        <div className='  bg-orange-600 px-10 py-14 '>
            <div className='text-center pb-14 text-white'>

                <h1 className='text-4xl font-bold'>Submit Your Review About Us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                {/* input img  */}
                <input
                    type="file"
                    placeholder="input product image"
                    className="input input-bordered w-full max-w-xs"

                />
                <input
                    type='text'
                    placeholder='Your Name'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Area'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Rating: 5/5'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your Comment'
                    rows={6}
                ></textarea>
                <PrimaryButton >Submit Review</PrimaryButton>
            </div>
        </div>
    );
};


export default MyReview;