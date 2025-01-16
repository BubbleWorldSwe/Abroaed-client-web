import React from 'react'

const AccommodationPrice = () => {
    const locations = [
        {
          key:'Currency' ,
          value:"$(Dollars)",
                  },
        {
            key:'Amount/month' ,
            value:"4000/monthly",
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

export default AccommodationPrice;