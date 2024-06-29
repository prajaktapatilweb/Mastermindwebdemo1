import React from 'react'
import { motion, Variants, useAnimation } from "framer-motion";

export default function Fadeupside(props) {
    const Variants = {
        offscreen: {
            y: 80
        },
        onscreen: {
            y: 10,
            // rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };
    // const controls = useAnimation();
    // const ref = useRef(null)
    // const isInView = useInView(ref)

    // useEffect(() => {
    //     if (isInView) {
    //         controls.start('visible');
    //     }
    // }, [controls, isInView]);

    return (
        <div>
            <motion.div
                // ref={ref}
                // animate={controls}
                // initial="hidden"
                // transition={{ duration: 1 }}
                // variants={{
                //     visible: { opacity: 1, scale: 1 },
                //     hidden: { opacity: 0, scale: 0 }
                // }}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}

            // initial={{
            //     opacity: 0,
            //     y: 50
            // }}
            // animate={{
            //     opacity: 1,
            //     y: 0
            // }}
            >
                <motion.div className="card" variants={Variants}>

                    {props.para}
                </motion.div>
            </motion.div>
        </div>
    )
}
