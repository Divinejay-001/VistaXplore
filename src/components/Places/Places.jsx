import React from 'react'
import PlacesCard from './PlacesCard'
// import Img1 from '../../assets/places/boat.jpg'
// import Img2 from '../../assets/places/tajmahal.jpg'
// import Img3 from '../../assets/places/water.jpg'
// import Img4 from '../../assets/places/place4.jpg'
// import Img5 from '../../assets/places/place5.jpg'
// import Img6 from '../../assets/places/place6.jpg'


const PlacesData = [
  {
      img: 'https://i.pinimg.com/736x/c8/94/e0/c894e0ab00f8386138b2d443b079ee6f.jpg',
      title: 'Eiffel Tower',
      location: 'France',
      link:'Learn more',
      description: 'The Eiffel Tower, an iconic symbol of Paris and France, stands tall at 324 meters, offering breathtaking panoramic views of the city. Built in 1889 for the World’s Fair, this iron lattice tower has become a global cultural icon and one of the most visited monuments in the world. Whether admired from the ground, viewed at night when it sparkles, or explored from its observation decks, the Eiffel Tower captures the romance and elegance of Paris like no other landmark.',
      price: 200,
      type: 'Adventure Cultural',
      aosDelay: "0"
  },
  {
      img: 'https://i.pinimg.com/736x/23/8f/3d/238f3d70a4b435bd1274d255c81f0327.jpg',
      title: 'Santorini',
      link:'Learn more',
      location: 'Greece',
      description: 'Santorini, one of the most breathtaking Greek islands, is a world-renowned destination famous for its whitewashed buildings, blue-domed churches, and spectacular sunsets over the Aegean Sea. Located in the southern Aegean, it is part of the Cyclades archipelago and attracts travelers with its romantic atmosphere, dramatic landscapes, and rich history.',
      price: 200,
      type: 'Romantic Relax',
      aosDelay: "100"
  },
  {
      img: 'https://i.pinimg.com/736x/26/67/32/266732da943235a087ad8d5ef20477d9.jpg',
      title: 'Kyoto',
      link:'Learn more',
      location: 'Japan',
      description: 'Kyoto is a cultural treasure, known for its ancient temples, traditional tea houses, and beautiful cherry blossom gardens.',
      price: 150,
      type: 'Cultural Relax',
      aosDelay: "200"
  },
  {
      img: 'https://i.pinimg.com/736x/0f/41/a7/0f41a7be99579670cd7f223cf8710ed5.jpg',
      title: 'Machu Picchu',
      link:'Learn more',
      location: 'Peru',
      description: 'Machu Picchu is an ancient Incan city set high in the Andes, offering history and jaw-dropping views.',
      price: 180,
      type: 'Adventure Cultural',
      aosDelay: "400"
  },
  {
      img: 'https://i.pinimg.com/474x/21/b9/28/21b928a5157870ffed033179370a9f15.jpg',
      title: 'Bora Bora',
      link:'Learn more',
      location: 'French Polynesia',
      description: 'Bora Bora offers turquoise lagoons, luxury overwater bungalows, and a paradise-like tropical experience.',
      price: 500,
      type: 'Luxury Relax',
      aosDelay: "600"
  },
  {
      img: 'https://i.pinimg.com/736x/26/0b/e3/260be3f4b12009e56efb2de6f89cef59.jpg',
      title: 'Cappadocia',
      link:'Learn more',
      location: 'Turkey',
      description: 'Cappadocia is known for its surreal landscapes, cave dwellings, and iconic hot air balloon rides.',
      price: 130,
      type: 'Adventure Relax',
      aosDelay: "800"
  },
  {
      img: 'https://i.pinimg.com/736x/9d/8a/c9/9d8ac93467a37f6187f71b9307e22719.jpg',
      title: 'Banff National Park',
      link:'Learn more',
      location: 'Canada',
      description: 'Banff National Park offers stunning natural beauty with mountains, lakes, and abundant wildlife.',
      price: 120,
      type: 'Nature Adventure',
      aosDelay: "1000"
  },
 
  {
      img: 'https://i.pinimg.com/736x/a2/b6/d0/a2b6d0d2fbb1a02a5b3ddd8147382997.jpg',
      title: 'Queenstown',
      link:'Learn more',
      location: 'New Zealand',
      description: 'Queenstown is the adventure capital, known for bungee jumping, scenic landscapes, and lake cruises.',
      price: 140,
      type: 'Adventure Nature',
      aosDelay: "1400"
  },
  {
      img: 'https://i.pinimg.com/736x/52/44/a8/5244a8938196dbdd4d697075920c5444.jpg',
      title: 'Petra',
      link:'Learn more',
      location: 'Jordan',
      description: 'Petra is an archaeological wonder, with its stunning rock-cut architecture and rich ancient history.',
      price: 160,
      type: 'Cultural Historical',
      aosDelay: "1600"
  },
  {
      img: 'https://i.pinimg.com/736x/7e/b0/6d/7eb06dd56e7fa99fb1696a975c9c0a6f.jpg',
      title: 'Reykjavik',
      link:'Learn more',
      location: 'Iceland',
      description: 'Reykjavik offers vibrant culture, geothermal spas, and is the gateway to Iceland’s natural wonders.',
      price: 170,
      type: 'Nature Relax',
      aosDelay: "1800"
  },
  {
      img: 'https://i.pinimg.com/736x/3f/8f/2b/3f8f2bfd9fbad4535eb05c8af3c5c9de.jpg',
      title: 'Dubai Marina',
      link:'Learn more',
      location: 'Dubai',
      description: "Stunning waterfront skyline, lively nightlife, and luxurious high-rise buildings overlooking the serene marina. Dubai Marina boasts a vibrant atmosphere with world-class dining, upscale shopping, and scenic promenade walks. This iconic destination is known for its breathtaking views, yacht cruises, and an electric nightlife scene, making it a premier hotspot for residents and tourists alike.",
      price: 170,
      type: 'Luxury Relax',
      aosDelay: "2000"
  }
];

const Places = () => {
  return (
    <div className='bg-gray-50 py-10 '>
        <div className='container'>
            <h1 className='
          my-8 border-l-8 border-primary/40 py-2 pl-2 text-3xl
          font-bold'>Best Places to visit</h1>
          <div 
          className='grid grid-cols-1 sm:grid-cols-3
          gap-4 '>
            {
                PlacesData.map((item, index, data)=>(
                    <div data-aos='fade-up' data-aos-delay={data.aosDelay} >
                      <PlacesCard key={index}
                      {...item}/>
                    </div>
                ))
            }
          </div>
        </div>
    </div>
  )
}

export default Places