"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Get Started", href: "/early-access" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

// Watch dimensions — expanded vs pill
const WATCH = {
  expanded: {
    dialSize: 88,       // logo circle diameter
    dialSizeSm: 100,
    bandHeight: 44,     // strip height
    bandHeightSm: 48,
    bandWidth: "calc(50vw - 70px)",   // each band stretches to edges
    bandWidthSm: "calc(50vw - 76px)",
    gap: 0,
    mt: 10,
  },
  pill: {
    dialSize: 64,
    dialSizeSm: 72,
    bandHeight: 40,
    bandHeightSm: 44,
    bandWidth: 130,
    bandWidthSm: 160,
    gap: 0,
    mt: 10,
  },
} as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const s = scrolled ? WATCH.pill : WATCH.expanded;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-start justify-center pointer-events-none">
        <motion.div
          initial={false}
          animate={{ marginTop: s.mt }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="pointer-events-auto flex items-center justify-center"
        >
          {/* Left band */}
          <motion.div
            initial={false}
            animate={{
              width: scrolled ? WATCH.pill.bandWidth : WATCH.expanded.bandWidth,
              height: scrolled ? WATCH.pill.bandHeight : WATCH.expanded.bandHeight,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-start rounded-l-full border border-r-0 px-4 backdrop-blur-xl sm:px-5"
            style={{
              backgroundColor: "rgba(233, 236, 237, 0.92)",
              borderColor: "rgba(198, 208, 212, 0.6)",
              boxShadow: "-4px 4px 16px rgba(0, 0, 0, 0.06)",
            }}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-1.5 rounded-full bg-white/60 px-3 py-1.5 text-xs font-medium text-text-heading transition-colors hover:bg-white sm:text-sm"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </motion.svg>
                )}
              </AnimatePresence>
              Menu
            </button>
          </motion.div>

          {/* Center dial — the watch face with logo */}
          <motion.div
            initial={false}
            animate={{
              width: scrolled ? WATCH.pill.dialSize : WATCH.expanded.dialSize,
              height: scrolled ? WATCH.pill.dialSize : WATCH.expanded.dialSize,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 flex items-center justify-center rounded-full border backdrop-blur-xl"
            style={{
              backgroundColor: "rgba(233, 236, 237, 0.95)",
              borderColor: "rgba(198, 208, 212, 0.6)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              flexShrink: 0,
            }}
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <motion.div
                initial={false}
                animate={{
                  width: scrolled ? 44 : 64,
                  height: scrolled ? 44 : 64,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <Image
                  src="/logo.png"
                  alt="MYT"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Right band */}
          <motion.div
            initial={false}
            animate={{
              width: scrolled ? WATCH.pill.bandWidth : WATCH.expanded.bandWidth,
              height: scrolled ? WATCH.pill.bandHeight : WATCH.expanded.bandHeight,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-end rounded-r-full border border-l-0 px-4 backdrop-blur-xl sm:px-5"
            style={{
              backgroundColor: "rgba(233, 236, 237, 0.92)",
              borderColor: "rgba(198, 208, 212, 0.6)",
              boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.06)",
            }}
          >
            <Link
              href="/contact"
              className="text-xs font-medium text-text-body transition-colors hover:text-primary sm:text-sm"
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-1">
              {MENU_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.06,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 text-center text-2xl font-semibold text-text-heading transition-colors hover:text-primary sm:text-3xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to offset fixed header */}
      <div className="h-28 sm:h-32" />
    </>
  );
}
