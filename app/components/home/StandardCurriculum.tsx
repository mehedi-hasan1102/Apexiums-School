'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

type CurriculumItem = {
  id: number;
  title: string;
  age: string;
  description: string;
  bg: string;
  readMoreColor: string;
  icon: string;
};

const curriculumData: CurriculumItem[] = [
  {
    id: 1,
    title: 'Kinder',
    age: '(3–6 Years)',
    description:
      'Nurture foundational skills and ignite curiosity through interactive learning designed for young minds.',
    bg: 'bg-cyan-100',
    readMoreColor: 'text-blue-600',
    icon: '/assets/kinder.png',
  },
  {
    id: 2,
    title: 'Elementary School',
    age: '',
    description:
      'Build strong academic foundations with a balanced approach to creativity, critical thinking, and problem-solving.',
    bg: 'bg-amber-100',
    readMoreColor: 'text-green-600',
    icon: '/assets/elementary.png',
  },
  {
    id: 3,
    title: 'Middle',
    age: '(10–16 Years)',
    description:
      'Empower students with advanced knowledge and life skills, preparing them for future academic and personal success.',
    bg: 'bg-purple-100',
    readMoreColor: 'text-red-500',
    icon: '/assets/middle.png',
  },
];

export default function StandardCurriculum() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-center mb-14">
          Standard Curriculum
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curriculumData.map((item) => (
            <div
              key={item.id}
              className={`${item.bg} rounded-2xl shadow-sm p-8 text-center transition-transform duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-1">
                {item.title}{' '}
                <span className="font-medium text-gray-700">
                  {item.age}
                </span>
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed mt-4 mb-6">
                {item.description}
              </p>

              {/* Read More */}
              <button
                className={`text-sm font-medium ${item.readMoreColor} hover:underline underline-offset-4`}
              >
                Read More
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <button className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white hover:bg-orange-500 transition">
            <ArrowLeft size={20} />
          </button>
          <button className="w-12 h-12 rounded-full bg-orange-400 flex items-center justify-center text-white hover:bg-orange-500 transition">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
