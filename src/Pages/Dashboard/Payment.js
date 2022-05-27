import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

// const stripePromise = loadStripe('pk_test_51KzgdMJVa6zVY99CaGts94G8qqJirQWPMAET7VBqrec0wWSxhuuRtgQNPA3SuwzjQKOv6QWwjgMWEfZ83N1qLNUU00IX1ciL6e');
const stripePromise = loadStripe('pk_test_51L0gwHIbn472dV6cig2hG0S3HTXVc81EvxJILuF1G9zZzjr01wa543el0GWquXUkqS4Eto0K0kBcasAclQ0zychE002lPRrXYz');

const Payment = () => {
    const { id } = useParams();
    // const url = `http://localhost:5000/booking/${id}`;
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id],
        () => fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-orange-400 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-white font-bold">Hey, {appointment.patientName}</p>
                    <h2 class="card-title">Please Pay for:  {appointment.treatment}</h2>
                    <p className='font-bold'>Your Order Date: <span className='text-orange-700'>{appointment.date}</span></p>
                    <p className='font-bold'>Per Piece Price: {appointment.price}$</p>
                    <p className='font-bold'>Total Quantity: {appointment.slot} piece</p>
                    <p className='font-bold'>Please pay: {appointment.price * appointment.slot}$</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-600">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;