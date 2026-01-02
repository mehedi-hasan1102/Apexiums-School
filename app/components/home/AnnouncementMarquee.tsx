'use client';

import Marquee from 'react-fast-marquee';

export default function AnnouncementMarquee() {
  return (
    <div className="w-full bg-yellow-100 py-2">
      <Marquee
        speed={50}
        pauseOnHover
        gradient={false}
      >
        <span className="mx-8 text-base sm:text-lg font-semibold text-blue-600">
          Welcome to <strong>Kids School</strong> — The best place to explore, learn,
          and grow! Create a better future with us. Your child is our priority.
        </span>
      </Marquee>
    </div>
  );
}
