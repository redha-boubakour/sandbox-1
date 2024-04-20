import { motion } from "framer-motion";
import Header from "@/components/Header";

export default function Inner({ children }: { children: React.ReactNode }) {
    const anim = (variants: any) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants,
        };
    };

    const opacity = {
        initial: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 1 },
    };

    const slide = {
        initial: { top: "100vh" },
        enter: { top: "100vh" },
        exit: {
            top: "0",
            transition: {
                duration: 1.5,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    const perspective = {
        initial: { y: 0, scale: 1, opacity: 1 },
        enter: { y: 0, scale: 1, opacity: 1 },
        exit: {
            y: -200,
            scale: 0.8,
            opacity: 0,
            transition: {
                duration: 1.8,
                ease: [0.76, 0, 0.24, 1],
            },
        },
    };

    return (
        <div className='inner'>
            <motion.div {...anim(slide)} className='slide' />
            <motion.div {...anim(perspective)} className='page'>
                <motion.div {...anim(opacity)}>
                    <Header />
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}
