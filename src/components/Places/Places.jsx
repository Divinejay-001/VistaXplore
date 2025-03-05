import React from 'react'
import PlacesCard from './PlacesCard'
import Img1 from '../../assets/places/boat.jpg'
import Img2 from '../../assets/places/tajmahal.jpg'
import Img3 from '../../assets/places/water.jpg'
import Img4 from '../../assets/places/place4.jpg'
import Img5 from '../../assets/places/place5.jpg'
import Img6 from '../../assets/places/place6.jpg'


const PlacesData=[
    {
     img:Img1,
     title:'Statue',
     location:'Paris',
     description:'Paris is the capital and most populous city of France, with an estimated 2,140,621 inhabitants according to the 2019 census.' ,
     price:100,
      type:'Cultural Relax' 
    },
    {
     img:Img2,
     title:'Statue',
     location:'Paris',
     description:'Paris is the capital and most populous city of France, with an estimated 2,140,621 inhabitants according to the 2019 census.' ,
     price:100,
      type:'Cultural Relax' 
    },
    {
     img:Img3,
     title:'Statue',
     location:'Paris',
     description:'Paris is the capital and most populous city of France, with an estimated 2,140,621 inhabitants according to the 2019 census.' ,
     price:100,
      type:'Cultural Relax' 
    },
    {
     img:Img4,
     title:'Statue',
     location:'Paris',
     description:'Paris is the capital and most populous city of France, with an estimated 2,140,621 inhabitants according to the 2019 census.' ,
     price:100,
      type:'Cultural Relax' 
    },
    {
     img:Img5,
     title:'Statue',
     location:'Paris',
     description:'Paris is the capital and most populous city of France, with an estimated 2,140,621 inhabitants according to the 2019 census.' ,
     price:100,
      type:'Cultural Relax' 
    },
    {
     img:Img6,
     title:'Statue',
     location:'Paris',
     description:'Paris is the capital and most populous city of France, with an estimated 2,140,621 inhabitants according to the 2019 census.' ,
     price:100,
      type:'Cultural Relax' 
    },
]
const Places = () => {
  return (
    <div className='bg-gray-50 py-10 '>
        <div className='container'>
            <h1 className='
          my-8 border-l-8 border-primary/40 py-2 pl-2 text-3xl
          font-bold'>Best Places to visit</h1>
          <div className='grid grid-cols-1 sm:grid-cols-3
          gap-4 '>
            {
                PlacesData.map((item, index)=>(
                    <PlacesCard key={index}
                    {...item}/>
                ))
            }
          </div>
        </div>
    </div>
  )
}

export default Places