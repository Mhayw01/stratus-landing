"use client";

import Reveal from "../motion/Reveal";

const benefits = [
  "Early access to the platform",
  "Direct input into development priorities",
  "Structured visibility into supplier performance",
  "Priority consideration for future sector expansion",
];

export default function Section6Mobile() {
  return (
    <section className="w-full bg-gradient-to-r from-[#3E6FA4] to-[#6FA8DC]">
      <div className="mx-auto w-full max-w-[420px] px-6 py-12 text-center text-white">
        <Reveal delay={0}>
          <div className="text-3xl font-bold font-[Inter]">
            EARLY ACCESS PROGRAMME
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-3 text-lg font-normal font-[Inter]">
            Join the Stratus EA Programme
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mx-auto mt-5 text-base font-normal leading-7 font-[Inter]">
            Stratus is launching in a focused, single-sector EA
            <br />
            to ensure clarity, correctness, and real operational impact.
          </div>
        </Reveal>
        <Reveal delay={0.45}>
          <div className="mt-5 text-base font-normal font-[Inter]">
            EA participants receive:
          </div>
        </Reveal>
        <Reveal delay={0.6}>
          <ul className="mx-auto mt-3 max-w-[320px] list-disc pl-6 text-left text-base font-normal leading-7 font-[Inter]">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.9}>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-contact"))}
            className="mt-8 inline-flex h-12 w-64 items-center justify-center rounded-full bg-[#2F557F] text-lg font-medium text-white"
          >
            GET EARLY ACCESS
          </button>
        </Reveal>
      </div>
    </section>
  );
}
