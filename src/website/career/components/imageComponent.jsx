/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const ImageComponent = ({ imgFirst, imgUrl }) => (
    <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="overflow-hidden"
    >
        <div className={`flex ${imgFirst ? "justify-start" : "justify-end"} h-[90%] `}>
            <img
                src={imgUrl}
                alt="Night Scene"
                className="w-full  rounded-lg"
            />
        </div>
    </motion.div>
);

export default ImageComponent;