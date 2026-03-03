import Image from 'next/image';

type CurriculumItem = {
  id: number;
  title: string;
  age: string;
  description: string;
  bg: string;
  icon: string;
};

function CurriculumCard({ item }: { item: CurriculumItem }) {
  return (
    <article className="curriculum-card h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_34px_rgba(15,23,42,0.08)]">
      <div className="mb-5 flex items-start justify-between gap-3">
        <p className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-700 ${item.bg}`}>
          Stage {item.id}
        </p>
        <div className="relative h-14 w-14 overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-2">
          <Image src={item.icon} alt={item.title} fill sizes="56px" className="object-contain p-2" />
        </div>
      </div>

      <h3 className="text-xl font-semibold leading-snug text-slate-900">
        {item.title}
        <span className="ml-2 text-base font-medium text-slate-500">{item.age}</span>
      </h3>

      <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>

      <button type="button" className="btn btn-secondary mt-6">
        Read More
      </button>
    </article>
  );
}

const curriculumData: CurriculumItem[] = [
  {
    id: 1,
    title: 'Kinder',
    age: '(3–6 Years)',
    description:
      'Nurture foundational skills and ignite curiosity through interactive learning designed for young minds.',
    bg: 'bg-cyan-100',
    icon: '/assets/kinder.png',
  },
  {
    id: 2,
    title: 'Elementary School',
    age: '',
    description:
      'Build strong academic foundations with a balanced approach to creativity, critical thinking, and problem-solving.',
    bg: 'bg-amber-100',
    icon: '/assets/elementary.png',
  },
  {
    id: 3,
    title: 'Middle',
    age: '(10–16 Years)',
    description:
      'Empower students with advanced knowledge and life skills, preparing them for future academic and personal success.',
    bg: 'bg-purple-100',
    icon: '/assets/middle.png',
  },
  {
    id: 4,
    title: 'High School',
    age: '(14–18 Years)',
    description:
      'Prepare students for higher education and careers through advanced academics, leadership, and personal development.',
    bg: 'bg-rose-100',
    icon: '/assets/high-school.png',
  },
];

export default function StandardCurriculum() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="page-wrap max-w-6xl">
        <div className="curriculum-heading mb-10 border-b border-slate-200 pb-8 sm:mb-12">
          <div>
            <p className="eyebrow">Academic Pathway</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">Standard Curriculum</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              A stage-by-stage learning journey designed to build confidence, core knowledge, and future readiness.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {curriculumData.map((item) => (
            <div key={item.id} className="h-full">
              <CurriculumCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
