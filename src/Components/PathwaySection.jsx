import cover from '../assets/cover.jpg'
import VectorleftNose from '../assets/vectorleftNose.png'


const PathwaySection = () => {
  return (
    <div>
      <section className=" dark:bg-gray-900 relative ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 relative z-10" >
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ">
            <div className="w-full  relative">
              <img className=" w-full rounded-lg" src={cover} alt={`${''}'s profile`} />

              <div className='absolute bottom-3 left-10'>
                <p className=' text-gray-200 lg:mb-2 sm:text-xl'> explore</p>
                <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-white dark:text-white">Direct</h1>
              </div>

            </div>
            <div className="w-full  relative">
              <img className=" w-full rounded-lg" src={cover} alt={`${''}'s profile`} />

              <div className='absolute bottom-3 left-10'>
                <p className=' text-gray-200 lg:mb-2 sm:text-xl'> explore</p>
                <h1 className="mb-4 text-5xl tracking-tight font-extrabold text-white dark:text-white">Pathways</h1>
              </div>

            </div>
          </div>


        </div>

        <div className="absolute  top-2/4 right-0 z-0">
          <img
            className="rounded-lg w-full h-full object-cover"
            src={VectorleftNose}
            alt="Counselling session"
          />
        </div>


      </section>
    </div>
  )
}

export default PathwaySection;