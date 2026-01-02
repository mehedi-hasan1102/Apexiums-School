'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <nav
        className=" flex items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-sm font-semibold">
          <li>
            <Link href="/" className="nav-link text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link text-green-600">
              About
            </Link>
          </li>
          <li>
            <Link href="/facilities" className="nav-link text-orange-500">
              Facilities
            </Link>
          </li>
          <li>
            <Link href="/admission" className="nav-link text-red-600">
              Admission
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden md:block">
          <button className="rounded-full bg-orange-500 px-6 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
            Contact
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white shadow-sm">
          <ul className="flex flex-col gap-4 px-6 py-6 text-sm font-semibold">
            <li>
              <Link onClick={() => setOpen(false)} href="/" className="mobile-link text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="/about" className="mobile-link text-green-600">
                About
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="/facilities" className="mobile-link text-orange-500">
                Facilities
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="/admission" className="mobile-link text-red-600">
                Admission
              </Link>
            </li>

            <Link onClick={() => setOpen(false)} href="/contact">
              <button className="mt-2 w-full rounded-full bg-orange-500 py-2 text-white hover:bg-orange-600 transition-colors">
                Contact
              </button>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
}
