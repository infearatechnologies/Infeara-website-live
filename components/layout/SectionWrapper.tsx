"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const SectionWrapper = ({ children, className, id }: SectionWrapperProps) => {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn("w-full py-16 md:py-24", className)}
        >
            <div className="container mx-auto px-4 md:px-6">{children}</div>
        </motion.section>
    );
};

export default SectionWrapper;
