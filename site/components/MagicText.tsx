'use client';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface MagicWordProps {
  children: string;
}

export default function MagicText({ children }: MagicWordProps) {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!wordRef.current) return;
      const { width, height } = wordRef.current.getBoundingClientRect();

      setSparkles((prev) => [
        ...prev,
        {
          id: Date.now(),
          x: Math.random() * width,
          y: Math.random() * height,
        },
      ]);

      setSparkles((prev) => prev.slice(-30)); // keep only last 30
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }} ref={wordRef}>
      {/* The Word */}
      <motion.h1
        style={{
          display: "flex",
          color: "#8e82fe",
          textAlign: "center",
          position: "relative",
        }}
      >
        {children.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.8 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
            style={{
              marginRight: "2px",
              textShadow: "0 0 10px black, 0 0 20px black, 0 0 10px #fff",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>

      {/* Sparkles */}
      {sparkles.map((s) => (
        <motion.div
          key={s.id}
          style={{
            position: "absolute",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#fff",
            top: s.y,
            left: s.x,
          }}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 0, y: -40 }}
          transition={{ duration: 1.2 }}
        />
      ))}
    </div>
  );
}