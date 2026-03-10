"use client";

import Reveal from "../motion/Reveal";

const steps = [
  {
    id: 1,
    text: "The insurer defines the SLA framework and reporting expectations.",
  },
  {
    id: 2,
    text: "The supplier uploads raw operational data on a defined cadence.",
  },
  {
    id: 3,
    text: "Stratus maps and validates data against the agreed SLA parameters.",
  },
  {
    id: 4,
    text: "Both parties review structured dashboards and act on early signals.",
  },
  {
    id: 5,
    text: "Stratus AI interprets the data to reveal patterns, highlight emerging risks, and generate deeper insight into supplier performance.",
  },
];

export default function Section5Mobile() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[420px] px-6 py-12 text-center">
        <Reveal delay={0}>
          <div className="text-3xl font-bold text-[#1867D4] font-[Inter]">
            HOW STRATUS WORKS
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-3 text-xl font-normal text-[#448CF0] font-[Inter]">
            A Structured Oversight Workflow
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-8 space-y-5 text-left text-base font-normal leading-7 text-stone-600 font-[Inter]">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-4">
                <div className="mt-[4px] flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 border-[#1867D4] text-xs font-semibold text-[#1867D4]">
                  {step.id}
                </div>
                <div>{step.text}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mx-auto mt-8 max-w-[320px] text-center text-base font-normal leading-7 text-stone-500 font-[Inter]">
            No disruption to existing claims platforms.
            <br />
            No automated decisions.
            <br />
            No opaque scoring models.
            <br />
            <br />
            Just structured oversight.
          </div>
        </Reveal>

        <Reveal delay={0.6}>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="mt-8 inline-flex h-12 w-64 items-center justify-center rounded-full bg-[#1867D4] text-lg font-medium text-white"
          >
            Contact us
          </button>
        </Reveal>
      </div>
    </section>
  );
}
