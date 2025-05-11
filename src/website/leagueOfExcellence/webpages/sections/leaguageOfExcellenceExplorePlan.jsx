/* eslint-disable react/prop-types */
import { plans } from "../../data";
import { useState } from "react";
import FeatureLOEModal from "../../modals/featureLOEModal";
import SectionMainHeader from "../../../styleComponents/sectionMainHeader";
import ExplorePlanCardComponent from "../../../comman/components/explorePlanCardComponent";
import { motion } from "framer-motion";

const LeaguageOfExcellenceExplorePlan = ({ onFormSubmit, source, entity }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseAddModal = () => {
    setOpenModal(false);
  };

  const handleOpenAddModal = () => {
    setOpenModal(true);
  };
  return (
    <>
      <FeatureLOEModal
        onFormSubmit={onFormSubmit}
        source={source}
        entity={entity}
        isOpen={openModal}
        onClose={handleCloseAddModal}
        title="League of Excellence"
      />
      <div className="relative z-10">
        <section >
          <div className="  lg:grid lg:grid-cols-1 pb-10 ">
            <SectionMainHeader className="">Explore Plans</SectionMainHeader>
            <hr className="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <ExplorePlanCardComponent plans={plans} />
            </div >

          </motion.div>

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
  );
};

export default LeaguageOfExcellenceExplorePlan;
