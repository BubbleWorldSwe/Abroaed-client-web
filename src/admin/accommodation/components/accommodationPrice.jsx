import { prices } from "../data";

const AccommodationPrice = () => {
  return (
    <div>
      <div className='flex gap-10'>
        {prices.map((item, index) => (
          <div className='' key={index}>
            <p className='font-semibold text-gray-600 mb-1'>{item.key}</p>
            <p className='text-gray-500 mb-1'>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AccommodationPrice;