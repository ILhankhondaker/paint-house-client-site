import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-20'>

            <InfoCard cardTitle="Opening Hours" info="24h/7day we provide our service" img={clock}></InfoCard>

            <InfoCard cardTitle="Our Locations" info="Our Permanent Office is in China" img={marker}></InfoCard>

            <InfoCard cardTitle="Contact Us" info="Phone +880168   emai:painthoust@gamil.com" img={phone}></InfoCard>
        </div>
    );
};

export default Info;