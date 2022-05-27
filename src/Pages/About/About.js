import React from 'react';

const About = () => {
    return (
        <div className='bg-slate-100 p-5'>
            <div className='flex justify-center'>
                <div>
                    <h2 className='text-3xl font-bold text-orange-600'>Blog . . .</h2>
                </div>
            </div>
            <div tabindex="0" class="m-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <h1 className='text-2xl font-bold'>Ans:</h1>
                    <p>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.</p>
                    <h3 className='font-bold'>Optimizing performance in a React application</h3>
                    <p>1. Keeping component state local where necessary.</p>
                    <p>2. Memoizing React components to prevent unnecessary re-renders.</p>
                    <p>3. Code-splitting in React using dynamic import()</p>
                    <p>4. Windowing or list virtualization in React.</p>
                    <p>5. Lazy loading images in React.</p>
                </div>
            </div>
            <div tabindex="0" class="m-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div class="collapse-content">
                    <h1 className='text-2xl font-bold'>Ans:</h1>
                    <p className='font-bold'>There are four main types of state you need to properly manage in your React apps: </p>
                    <p>1. Local state.</p>
                    <p>2. Global state.</p>
                    <p>3. Server state.</p>
                    <p>4. URL state.</p>
                </div>
            </div>
            <div tabindex="0" class="m-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <h1 className='text-2xl font-bold'>Ans:</h1>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object </p>
                </div>
            </div>
            <div tabindex="0" class="m-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts
                </div>
                <div class="collapse-content">
                    <h1 className='text-2xl font-bold'>Ans:</h1>
                    <p>One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>
                </div>
            </div>
            <div tabindex="0" class="m-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                </div>
                <div class="collapse-content">
                    <h1 className='text-2xl font-bold'>Ans:</h1>
                    <p>I will map the Array Products first,  than i receive single product object:

                        {/* {
                    Products.map(Product=> <Product
                        key={Product._id}
                        naem={product.name}
                        Product={Product}
                    ></Product>)
                    } */}
                    </p>
                </div>
            </div>
            <div tabindex="0" class="m-5 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    What is a unit test? Why should write unit tests?
                </div>
                <div class="collapse-content">
                    <h1 className='text-2xl font-bold'>Ans:</h1>
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test." </p>
                </div>
            </div>

        </div>
    );
};

export default About;