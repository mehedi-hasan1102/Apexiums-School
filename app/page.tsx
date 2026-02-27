import Link from 'next/link';
import type { Metadata } from 'next';
import AnnouncementMarquee from './components/home/AnnouncementMarquee';
import HeroSection from './components/home/HeroSection';
import StandardCurriculum from './components/home/StandardCurriculum';
import OurStories from './components/home/OurStories';
import { EVENTS_NEWS, FACULTY_MEMBERS } from '@/app/lib/school-data';

const KEY_STATS = [
  { label: 'Students', value: '1,240+' },
  { label: 'Teachers', value: '86' },
  { label: 'Clubs & Activities', value: '22' },
  { label: 'Board Success Rate', value: '98%' },
];

export const metadata: Metadata = {
  title: 'Apexiums School | Home',
  description:
    'Official Apexiums School website with admissions, academics, events, faculty information, and role-based portals.',
};

export default function Home() {
  const featuredEvents = EVENTS_NEWS.slice(0, 3);

  return (
    <div>
      <AnnouncementMarquee />
      <HeroSection />

      <section className="page-wrap pb-10 pt-10">
        <div className="surface-card grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4">
          {KEY_STATS.map((stat) => (
            <article key={stat.label} className="rounded-xl bg-slate-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-neutral-900">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-600">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap pb-10">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Planning</p>
            <h2 className="text-3xl font-bold">Admissions and School Information</h2>
          </div>
          <Link href="/admission" className="btn btn-secondary">
            Admission Details
          </Link>
        </div>

        <div className="section-grid lg:grid-cols-3">
          <article className="surface-card p-6">
            <p className="eyebrow">School Mission</p>
            <h3 className="mt-2 text-xl font-bold">Learning with character and creativity</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              We provide a safe, inclusive, and future-ready learning environment where each student receives
              academic support and personal mentoring.
            </p>
            <Link href="/about" className="btn btn-secondary mt-5">
              Read Mission
            </Link>
          </article>

          <article className="surface-card p-6">
            <p className="eyebrow">Admissions 2026</p>
            <h3 className="mt-2 text-xl font-bold">Applications are open now</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Admissions are open for Playgroup through Grade 10 with assessment-based placement and parent
              counseling support.
            </p>
            <Link href="/admission" className="btn btn-primary mt-5">
              Apply Now
            </Link>
          </article>

          <article className="surface-card p-6">
            <p className="eyebrow">Admission Support</p>
            <h3 className="mt-2 text-xl font-bold">Guided start for every new student</h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Structured support from enrollment to classroom adjustment, including enrollment guidance, family
              orientation, and transition follow-up after joining.
            </p>
            <Link href="/admission" className="btn btn-secondary mt-5">
              Get Admission Support
            </Link>
          </article>
        </div>
      </section>

      <StandardCurriculum />

      <section className="page-wrap py-14">
        <div className="mb-8 flex items-center justify-between gap-3">
          <div>
            <p className="eyebrow">Events</p>
            <h2 className="text-3xl font-bold">Upcoming Events and Notices</h2>
          </div>
          <Link href="/events" className="btn btn-secondary">
            See All
          </Link>
        </div>

        <div className="section-grid md:grid-cols-3">
          {featuredEvents.map((item) => (
            <article key={item.title} className="surface-card p-5">
              <span className="data-pill">{item.type}</span>
              <h3 className="mt-3 text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-orange-600">{item.date}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-wrap pb-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">People</p>
            <h2 className="text-3xl font-bold">Faculty Highlights</h2>
          </div>
          <Link href="/faculty" className="btn btn-secondary">
            View Faculty
          </Link>
        </div>

        <div className="section-grid md:grid-cols-2 lg:grid-cols-4">
          {FACULTY_MEMBERS.slice(0, 4).map((member) => (
            <article key={member.name} className="surface-card p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">{member.experience} experience</p>
              <h3 className="mt-3 text-lg font-bold">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-neutral-700">{member.role}</p>
              <p className="mt-3 text-sm text-neutral-600">{member.subject}</p>
            </article>
          ))}
        </div>
      </section>

      <OurStories />
    </div>
  );
}
