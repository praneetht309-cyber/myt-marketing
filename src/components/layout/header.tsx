"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

const MENU_LINKS = [
  { label: "Download", href: "/download" },
  { label: "Features", href: "/features" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  // Hero header only shows on homepage when user hasn't scrolled yet.
  const showHeroHeader = isHome && !scrolled;

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Dial (logo circle) sizes — for the pill header
  const dialSize = scrolled ? 64 : 88;
  const logoSize = scrolled ? 52 : 76;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        {/* ============================================================
            PILL HEADER — the default watch-dial design.
            Visible when scrolled, or on any non-homepage route.
            ============================================================ */}
        <motion.div
          animate={{ opacity: showHeroHeader ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: showHeroHeader ? "none" : "auto" }}
          className="absolute top-0 left-0 right-0 flex items-start justify-center"
        >
          <motion.div
            initial={false}
            animate={{ marginTop: 10 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center"
          >
            {/* Left band */}
            <motion.div
              initial={false}
              animate={{
                width: scrolled ? 130 : "calc(50vw - 60px)",
                height: scrolled ? 40 : 44,
                borderTopLeftRadius: scrolled ? 9999 : 4,
                borderBottomLeftRadius: scrolled ? 9999 : 4,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center justify-start border border-r-0 px-4 backdrop-blur-xl sm:px-5"
              style={{
                backgroundColor: "rgba(252, 249, 243, 0.92)",
                borderColor: "rgba(214, 200, 176, 0.5)",
                boxShadow: "-4px 4px 16px rgba(0, 0, 0, 0.06)",
              }}
            >
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-1.5 text-xs font-medium text-text-heading transition-colors hover:text-primary sm:text-sm"
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </motion.svg>
                  )}
                </AnimatePresence>
                Menu
              </button>
            </motion.div>

            {/* Center dial — MYT logo */}
            <motion.div
              initial={false}
              animate={{ width: dialSize, height: dialSize }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10 flex items-center justify-center rounded-full backdrop-blur-xl"
              style={{
                backgroundColor: "rgba(252, 249, 243, 0.95)",
                border: "2px solid #083A4F",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                flexShrink: 0,
              }}
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <motion.div
                  initial={false}
                  animate={{ width: logoSize, height: logoSize }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="relative"
                >
                  <Image
                    src="/myt-logo.svg"
                    alt="MYT"
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Right band — Features link */}
            <motion.div
              initial={false}
              animate={{
                width: scrolled ? 130 : "calc(50vw - 60px)",
                height: scrolled ? 40 : 44,
                borderTopRightRadius: scrolled ? 9999 : 4,
                borderBottomRightRadius: scrolled ? 9999 : 4,
              }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center justify-end border border-l-0 px-4 backdrop-blur-xl sm:px-5"
              style={{
                backgroundColor: "rgba(252, 249, 243, 0.92)",
                borderColor: "rgba(214, 200, 176, 0.5)",
                boxShadow: "4px 4px 16px rgba(0, 0, 0, 0.06)",
              }}
            >
              <Link
                href="/features"
                className="text-xs font-medium text-text-body transition-colors hover:text-primary sm:text-sm"
              >
                Features
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ============================================================
            HERO HEADER — simple layout: MYT logo left, hamburger right.
            Visible only on homepage when scrollY ≈ 0.
            (Govt seal SVG kept at /public/govt-seal.svg for later use.)
            ============================================================ */}
        <motion.div
          animate={{ opacity: showHeroHeader ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: showHeroHeader ? "auto" : "none" }}
          className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 sm:px-8 sm:py-4"
        >
          {/* Left: MYT logo — links to home */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            aria-label="MYT home"
          >
            <Image
              src="/myt-logo.svg"
              alt="MYT"
              width={80}
              height={80}
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
              priority
            />
          </Link>

          {/* Right: hamburger icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-text-heading transition-colors hover:bg-primary/5 hover:text-primary sm:h-11 sm:w-11"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.div
                  key="close-hero"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XIcon className="h-6 w-6" strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu-hero"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MenuIcon className="h-6 w-6" strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
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
      <div className="h-24" />
    </>
  );
}
