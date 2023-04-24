import {FaQuoteRight , FaQuoteLeft, FaChevronLeft , FaChevronRight} from 'react-icons/fa'

function TestimonialContent ( {review} ) {
    const image = review.image;
    const name = review.name;
    const job = review.job;
    const reviewText = review.text;

        return(
            <div className='text-center'>
                <div className="testimonial-content-container text-center">

                    <img src={image} className="w-[140px] aspect-square rounded-full absolute top-[-3rem] left-[4rem]" draggable="false"></img>

                    <p className="name text-3xl font-medium mb-[0.3rem] mt-[1rem]">
                            {name}
                    </p>

                    <p className="job opacity-[30%] uppercase text-sm font-medium">    
                            {job}
                    </p>

                    <FaQuoteLeft className='mx-auto mt-[2rem] opacity-[30%]'/>

                    <p className="mt-[1rem] text-center font-semibold opacity-[50%]">
                            {reviewText}
                    </p>

                    <FaQuoteRight className='mx-auto mt-[1rem] opacity-[30%]'/>
                </div>
            </div>
            
        );
}

export default TestimonialContent;