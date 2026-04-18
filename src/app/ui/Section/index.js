"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Section({ 
  children, className, id, background = "white", animate = true, ...props 
}) {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-gray-900 text-white",
  };
  
  const SectionWrapper = animate ? motion.section : "section";
  
  return (
    <SectionWrapper
      id={id}
      className={cn("section-padding", bgClasses[background], className)}
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </SectionWrapper>
  );
}