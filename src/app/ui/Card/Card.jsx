"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Card({ children, className, hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "bg-white rounded-2xl border border-gray-200 p-6 shadow-sm",
        hover && "hover:shadow-lg hover:border-gray-300 transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}