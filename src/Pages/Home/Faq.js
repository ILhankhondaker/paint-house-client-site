import React from 'react';

const Faq = () => {
    return (
        <div className='bg-slate-100 p-5'>
            <div className='flex justify-center'>
                <div>
                    <h2 className='text-3xl font-bold'>F A Q . . .</h2>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    This is Wholesale store?
                </div>
                <div class="collapse-content">
                    <p>Yes this is Wholesale store </p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    This is Wholesale store?
                </div>
                <div class="collapse-content">
                    <p>Yes this is Wholesale store </p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Do you accept card payments?
                </div>
                <div class="collapse-content">
                    <p>Yes we accept.  </p>
                </div>
            </div>
            <div tabindex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Do you give cash on delivery?
                </div>
                <div class="collapse-content">
                    <p>Sorry , We  accept only pre-order </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;