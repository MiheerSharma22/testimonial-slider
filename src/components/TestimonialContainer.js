import { useState } from 'react';
import TestimonialContent from './TestimonialContent';
import {FaChevronLeft , FaChevronRight} from 'react-icons/fa';

function TestimonialContainer( {reviews} ) {
    
    const [currReview, setcurrReview] = useState(reviews[0]);
   
    function nextLeftTestimonialHandler() {
        let nextLeft = reviews.indexOf(currReview) - 1;
        if(nextLeft < 0) {
            nextLeft = reviews.length-1;
        }
        setcurrReview(reviews[nextLeft]);
    }

    function nextRightTestimonialHandler() {
        let nextRight = reviews.indexOf(currReview) + 1;
        if(nextRight >= reviews.length) {
            nextRight = 0;
        }
        setcurrReview(reviews[nextRight]);
    }

    function randomTestimonialHandler() {
        let index = Math.floor(Math.random() * reviews.length);
        setcurrReview(reviews[index]);
    }

        return(
            <div className="testimonial-container w-[80vw] md:w-[700px] flex flex-col justify-center items-center md:h-[450px] bg-white mt-[2rem] rounded-lg shadow-md hover:shadow-xl transition-all duration-700 p-[20px] relative">

                <TestimonialContent  review={currReview}/>

                <div className='mx-auto w-fit mt-[2.5rem] flex gap-5'>
                            <button className='flex jusitfy-center items-center' onClick={nextLeftTestimonialHandler}>
                                    <FaChevronLeft className='inline opacity-[40%] hover:opacity-[60%] text-[1.5rem] text-violet-800  '/>
                            </button>

                            <button className='flex jusitfy-center items-center' onClick={nextRightTestimonialHandler}>
                                    <FaChevronRight className='inline opacity-[40%] text-[1.5rem] hover:opacity-[60%] text-violet-800 '/>
                            </button>
                    </div>

                    <button className=' bg-violet-400 text-white px-[1rem] py-[0.75rem] rounded-md hover:bg-violet-500 transition-colors duration-150 font-medium mt-[1.5rem] text-[1.1rem]' onClick={randomTestimonialHandler}>Random Review</button>
                
            </div>
        );
}

export default TestimonialContainer;