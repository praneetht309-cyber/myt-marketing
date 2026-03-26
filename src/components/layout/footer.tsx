import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/logo.png"
              alt="MYT"
              width={120}
              height={36}
              className="h-9 w-auto"
            />
            <p className="mt-2 text-sm text-text-body">
              Management of Stand Alone Apartments, Simplified.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading">
              Quick Links
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/features"
                  className="text-sm text-text-body hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/early-access"
                  className="text-sm text-text-body hover:text-primary"
                >
                  Early Access
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-text-body hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-text-body hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-text-body hover:text-primary"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-text-heading">
              Get in Touch
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:hello@myt.community"
                  className="text-sm text-text-body hover:text-primary"
                >
                  hello@myt.community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-xs text-text-body">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
