import React from 'react';
import doctor from '../../assets/images/doctor.png';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter, BsGoogle } from 'react-icons/bs';

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
                <h1 className='flex'>Our Social Site : <a href="https://www.facebook.com/ilhan.khondaker" class="button" target='blank'><ImFacebook /> </a>
                    <a href="https://twitter.com/IlhanKhondaker" class="button" target='blank'><BsTwitter /> </a>
                    <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zI3PMS1Irsw2YLRSNagwNjc1NrM0SLJMMjaxMEwytTKoSExJNE02SE0yMTVNSUkyNvTiz8zJSMxTyM7Iz0tJzE4tAgDYCxVv&q=ilhan+khondaker&rlz=1C1CHBF_enBD886BD886&oq=Ilhan+kh&aqs=chrome.1.69i57j46i39i175i199j0i512l2j0i10i22i30j0i22i30l2j69i59.3052j0j7&sourceid=chrome&ie=UTF-8" class="button" target='blank'><BsGoogle /></a></h1>
            </div>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
        </section>
    );
};


export default BusinesSumary;