import React from 'react'


const BlogsData=[

]
const BlogsComp = () => {
  return (
    <div>
        <div data-sos='fade-up' className='container' >
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-2xl font-bold '>
            Our Latest Blogs</h1>
            <div>
            {
                BlogsData.map((item, index)=>(
                    <Blogs key={index}
                    {...item}/>
                ))
            } 
            </div>
        </div>
    </div>
  )
}

export default BlogsComp