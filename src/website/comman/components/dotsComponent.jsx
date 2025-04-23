/* eslint-disable react/prop-types */

const DotsComponent = ({ serviceData, handleDotClick, countImg }) => {
    return (
        <div>
            <div className="flex  justify-center items-center gap-2">
                {serviceData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-3 w-3 rounded-full ${index === countImg ? 'bg-yellow-primary w-4 ' : 'bg-gray-500'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default DotsComponent;