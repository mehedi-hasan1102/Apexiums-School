
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Stagger text animation
      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
      });

      // Hero image float animation
      gsap.to('.hero-image', {
        y: -20,
        rotation: 1.5,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Decorative shapes animation
      gsap.to('.shape', {
        y: 20,
        rotation: 15,
        duration: 6,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">

          {/* Hero Image with Animated Shapes */}
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="absolute -z-10 flex gap-6">
              <div className="shape h-[380px] w-[210px] rounded-[70px] bg-sky-500/90" />
              <div className="shape h-[380px] w-[210px] rounded-[70px] bg-orange-400/90" />
            </div>

            <Image
              src="/assets/hero-kids.png"
              alt="Happy student"
              width={340}
              height={460}
              priority
              className="hero-image rounded-xl object-contain"
            />
          </div>

          {/* Hero Text */}
          <div className="order-2 md:order-1">
            <span className="hero-text inline-block rounded-full bg-sky-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-sky-600">
              Kids Education
            </span>

            <h1 className="hero-text mt-6 text-4xl font-extrabold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Empowering <span className="text-orange-500">students</span> from early age
              <br />
              towards <span className="text-sky-500">bright vision</span>
            </h1>

            <p className="hero-text mt-6 max-w-xl text-base leading-relaxed text-neutral-600">
              We nurture curiosity, confidence, creativity, and compassion to help
              children grow into responsible, innovative, and happy learners in a
              diverse world.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 hero-text">
              <Link href="/admission">
                <button className="rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg hover:scale-105">
                  Enroll Now
                </button>
              </Link>

              <Link
                href="/about"
                className="
                  rounded-full border border-orange-500
                  px-6 py-2
                  text-sm font-semibold text-orange-500
                  transition-colors duration-200
                  hover:bg-orange-500 hover:text-white
                  hover:scale-105
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                "
              >
                Learn More
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
