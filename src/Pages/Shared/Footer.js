import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter, BsGoogle } from 'react-icons/bs';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="footer p-4 bg-neutral text-neutral-content">
            <div className="container mx-auto flex items-center justify-between">
                <div className="items-center grid-flow-col">
                    <strong className='text-white'> Ilhan Khondaker | &copy; {year}  </strong>
                </div>
                <div className="flex justify-end">
                    <a href="https://www.facebook.com/ilhan.khondaker" class="button" target='blank'><ImFacebook /></a>
                    <a href="https://twitter.com/IlhanKhondaker" class="button" target='blank'><BsTwitter /></a>
                    <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zI3PMS1Irsw2YLRSNagwNjc1NrM0SLJMMjaxMEwytTKoSExJNE02SE0yMTVNSUkyNvTiz8zJSMxTyM7Iz0tJzE4tAgDYCxVv&q=ilhan+khondaker&rlz=1C1CHBF_enBD886BD886&oq=Ilhan+kh&aqs=chrome.1.69i57j46i39i175i199j0i512l2j0i10i22i30j0i22i30l2j69i59.3052j0j7&sourceid=chrome&ie=UTF-8" class="button" target='blank'><BsGoogle /></a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;