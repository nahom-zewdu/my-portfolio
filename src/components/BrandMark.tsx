"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BrandMark() {
  const text = "Nahom";
  const letters = useMemo(() => text.split(""), [text]);
  const [cycleKey, setCycleKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCycleKey((k) => k + 1), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-3 left-3 z-50 select-none">
      <AnimatePresence mode="sync">
        <motion.div
          key={cycleKey}
          className="flex items-center gap-2"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {letters.map((ch, i) => (
            <motion.span
              key={`${cycleKey}-${i}-${ch}`}
              className="text-lg font-bold tracking-wide text-primary"
              variants={{
                hidden: { y: 14, opacity: 0, scale: 0.9 },
                show: { y: 0, opacity: 1, scale: 1 },
              }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
            >
              {ch}
            </motion.span>
          ))}
          <motion.span
            className="h-[1px] w-0 bg-primary/70 rounded"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 56, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ delay: 0.08 * letters.length + 0.1, duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

"use client";
import Link from "next/link";

export default function BrandMark() {
  return (
    <Link
      href="#hero"
      className="group fixed top-3 left-4 z-50 select-none"
      aria-label="Go to top"
    >
      <span className="text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900/80 to-slate-600/80 dark:from-slate-100 dark:to-slate-400 transition-all duration-300 group-hover:tracking-wider">
        Nahom
      </span>
      <span className="block h-px bg-black/30 dark:bg-white/30 mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </Link>
  );
}

