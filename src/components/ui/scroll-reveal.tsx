"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";
type Animation = "fade" | "slide" | "scale" | "blur";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: Animation;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

function getVariants(
  animation: Animation,
  direction: Direction,
): Variants {
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 40 },
    down: { x: 0, y: -40 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const base = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" },
  };

  switch (animation) {
    case "slide":
      return {
        hidden: { opacity: 0, ...offsets[direction] },
        visible: base.visible,
      };
    case "scale":
      return {
        hidden: { opacity: 0, scale: 0.9 },
        visible: base.visible,
      };
    case "blur":
      return {
        hidden: { opacity: 0, filter: "blur(8px)", ...offsets[direction] },
        visible: base.visible,
      };
    case "fade":
    default:
      return {
        hidden: { opacity: 0, ...offsets[direction] },
        visible: base.visible,
      };
  }
}

export function ScrollReveal({
  children,
  animation = "fade",
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={getVariants(animation, direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...offsets[direction] },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
