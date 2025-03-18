import { Gradients } from "@/lib/tailwindClassCombinators";
import { cn } from "@/lib/tailwindUtils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

interface TooltipProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  positionClassName: Parameters<typeof cn>[0];
}

export default function Tooltip({
  trigger,
  children,
  positionClassName,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        onMouseOver={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {trigger}
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              Gradients.redToBlue,
              `z-[100] ${positionClassName}`,
              "rounded-[8px] p-[2px] w-fit",
            )}
          >
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={cn(
                "hidden lg:flex justify-between items-center",
                "bg-agblack rounded-[inherit]",
                "px-[16px] py-[8px]",
              )}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Tool tip on click times out after 2 sec

export function TooltipOnClick({
  trigger,
  children,
  positionClassName,
}: TooltipProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <motion.div
        onClick={() => {
          setOpen(true);
          setTimeout(() => {
            setOpen(false);
          }, 2000);
        }}
      >
        {trigger}
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              Gradients.redToBlue,
              `z-[100] ${positionClassName}`,
              "rounded-[8px] p-[2px] w-fit",
            )}
          >
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={cn(
                "flex justify-between items-center",
                "bg-agblack rounded-[inherit]",
                "px-[16px] py-[8px]",
              )}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
