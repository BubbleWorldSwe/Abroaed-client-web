

const DestinationScholarship = () => {

    const scholarships = [
        {
          name: "Chevening Scholarship",
          description: "Supports talented professionals who have shown prior leadership skills and exceptional performance in their respective fields. With Chevening, you can apply for a scholarship or fellowship, the selection of which is done by the high commission and British embassies."
        },
        {
          name: "Fulbright Scholarship",
          description: "Provides funding for international students to study in the U.S. It promotes cultural exchange and aims to build mutual understanding between the people of the U.S. and other countries."
        },
        {
          name: "Erasmus Mundus Scholarship",
          description: "Offers funding for international master's and doctoral degree programs jointly delivered by multiple European universities. It supports students to pursue studies and research across different countries in Europe."
        },
        {
          name: "DAAD Scholarship",
          description: "Aims to support the international exchange of students, researchers, and scientists. The scholarship covers various programs for studying, research, and short-term visits in Germany."
        },
        {
          name: "Australian Awards Scholarship",
          description: "Offers opportunities for international students from developing countries to undertake study, research, and professional development in Australia, contributing to sustainable development in their home countries."
        }
      ];
      

    return (
        <div className="relative z-10">
            <section className=" dark:bg-gray-900 relative px-10 mx-auto">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-2xl lg:grid lg:grid-cols lg:py-16 lg:px-6">
                    <div className="font  text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl  font-extrabold text-gray-900 dark:text-white">
                            Scholarships & Financial Aid
                        </h2>
                        <p className="mb-4 text-black ">
                            For Study in UK, the amount of money available and the type of award varies between institutions. Certain research programs may provide up to 100% of the tuition fee besides covering a part of your living expenditures.
                            Here are some popular government scholarship programs you can apply to study in UK as an Indian student:
                        </p>
                    </div>
                    <section class=" dark:bg-gray-900  ">
                        <div class=" w-full ">
                            <div class=" dark:bg-gray-800 relative   overflow-hidden">
                                <div class="overflow-x-auto">
                                    <table class="w-full  text-sm text-left text-gray-500 border-t-2 border-gray-400  dark:text-gray-400">
                                        <thead class="text-xs  text-gray-700 uppercase border-b-2 border-gray-400 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-4 py-3">Name</th>
                                                <th scope="col" class="px-4 py-3">Description</th>
                                                <th scope="col" class="px-4 py-3">
                                                    <span class="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>    
                                        <tbody>
                                            {scholarships.map((item,index)=>(<tr key={index} class="border-b-2 border-gray-400  dark:border-gray-700">
                                                <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.name}</th>
                                            <td class="px-4 py-3">{item.description}</td>

                                            </tr>))}
                                           

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div>
                    <p className="mb-4 text-black ">
                    If you want to bring down your educational expenses, it is best to apply to various scholarships available for Indian students.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DestinationScholarship;