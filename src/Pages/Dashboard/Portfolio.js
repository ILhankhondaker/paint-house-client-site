import React from 'react';
import doctor from '../../assets/images/doctor.png';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter, BsGoogle, BsLinkedin } from 'react-icons/bs';


const Portfolio = () => {
    return (
        <section style={{
            backgroundColor: 'DarkGrey',
        }}
            className='mt-12 flex justify-between items-center'>

            <div className='flex-1 p-10'>
                <h3 className='text-4xl text-orange-600  font-bold mb-5'>Hi, This is Ilhan Khondaker  </h3>
                <h2 className='text-3xl text-white'>I am a wev developer.</h2>
                <p className=''>"Hi, I’m Ilhan Khondaker. I have experience on Html5, CSS3, CSS framework (Bootstrap, Tailwind ), JavaScript, JavaScript library React Firebase , Mongodb WordPress Elementor, Woo-commerce, Mailchimp & Shopify . As a freelancer I complete more than 120+ project .I work at various market places since 2018 with efficiency. I'm a professional web developer so i know how to give the best service than other ."</p>
                <h1 className='flex font-bold flex-nowrap'>MY Social Site : <a href="https://www.facebook.com/ilhan.khondaker" class="button" target='blank'><ImFacebook /> </a>
                    <a href="https://twitter.com/IlhanKhondaker" class="button" target='blank'><BsTwitter /> </a>
                    <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zI3PMS1Irsw2YLRSNagwNjc1NrM0SLJMMjaxMEwytTKoSExJNE02SE0yMTVNSUkyNvTiz8zJSMxTyM7Iz0tJzE4tAgDYCxVv&q=ilhan+khondaker&rlz=1C1CHBF_enBD886BD886&oq=Ilhan+kh&aqs=chrome.1.69i57j46i39i175i199j0i512l2j0i10i22i30j0i22i30l2j69i59.3052j0j7&sourceid=chrome&ie=UTF-8" class="button" target='blank'><BsGoogle /></a>

                    <a href="https://www.linkedin.com/in/ilhan-khondaker-9a46b01b5/"><BsLinkedin></BsLinkedin></a>

                </h1>
            </div>
            <div className='flex justify-between hidden lg:block p-10 '>
                <img className='rounded-full w-56 ' src="https://scontent.fdac24-2.fna.fbcdn.net/v/t1.6435-9/195518759_777353176314051_2441569181417949456_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGEvqCA6Y0JUbznegYTx0OWvJsidAUA-8C8myJ0BQD7wNUrt6tiE5oQrYFypo5WLpQyt628C3-F2O8KpYwvcM14&_nc_ohc=6G-Iaoo6bfUAX9_0iHg&_nc_ht=scontent.fdac24-2.fna&oh=00_AT-fScPlt52pNjz70-j4LLCaKOq7QHowLAyFlj3rqmQkMQ&oe=62B67493" alt="" />
            </div>
        </section>
    );
};

export default Portfolio;