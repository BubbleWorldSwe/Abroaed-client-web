import { useState } from "react";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader"
import { plans } from "../../data"
import { entity, source } from "../../../../constants/values";
import { useDispatch } from "react-redux";
import { addLeadRequest } from "../../../../redux/actions/leadsActions";
import FeatureLOEModal from "../../../leagueOfExcellence/modals/featureLOEModal";
import ExplorePlanCardComponent from "../../../comman/components/explorePlanCardComponent";

const AbroaedPlusExplorePlan = () => {
    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);
    const handleCloseAddModal = () => {
        setOpenModal(false);
    };

    const handleOpenAddModal = () => {
        setOpenModal(true);
    };
    const onFormSubmit = (data) => {
        try {
            console.log("handleAddLead");
            console.log(data);

            dispatch(addLeadRequest(data));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <FeatureLOEModal
                onFormSubmit={onFormSubmit}
                source={source.abroaedPlus}
                entity={entity.explorePlans}
                isOpen={openModal}
                onClose={handleCloseAddModal}
                title={
                    <span>ABROAED<sup>+</sup></span>
                }
            />
            < div className="relative z-10" >
                <section className="dark:bg-gray-900 relative ">
                    <div className="  lg:grid lg:grid-cols-1 py-4 ">
                        <SectionMainHeader className="">Explore Plans</SectionMainHeader>
                        <hr className="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-6 justify-center md:mt-4">
                        <ExplorePlanCardComponent
                            plans={plans}
                        />
                    </div >

                    <div className="flex justify-center mt-10">
                        <button
                            className={`bg-yellow-primary hover:bg-gray-primary hover:text-white text-[16px] md:text-xl text-[#432205] px-6 py-3  font-semibold rounded-lg`}
                            onClick={handleOpenAddModal}
                        >
                            See full feature comparison
                        </button>
                    </div>
                </section >
            </div >
        </>
    )
}

export default AbroaedPlusExplorePlan