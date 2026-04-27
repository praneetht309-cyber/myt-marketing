import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { H6, BodySm, Caption } from "@/components/ui/typography";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <Image
              src="/myt-logo.svg"
              alt="MYT"
              width={64}
              height={64}
              className="h-14 w-14 object-contain sm:h-16 sm:w-16"
            />
            <BodySm className="mt-3">
              Stand Alone Apartment Management Platform.
            </BodySm>
          </div>

          {/* Contact */}
          <div>
            <H6>Get in Touch</H6>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="mailto:hello@themyt.app"
                  className="text-sm leading-relaxed text-text-body hover:text-primary"
                >
                  hello@themyt.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6">
          <Caption as="p" className="block text-center sm:text-left">
            Recognized by DPIIT, Govt. of India ·{" "}
            <span className="font-medium text-text-heading">
              {SITE.dpiitRecognition}
            </span>
          </Caption>
          <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
            <Caption as="p" className="block">
              &copy; {new Date().getFullYear()} Sarvapindi Systems Private Limited. All rights reserved.
            </Caption>
            <div className="flex gap-4">
              <Link
                href="/privacy"
                className="text-xs leading-normal text-text-body hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs leading-normal text-text-body hover:text-primary"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
