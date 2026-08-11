import * as React from "react";
import { cva } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "../../lib/utils";

const cardVariants = cva(
  "relative flex flex-col justify-between h-full w-full overflow-hidden rounded-2xl p-5 shadow-sm transition-all duration-300 hover:shadow-lg group border border-slate-100",
  {
    variants: {
      gradient: {
        blue: "bg-gradient-to-br from-[#f8f9fa] to-blue-50/80 hover:to-blue-100/80",
        purple: "bg-gradient-to-br from-[#f8f9fa] to-purple-50/80 hover:to-purple-100/80",
        red: "bg-gradient-to-br from-[#f8f9fa] to-red-50/80 hover:to-red-100/80",
        green: "bg-gradient-to-br from-[#f8f9fa] to-green-50/80 hover:to-green-100/80",
      },
    },
    defaultVariants: {
      gradient: "blue",
    },
  }
);

const GradientCard = React.forwardRef(
  ({ className, gradient, icon, title, description, imageUrl, maskBackground = false, ...props }, ref) => {
    const cardAnimation = {
      rest: { scale: 1, y: 0 },
      hover: { scale: 1.03, y: -4 },
    };

    const imageAnimation = {
      rest: { scale: 1, rotate: 0 },
      hover: { scale: 1.1, rotate: 3 },
    };

    return (
      <motion.div
        variants={cardAnimation}
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="h-full"
        ref={ref}
      >
        <div
          className={cn(cardVariants({ gradient }), className)}
          {...props}
        >
          {/* Decorative background image with animation */}
          {imageUrl && (
            <motion.img
              src={imageUrl}
              alt={`${title} background`}
              variants={imageAnimation}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className={cn(
                "absolute -right-4 -bottom-4 md:-right-1/4 md:-bottom-1/4 w-3/5 md:w-3/4 opacity-80 pointer-events-none",
                maskBackground && "mix-blend-multiply"
              )}
              style={
                maskBackground
                  ? {
                      maskImage: "radial-gradient(circle at center, black 40%, transparent 75%)",
                      WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 75%)",
                    }
                  : {}
              }
            />
          )}

          {/* Card Content */}
          <div className="z-10 flex flex-col h-full">
            {/* Title and Description */}
            <div className="flex-grow pt-2">
              <h3 className="text-base md:text-lg font-bold text-[#183758] font-poppins mb-1 md:mb-1.5 leading-tight">{title}</h3>
              <p className="text-[10px] md:text-sm text-slate-500 font-opensans leading-tight md:leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
