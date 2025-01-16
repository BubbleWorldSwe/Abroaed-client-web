import React from 'react'

const AccommodationLocation = () => {
    const locations = [
        {
          key:'City' ,
          value:"New York",
                  },
        {
            key:'Country' ,
            value:"USA",
                 },
        {
            key:'Address' ,
            value:"1 Yonge Street, Toronto, ON M5E 1W7",
                  },
         ];
    return (
    <div>
        <div className='flex gap-10'>
{ locations.map((item,index)=>(
     <div className=''>
        <p className='font-semibold text-gray-600 mb-1'>{item.key}</p>
        <p className='text-gray-500 mb-1'>{item.value}</p>
     </div>
))}
        </div>
    </div>
  )
}

export default AccommodationLocation;