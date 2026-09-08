import React from 'react';
import { timelineData } from '../data/timelineData'; // We'll create this data file.

export const Timeline = () => (
  <section id="timeline" className="py-16 bg-[#0B2D58] text-[#F4F1EB]">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center gradient-shimmer mb-12">Perjalanan Waktu</h2>
      <div className="relative space-y-12">
        {timelineData.map((item, idx) => (
          <div key={idx} className="flex items-start">
            <div className="flex flex-col items-center mr-6">
              <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                {idx + 1}
              </div>
              <div className="w-px flex-1 bg-cyan-400" />
            </div>
            <div className="glass-panel p-6 flex-1">
              <h3 className="text-xl font-semibold gradient-shimmer">{item.title}</h3>
              <p className="text-sm text-sky-300 mt-2">{item.date}</p>
              <p className="mt-3">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
