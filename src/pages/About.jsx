import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";
// import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
  About Us
</h1>
<p className="text-gray-600 tracking-wide leading-8">
  At <span className="font-bold">Vistaxplore Travel</span>, we believe that travel is more than just  
  visiting new places—it's about experiencing cultures, creating memories, and discovering the  
  extraordinary. Whether you're looking for adventure, relaxation, or a deep dive into  
  the world's hidden treasures, we are here to make your journey seamless and unforgettable.  
  Our passion for exploration drives us to curate the best travel experiences, tailored to your  
  unique desires.
</p>
<br />
<p className="text-gray-600 tracking-wide leading-8">
  With a team of experienced travel enthusiasts, we specialize in crafting personalized itineraries,  
  ensuring every detail is taken care of—from flights and accommodations to immersive local experiences.  
  No matter where your wanderlust takes you, <span className="font-bold">Vistaxplore Travel</span> is your trusted companion  
  for a journey beyond expectations. Let’s explore the world together!
</p>

        </div>
        <Location />
      <BlogsComp />
      </div>
      
    </>
  );
};

export default About;