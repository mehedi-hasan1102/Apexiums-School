'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Dribbble,
  Twitter,
  Plus,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left: Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Kids Education"
                width={44}
                height={44}
              />
              <h3 className="text-xl font-semibold">
                Kids <br /> Education
              </h3>
            </div>

            <p className="text-sm leading-relaxed text-white/90 max-w-sm">
              Our school is dedicated to providing a nurturing and stimulating
              environment for young minds. We focus on holistic development,
              ensuring that each child grows academically, socially, and
              emotionally. Join us in our mission to empower the next generation
              of leaders and innovators.
            </p>
          </div>

          {/* Middle: About School */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              About School
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:underline">
                  Facilities
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:underline">
                  Admission
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Social */}
          <div>
            <h4 className="text-lg font-semibold mb-5">
              Keep In Touch
            </h4>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-blue-700 hover:opacity-90 transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-pink-500 hover:opacity-90 transition"
              >
                <Dribbble size={18} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-sky-400 hover:opacity-90 transition"
              >
                <Twitter size={18} />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-red-500 hover:opacity-90 transition"
              >
                <Plus size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
