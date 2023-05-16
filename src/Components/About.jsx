import React from 'react';
import person from '../assets/images/about_us/person.jpg'
import parts from '../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='md:flex justify-center gap-5 mt-16 mb-28'>
            <div className='relative'>
                <img src={person} alt="" className='w-3/4 rounded-xl' />
                <div className='w-1/2 h-1/2 absolute right-0 bottom-0 '>
                <img src={parts} className='rounded-xl border-8 border-white' alt="" />
                </div>
                

            </div>
            <div className='px-10'>
                <p className='text-yellow-500 font-bold text-xl'>About</p>
                <p className='text-5xl font-bold'>We are qualified & of experience in this field</p>
                <p className='my-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
                <button className="btn btn-outline btn-secondary mt-5">Get more info</button>

            </div>
        </div>
    );
};

export default About;