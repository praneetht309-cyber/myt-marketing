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

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
        {/* Logo — sits above the nav bar, large and centered */}
        <motion.div
          initial={false}
          animate={{
            marginTop: scrolled ? 8 : 12,
            marginBottom: scrolled ? 4 : 8,
            scale: scrolled ? 0.7 : 1,
            opacity: scrolled ? 0 : 1,
            height: scrolled ? 0 : "auto",
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="overflow-hidden"
        >
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="MYT"
              width={200}
              height={60}
              className="h-16 w-auto sm:h-20"
              priority
            />
          </Link>
        </motion.div>

        {/* Nav bar — Menu | (logo when scrolled) | Contact */}
        <motion.div
          initial={false}
          animate={{
            width: scrolled ? "min(420px, calc(100vw - 32px))" : "min(360px, calc(100vw - 32px))",
            borderRadius: 9999,
            backgroundColor: "rgba(233, 236, 237, 0.92)",
            border: "1px solid rgba(198, 208, 212, 0.6)",
            boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)",
          }}
          transition={{
            duration: 0.4,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative flex h-12 items-center justify-between px-5 backdrop-blur-xl sm:h-14 sm:px-6"
          style={{ willChange: "width" }}
        >
          {/* Left — Menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1.5 rounded-full bg-white/60 px-3.5 py-1.5 text-xs font-medium text-text-heading transition-colors hover:bg-white sm:text-sm"
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

          {/* Center — Logo (visible only when scrolled, replaces the large logo above) */}
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="MYT"
                    width={120}
                    height={36}
                    className="h-8 w-auto sm:h-9"
                  />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Right — Contact */}
          <Link
            href="/contact"
            className="text-xs font-medium text-text-body transition-colors hover:text-primary sm:text-sm"
          >
            Contact
          </Link>
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
      <div className="h-28 sm:h-36" />
    </>
  );
}
