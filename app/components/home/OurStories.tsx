'use client';

import Image from 'next/image';
import Link from 'next/link';

type Story = {
  id: number;
  title: string;
  description?: string;
  date: string;
  dateColor: string;
  image: string;
  featured?: boolean;
};

const stories: Story[] = [
  {
    id: 1,
    title: 'A fun toddler coloring training on classroom',
    description:
      'Engaging children in creative activities to enhance their learning experience and foster a love for education.',
    date: 'Nov 19, 2024',
    dateColor: 'bg-rose-400',
    image: '/images/story-1.jpg',
    featured: true,
  },
  {
    id: 2,
    title: "Find out if a school fits the family’s needs",
    date: 'Dec 22, 2024',
    dateColor: 'bg-orange-300',
    image: '/images/story-2.jpg',
  },
  {
    id: 3,
    title: 'Summer math & literacy centres for kids',
    date: 'Jan 03, 2025',
    dateColor: 'bg-sky-400',
    image: '/images/story-3.jpg',
  },
  {
    id: 4,
    title: 'Classroom management techniques for new tutors',
    date: 'Jan 06, 2025',
    dateColor: 'bg-green-400',
    image: '/images/story-4.jpg',
  },
  {
    id: 5,
    title: 'Conversation rhymes improve kids listening',
    date: 'Jan 09, 2025',
    dateColor: 'bg-purple-400',
    image: '/images/story-5.jpg',
  },
];

export default function OurStories() {
  const featured = stories.find(s => s.featured);
  const rest = stories.filter(s => !s.featured);

  return (
    <section className="bg-gradient-to-b from-[#fff7ef] to-[#ffe7c7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold mb-12">
          Our Stories
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Card */}
          {featured && (
            <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="relative h-[320px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
                <span
                  className={`absolute bottom-4 left-4 px-4 py-1.5 text-sm text-white rounded-full ${featured.dateColor}`}
                >
                  {featured.date}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">
                  {featured.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {featured.description}
                </p>
              </div>
            </div>
          )}

          {/* Right Grid Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {rest.map(story => (
              <div
                key={story.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative h-40">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <span
                    className={`absolute bottom-3 left-3 px-3 py-1 text-xs text-white rounded-full ${story.dateColor}`}
                  >
                    {story.date}
                  </span>
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-sm leading-snug">
                    {story.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <Link
            href="/stories"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-8 py-3 text-sm text-white hover:bg-neutral-800 transition"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
