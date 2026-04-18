"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Button({ 
  children, variant = "primary", size = "md", className, as: Component = "button", ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900",
    secondary: "border-2 border-gray-300 text-gray-900 hover:bg-gray-50 focus:ring-gray-300",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[36px]",
    md: "px-6 py-3 text-base min-h-[44px]",
    lg: "px-8 py-4 text-lg min-h-[52px]",
  };
  
  return (
    <motion.Component
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      as={Component}
      {...props}
    >
      {children}
    </motion.Component>
  );
}