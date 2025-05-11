/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const MotionComponent = ({
    initial = { opacity: 0, y: 30 },
    whileInView = { opacity: 1, y: 0 },
    transition = { duration: 0.6, ease: "easeOut" },
    viewport = { once: false, amount: 0.5 },
    children
}) => {
    return (
        <motion.div
            initial={initial}
            whileInView={whileInView}
            transition={transition}
            viewport={viewport}
        >
            {children}
        </motion.div>
    )
}
