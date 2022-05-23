import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials';
import BusinesSumary from './BusinesSumary';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Services></Services>
            <Info></Info>
            <BusinesSumary></BusinesSumary>
            <Testimonials></Testimonials>

            <Contact></Contact>

            <Footer></Footer>
        </div>
    );
};

export default Home;