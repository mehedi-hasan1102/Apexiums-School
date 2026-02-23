'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BellRing, Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative isolate min-h-[calc(100svh-110px)] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/Pasted image.png"
            alt="Students in classroom"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-indigo-950/55 to-indigo-900/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(99,102,241,0.35),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(14,165,233,0.25),transparent_38%)]" />

        <article className="relative z-10 mx-auto flex min-h-[calc(100svh-110px)] max-w-5xl flex-col items-center justify-center px-5 py-14 text-center text-white sm:px-8">
          <div className="rounded-3xl bg-white/90 p-3 shadow-lg backdrop-blur">
            <Image src="/assets/logo.png" alt="Apexiums School logo" width={118} height={118} />
          </div>

          <h1 className="mt-8 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl md:text-6xl">
            Apexiums School
            <span className="mt-2 block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-400 bg-clip-text text-transparent">
              Excellence in Education
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-lg font-medium text-white/90 sm:text-2xl">
            These are not just years, this is the story of growth.
          </p>
          <p className="mt-2 max-w-2xl text-base text-white/85 sm:text-xl">A place where every young mind can thrive.</p>

          <div className="mt-10 grid w-full max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/admission"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-4 text-base font-bold text-white shadow-lg shadow-emerald-900/30 transition hover:scale-[1.02]"
            >
              Apply for Admission
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-4 text-base font-bold text-white shadow-lg shadow-blue-900/30 transition hover:scale-[1.02]"
            >
              <Search size={18} />
              Check Results
            </Link>

            <Link
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-5 py-4 text-base font-bold text-white shadow-lg shadow-orange-900/30 transition hover:scale-[1.02] sm:col-span-2 lg:col-span-1"
            >
              <BellRing size={18} />
              Notice Board
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
