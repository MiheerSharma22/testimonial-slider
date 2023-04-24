import "./App.css";
import TestimonialContainer from "./components/TestimonialContainer";
import data from "./data.js"
import { useState } from "react";

function App() {
  const [reviews, setReview] = useState(data);

  return (
    <div className="container min-w-[100vw] min-h-[100vh] bg-[rgb(229,231,235)] flex flex-col justify-center items-center">

      <div>
        <h1 className="text-4xl font-semibold mb-2">Our Testimonials</h1>
        <div className="underline w-[50%] h-[4px] mx-auto bg-[rgb(167,139,250)]"></div>
      </div>

      <TestimonialContainer reviews = {reviews}/>
      
    </div>
  );
}

export default App;
