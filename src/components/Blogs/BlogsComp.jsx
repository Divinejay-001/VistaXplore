import React from 'react'
import BlogsCard from "./BlogsCard"
import Img1 from '../../assets/places/tajmahal.jpg'
import Img2 from '../../assets/places/water.jpg'
import Img3 from '../../assets/places/boat.jpg'


const BlogsData=[
{
id: 1,
image:Img1,
title: "The 10 Best Places in the world",
description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, totam? Aliquam, magni? Quis beatae perferendis provident mollitia impedit dolores sapiente a dolor officia consequatur et sit voluptatum alias autem omnis animi, quam fugit iste iusto voluptate. Accusamus blanditiis aut laudantium dignissimos nesciunt recusandae facere reprehenderit iure praesentium, quia, voluptas quas.',
author:'Divine',
date: "April, 2024",
aosDelay:"0"

},
{
id: 2,
image:Img2,
title: "The 10 Best Places in the world",
description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, totam? Aliquam, magni? Quis beatae perferendis provident mollitia impedit dolores sapiente a dolor officia consequatur et sit voluptatum alias autem omnis animi, quam fugit iste iusto voluptate. Accusamus blanditiis aut laudantium dignissimos nesciunt recusandae facere reprehenderit iure praesentium, quia, voluptas quas.',
author:'Divine',
date: "April, 2024",
aosDelay:"200"

},
{
id: 3,
image:Img3,
title: "The 10 Best Places in the world",
description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, totam? Aliquam, magni? Quis beatae perferendis provident mollitia impedit dolores sapiente a dolor officia consequatur et sit voluptatum alias autem omnis animi, quam fugit iste iusto voluptate. Accusamus blanditiis aut laudantium dignissimos nesciunt recusandae facere reprehenderit iure praesentium, quia, voluptas quas.',
author:'Divine',
date: "April, 2024",
aosDelay:"400"

},
]
const BlogsComp = () => {
  return (
    <div>
        <div data-sos='fade-up' className='container' >
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold '>
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