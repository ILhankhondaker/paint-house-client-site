import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        // style={{
        //     background: `url(${bg})`
        // }}
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                {/* <img src={chair} class="max-w-sm rounded-lg shadow-2xl" /> */}
                <div>
                    <h1 className="text-fuchsia-900 text-7xl font-bold">Build The Future...</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                {/* slider  */}

                <div class="carousel w-full">
                    <div id="slide1" class="carousel-item relative w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_AUVj52rTxBbBNElZnRG2c_SP8_O5N0y0_g&usqp=CAU" /> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" class="btn btn-circle">❮</a>
                            <a href="#slide2" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" class="carousel-item relative w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8hSc2JG1fIL4Ij9h86rH7q27xVfB9hzCAA&usqp=CAU" /> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" class="btn btn-circle">❮</a>
                            <a href="#slide3" class="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" class="carousel-item relative w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpomCUgmcfD-_3fk349tJRlLrZvYuUx8W8tx89e3RDRSx7oi1JXWrXph7e7rOp1kG0KCc&usqp=CAU" /> /
                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" class="btn btn-circle">❮</a>
                            <a href="#slide4" class="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Banner;