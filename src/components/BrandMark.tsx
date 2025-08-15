"use client";
import Link from "next/link";
import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

export default function BrandMark() {
  const controls = useAnimationControls();
  const lineControls = useAnimationControls();

  useEffect(() => {
    let isMounted = true;
    const sequence = async () => {
      while (isMounted) {
        await controls.start(i => ({
          opacity: [0, 1],
          y: [6, 0],
          transition: { delay: i * 0.06, duration: 0.35, ease: "easeOut" }
        }));
        await lineControls.start({ scaleX: [0, 1], transition: { duration: 0.6, ease: "easeInOut" } });
        await new Promise(r => setTimeout(r, 5000));
        await controls.start({ opacity: 0, transition: { duration: 0.3 } });
        await lineControls.start({ scaleX: 0, transition: { duration: 0.3 } });
      }
    };
    sequence();
    return () => {
      isMounted = false;
    };
  }, [controls, lineControls]);

  const letters = Array.from("Nahom");

  return (
    <Link href="#hero" className="group fixed top-3 left-4 z-50 select-none" aria-label="Go to top">
      <div className="flex items-center">
        {letters.map((ch, i) => (
          <motion.span
            key={i}
            custom={i}
            animate={controls}
            initial={{ opacity: 0, y: 6 }}
            className="text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900/80 to-slate-600/80 dark:from-slate-100 dark:to-slate-400"
          >
            {ch}
          </motion.span>
        ))}
      </div>
      <motion.span
        animate={lineControls}
        initial={{ scaleX: 0 }}
        className="block h-px bg-black/30 dark:bg-white/30 mt-1 origin-left"
      />
    </Link>
  );
}

