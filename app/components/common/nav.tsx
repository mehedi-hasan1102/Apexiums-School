'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <nav
        className="
          mx-auto max-w-5xl
          flex items-center justify-between
          px-8 py-4
        "
        aria-label="Main navigation"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/logo.png"
            alt="School"
            width={32}
            height={32}
            priority
          />
          <span className="text-lg font-bold tracking-wide text-neutral-900">
            SCHOOL
          </span>
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-10 text-sm font-semibold">
          <li>
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/facilities"
              className="text-orange-500 hover:text-orange-600 transition-colors"
            >
              Facilities
            </Link>
          </li>

          <li>
            <Link
              href="/admission"
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              Admission
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <Link href="/contact">
          <button
            type="button"
            className="
              rounded-full
              bg-orange-500
              px-6 py-2
              text-sm font-semibold text-white
              hover:bg-orange-600
              transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
            "
          >
            Contact
          </button>
        </Link>
      </nav>
    </header>
  );
}
