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
];

export default function Section5() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-20 text-center">
        <Reveal delay={0}>
          <div className="text-4xl font-bold text-[#1867D4] font-[Inter]">
            HOW STRATUS WORKS
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-4 text-2xl font-normal text-[#448CF0] font-[Inter]">
            A Structured Oversight Workflow
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mx-auto mt-12 max-w-[760px] space-y-6 text-left text-xl font-normal leading-[50px] text-stone-600 font-[Inter]">
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-6">
                <div className="mt-[6px] flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2 border-[#1867D4] text-sm font-semibold text-[#1867D4]">
                  {step.id}
                </div>
                <div>{step.text}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mx-auto mt-12 max-w-[520px] text-center text-xl font-normal leading-8 text-stone-500 font-[Inter]">
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
            className="mt-10 inline-flex h-16 w-80 items-center justify-center rounded-full bg-[#1867D4] text-2xl font-medium text-white"
          >
            Contact us
          </button>
        </Reveal>
      </div>
    </section>
  );
}
