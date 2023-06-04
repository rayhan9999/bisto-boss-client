import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading='check it out' heading="Featured Item"></SectionTitle>
            <div className='md:flex justify-center items-center  bg-slate-500 bg-opacity-60  pb-20 pt12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20,2029</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, aliquam itaque. Maxime, ullam! Facilis eligendi minima animi consequuntur consequatur tenetur similique dicta. Earum quisquam quae neque blanditiis deleniti modi obcaecati quaerat magni consequatur architecto aliquid nam ratione officia asperiores ullam dicta commodi ducimus, hic, laudantium cupiditate. Minus assumenda eaque voluptatibus?</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;