import React from 'react'
import BlogsCard from "./BlogsCard"
import Img1 from '../../assets/places/tajmahal.jpg'
import Img2 from '../../assets/places/water.jpg'
import Img3 from '../../assets/places/boat.jpg'


const BlogsData=[
{
id: 1,
image:'https://i.pinimg.com/736x/c8/94/e0/c894e0ab00f8386138b2d443b079ee6f.jpg',
title: "Top 10 Best Places in the world",
p:'Eiffel tower',
description: 'The Eiffel Tower, an iconic symbol of Paris and France, stands tall at 324 meters, offering breathtaking panoramic views of the city. Built in 1889 for the World’s Fair, this iron lattice tower has become a global cultural icon and one of the most visited monuments in the world. Whether admired from the ground, viewed at night when it sparkles, or explored from its observation decks, the Eiffel Tower captures the romance and elegance of Paris like no other landmark.',
author:'Divine',
date: "April, 2024",
aosDelay:"0"

},
{
id: 2,
image: 'https://i.pinimg.com/736x/23/8f/3d/238f3d70a4b435bd1274d255c81f0327.jpg',
title: "The 10 Best Places in the world",
p:'Santorini',

description:"Known as one of the most romantic places on Earth, Santorini attracts couples from all over the world. Whether it's a sunset dinner in Oia, a luxury cave suite with a private pool, or a catamaran cruise around the caldera, Santorini offers romance at every turn. Its iconic sunsets, where the sky glows in shades of orange, pink, and purple, are truly legendary.",
author:'Divine',
date: "April, 2024",
aosDelay:"200"

},
{
id: 3,
image: 'https://i.pinimg.com/736x/7e/b0/6d/7eb06dd56e7fa99fb1696a975c9c0a6f.jpg',
title: "The 10 Best Places in the world",
p:'Reykjavik',

description: 'Reykjavik offers vibrant culture, geothermal spas, and is the gateway to Iceland’s natural wonders.',
author:'Divine',
date: "April, 2024",
aosDelay:"400"

},
]
const BlogsComp = () => {
  return (
    <div>
        <div data-sos='fade-up' className='container' >
            <h1 className='mt-14 mb-3 my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold '>
            Our Latest Blogs</h1>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {
                BlogsData.map((item, index, data)=>(
                    <div data-aos='fade-up' data-aos-delay={data.aosDelay}     >
                      <BlogsCard key={index}
                      {...item}/>
                    </div>
                ))
            } 
            </div>
        </div>
    </div>
  )
}

export default BlogsComp