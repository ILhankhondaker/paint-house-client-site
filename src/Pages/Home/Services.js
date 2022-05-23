import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Paint Roller Covers',
            price: 69,
            description: 'Paint Roller 4 Paint Roller 10 Cm Mini 4 "tiger Tattoo Acrylic Paint',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Paint Roller Set',
            description: 'Polyester + Heavy Duty Handle, - For rough & smooth surfaces, 适用于粗糙光滑表面, - High density, 密度高, - Suitable for latex emulsion & Oil paint',
            price: 167,
            img: cavity
        },
        {
            _id: 3,
            name: 'Paint Roller Brush',
            price: 79,
            description: 'Polyester + Heavy Duty Handle, - For rough & smooth surfaces, 适用于粗糙光滑表面, - High density, 密度高, - Suitable for latex emulsion & Oil paint',
            img: whitening
        },
    ];
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;