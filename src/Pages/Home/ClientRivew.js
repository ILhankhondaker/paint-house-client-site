import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';


const ClientRivew = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Hosain Fahim',
            review: '5/5',
            comment: 'There service is to much good.',
            location: 'America',
            img: people1
        },
        {
            _id: 2,
            name: 'Xefar zo',
            review: '5/5',
            comment: 'I am satisfied about there service.',
            location: 'Canada',
            img: people2
        },
        {
            _id: 3,
            name: 'Samira Saba',
            review: '4.5/5',
            comment: 'All is o, but late delivery. ',
            location: 'UK',
            img: people3
        },
    ];
    return (
        <section className='my-28'>
            <div className='flex justify-center'>
                <div>
                    <h2 className='text-3xl font-bold'>Our Honorable Customer Rivew . . .</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default ClientRivew;